 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCNzDj-mtM8EeSVp1oX1YTwJoih-qdUxYI",
     authDomain: "sccc-hackathon-spring-2019.firebaseapp.com",
     databaseURL: "https://sccc-hackathon-spring-2019.firebaseio.com",
     projectId: "sccc-hackathon-spring-2019",
     storageBucket: "sccc-hackathon-spring-2019.appspot.com",
     messagingSenderId: "792531230283"
 };
 firebase.initializeApp(config);
 var user = firebase.auth().currentUser;
 var userId;






 // Listen for form submit
 document.getElementById('registrationForm').addEventListener('submit', submitForm);

 // Submit form
 function submitForm(e) {
     e.preventDefault();

     // Get values
     var teamName = getInputVal('team-name');
     var memberName1 = getInputVal('member-name-1');
     var memberName2 = getInputVal('member-name-2');
     var memberName3 = getInputVal('member-name-3');
     var memberName4 = getInputVal('member-name-4');
     var projectSummary = getInputVal('project-summary');
     var emblem = getInputVal('emblem-input');

     // Save message
     saveTeam(teamName, memberName1, memberName2, memberName3, memberName4, projectSummary, emblem);

     // Show alert
     document.querySelector('.alert').style.display = 'block';

     // Hide alert after 3 seconds
     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);

     // Clear form
     document.getElementById('registrationForm').reset();
 }

 // Function to get get form values
 function getInputVal(id) {
     return document.getElementById(id).value;
 }


 // Save message to firebase
 function saveTeam(teamName, memberName1, memberName2, memberName3, memberName4, projectSummary, emblem) {
     firebase.auth().onAuthStateChanged(function (user) {
             if (user) {
                 // User is signed in.
                 user = firebase.auth().currentUser;
                 this.userId = user.uid;
                 // Reference messages collection
                 //  var teamsRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
                 //firebase.database().ref('users/' + firebase.auth().currentUser.uid).push();
                 firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
                     teamName: teamName,
                     memberName1: memberName1,
                     memberName2: memberName2,
                     memberName3: memberName3,
                     memberName4: memberName4,
                     projectSummary: projectSummary,
                     emblem: emblem
                 });
             } else {
                 // No user is signed in.
             }
         }

     )
 }



 //LOGOUT----------------------------
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
