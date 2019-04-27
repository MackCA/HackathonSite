document.getElementById("registration-form").addEventListener('submit', profileUpdate);




var database = firebase.database();
//var teamList = [];
///get User Profile
var user = firebase.auth().currentUser;
var teamName, memberName1, memberName2, memberName3, projectSummary, emblem, uid, emailVerified;

if (user != null) {
    teamName: user.teamName;
    memberName1: user.memberName1;
    memberName2: user.memberName1;
    memberName3: user.memberName1;
    memberName3: user.memberName1;
    projectSummary: user.projectSummary;
    emblem = user.emblem;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
}
// https: //sccc-hackathon-spring-2019.firebaseio.com/



function profileUpdate() {
    // Get a reference to the database service
    var databaseRef = firebase.database().ref('users');

    function submitData(e) {
        e.preventDefault();
        var teamData = [];

        //Collect form data and put into an array 'teamData'
        function setTeamData() {

            var fields = ['team-name', 'member-name-1', 'member-name-2', 'member-name-3', 'member-name-4', 'description-input', 'emblem-input'];

            for (var i = 0; i < fields.length; i++) {
                if (document.getElementById(fields[i]).value != null) {
                    var teamDataUpdate = teamData.push(document.getElementById(fields[i]).value);
                }
            }
            var formData = JSON.stringify($("teamData").serializeArray());
            //teamList.push(teamData);
        }
        var newDataref = databaseRef.push();
        newDataref.set({
            formData
        })
    }
}

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.alert("You are now logged out.");
        window.location = 'index.html'
    }).catch(function (error) {
        // An error happened.
        window.alert("Error: " + errorMessage);
    });
}
