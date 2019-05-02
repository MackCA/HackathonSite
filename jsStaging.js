// Shortcuts to DOM Elements.
var teamName = document.getElementById('message-form');
var member1 = document.getElementById('member1');
var member2 = document.getElementById('member2');
var member3 = document.getElementById('member3');
var member4 = document.getElementById('member4');
var projSummary = document.getElementById('projSummary');
var teamEmblem = document.getElementById('teamEmblem');

var addButton = document.getElementById('add');
var recentPostsSection = document.getElementById('recent-posts-list');
var userPostsSection = document.getElementById('user-posts-list');
var topUserPostsSection = document.getElementById('top-user-posts-list');
var recentMenuButton = document.getElementById('menu-recent');
var myPostsMenuButton = document.getElementById('menu-my-posts');
var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
var listeningFirebaseRefs = [];

 <li>
                <div class="row">
                    <div class="profile">
                        <div class="col span-1-of-4">
                            <img src="\resources\img\Sith Emblem.jpg" alt="Team 1 Emblem" class="team-emblem-profile" id="teamEmblem">
                        </div>
                        <div class="col span-1-of-4">

                            <h3 id="teamListHead"></h3>
                            <div class="team-listing">

                                <h4 id="member1">
                                    <ion-icon name="person-add" class="icon-small"></ion-icon>Team Member
                                </h4>
                                <h4 id="member2">
                                    <ion-icon name="person-add" class="icon-small"></ion-icon>Team Member
                                </h4>
                                <h4 id="member3">
                                    <ion-icon name="person-add" class="icon-small"></ion-icon>Team Member
                                </h4>
                                <h4 id="member4">
                                    <ion-icon name="person-add" class="icon-small"></ion-icon>Team Member
                                </h4>
                                <br>
                                <div class="rw-ui-container" data-title="team-1-rating"></div>
                            </div>
                        </div>
                        <div class="col span-2-of-4" class="project-summary" id ="projSummary">
                            <h3>Project Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor at justo aliquam finibus. Mauris non magna justo. Curabitur quis consequat ipsum. Phasellus luctus nisi ac tristique vehicula. Morbi faucibus, sapien quis fringilla bibendum, ante elit sagittis dui, a ultricies lorem justo ac leo. Curabitur sit amet pellentesque est. Vivamus et leo metus. Fusce dignissim a sapien vitae facilisis. Vestibulum finibus sollicitudin felis eget malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function writeNewPost(uid,teamName,memberName1,memberName2,memberName3,memberName4,projectSummary,emblem) {
    // A post entry.
    var teamData = {
        teamName: teamName,
        memberName1: memberName1,
        memberName2: memberName2,
        memberName3: memberName3,
        memberName4: memberName4,
        projectSummary: projectSummary,
        emblem: emblem
    };


    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('users').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = teamData;
    updates['/user-posts/' + uid + '/' + newPostKey] = teamData;

    return firebase.database().ref().update(updates);
}
// [END write_fan_out]

/**
 * Star/unstar post.
 */
// [START post_stars_transaction]
function toggleStar(postRef, uid) {
    postRef.transaction(function (post) {
        if (post) {
            if (post.stars && post.stars[uid]) {
                post.starCount--;
                post.stars[uid] = null;
            } else {
                post.starCount++;
                if (!post.stars) {
                    post.stars = {};
                }
                post.stars[uid] = true;
            }
        }
        return post;
    });
}
// [END post_stars_transaction]

/**
 * Creates a post element.////////////////////////////////////////////////////////////////////////////////////////////////////////
 */
function createPostElement(postId, title, text, author, authorId, authorPic) {
    var uid = firebase.auth().currentUser.uid;

    var html =
        '<div class="post post-' + postId + ' mdl-cell mdl-cell--12-col ' +
        'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
        '<div class="mdl-card mdl-shadow--2dp">' +
        '<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
        '<h4 class="mdl-card__title-text"></h4>' +
        '</div>' +
        '<div class="header">' +
        '<div>' +
        '<div class="avatar"></div>' +
        '<div class="username mdl-color-text--black"></div>' +
        '</div>' +
        '</div>' +
        '<span class="star">' +
        '<div class="not-starred material-icons">star_border</div>' +
        '<div class="starred material-icons">star</div>' +
        '<div class="star-count">0</div>' +
        '</span>' +
        '<div class="text"></div>' +
        '<div class="comments-container"></div>' +
        '<form class="add-comment" action="#">' +
        '<div class="mdl-textfield mdl-js-textfield">' +
        '<input class="mdl-textfield__input new-comment" type="text">' +
        '<label class="mdl-textfield__label">Comment...</label>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>';

    // Create the DOM element from the HTML.
    var div = document.createElement('div');
    div.innerHTML = html;
    var postElement = div.firstChild;
    if (componentHandler) {
        componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
    }

    var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
    var commentInput = postElement.getElementsByClassName('new-comment')[0];
    var star = postElement.getElementsByClassName('starred')[0];
    var unStar = postElement.getElementsByClassName('not-starred')[0];
///////////////////////////////////////////////////////////////////////////////////////////////
    // Set values.
    postElement.getElementsByClassName('text')[0].innerText = text;
    postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
    postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
    postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
        (authorPic || './silhouette.jpg') + '")';

    // Listen for comments.
    // [START child_event_listener_recycler]
    var commentsRef = firebase.database().ref('post-comments/' + postId);
    commentsRef.on('child_added', function (data) {
        addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_changed', function (data) {
        setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_removed', function (data) {
        deleteComment(postElement, data.key);
    });
    // [END child_event_listener_recycler]

    // Listen for likes counts.
    // [START post_value_event_listener]
    var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
    starCountRef.on('value', function (snapshot) {
        updateStarCount(postElement, snapshot.val());
    });
    // [END post_value_event_listener]

    // Listen for the starred status.
    var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid);
    starredStatusRef.on('value', function (snapshot) {
        updateStarredByCurrentUser(postElement, snapshot.val());
    });

    // Keep track of all Firebase reference on which we are listening.
    listeningFirebaseRefs.push(commentsRef);
    listeningFirebaseRefs.push(starCountRef);
    listeningFirebaseRefs.push(starredStatusRef);

    // Create new comment.
    addCommentForm.onsubmit = function (e) {
        e.preventDefault();
        createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
        commentInput.value = '';
        commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
    };

    // Bind starring action.
    var onStarClicked = function () {
        var globalPostRef = firebase.database().ref('/posts/' + postId);
        var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
        toggleStar(globalPostRef, uid);
        toggleStar(userPostRef, uid);
    };
    unStar.onclick = onStarClicked;
    star.onclick = onStarClicked;
    return postElement;
}

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postId, username, uid, text) {
    firebase.database().ref('post-comments/' + postId).push({
        text: text,
        author: username,
        uid: uid
    });
}

/**
 * Updates the starred status of the post.
 */
function updateStarredByCurrentUser(postElement, starred) {
    if (starred) {
        postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
        postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
    } else {
        postElement.getElementsByClassName('starred')[0].style.display = 'none';
        postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
    }
}

/**
 * Updates the number of stars displayed for a post.
 */
function updateStarCount(postElement, nbStart) {
    postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
}

/**
 * Creates a comment element and adds it to the given postElement.
 */
function addCommentElement(postElement, id, text, author) {
    var comment = document.createElement('div');
    comment.classList.add('comment-' + id);
    comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
    var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
    commentsContainer.appendChild(comment);
}

/**
 * Sets the comment's values in the given postElement.
 */
function setCommentValues(postElement, id, text, author) {
    var comment = postElement.getElementsByClassName('comment-' + id)[0];
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('fp-username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given postElement.
 */
function deleteComment(postElement, id) {
    var comment = postElement.getElementsByClassName('comment-' + id)[0];
    comment.parentElement.removeChild(comment);
}

/**
 * Starts listening for new posts and populates posts lists.
 */
function startDatabaseQueries() {
    // [START my_top_posts_query]
    var myUserId = firebase.auth().currentUser.uid;
    var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
    // [END my_top_posts_query]
    // [START recent_posts_query]
    var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
    // [END recent_posts_query]
    var userPostsRef = firebase.database().ref('user-posts/' + myUserId);

    var fetchPosts = function (postsRef, sectionElement) {
        postsRef.on('child_added', function (data) {
            var author = data.val().author || 'Anonymous';
            var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
            containerElement.insertBefore(
                createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
                containerElement.firstChild);
        });
        postsRef.on('child_changed', function (data) {
            var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
            var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
            postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
            postElement.getElementsByClassName('username')[0].innerText = data.val().author;
            postElement.getElementsByClassName('text')[0].innerText = data.val().body;
            postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
        });
        postsRef.on('child_removed', function (data) {
            var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
            var post = containerElement.getElementsByClassName('post-' + data.key)[0];
            post.parentElement.removeChild(post);
        });
    };

    // Fetching and displaying all posts of each sections.
    fetchPosts(topUserPostsRef, topUserPostsSection);
    fetchPosts(recentPostsRef, recentPostsSection);
    fetchPosts(userPostsRef, userPostsSection);

    // Keep track of all Firebase refs we are listening to.
    listeningFirebaseRefs.push(topUserPostsRef);
    listeningFirebaseRefs.push(recentPostsRef);
    listeningFirebaseRefs.push(userPostsRef);
}
