   (function () {
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

           //------------------------------------------------------------------------------
           //------------------------------Team Listing Population--------------------------
           //------------------------------------------------------------------------------
           //get elements
           document.getElementById("teamListHead1").innerHTML += "Hi";
