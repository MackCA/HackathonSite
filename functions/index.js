const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
<script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>
<script>
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
</script>