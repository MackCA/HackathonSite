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
   //refrence messages collection
   var messagesRef = firebase.database().ref('messages');

   // $(document).ready(function () {

   /* For the sticky navigation */
   $('.js--section-rules').waypoint(function (direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
   }, {
       offset: '60px;'
   });

   /* Scroll on buttons*/
   $('.js--scroll-to-register').click(function () {
       $('html, body').animate({
           scrollTop: $('.js--section-register').offset().top
       }, 1000);
   });

   /* Navigation scroll */
   $(function () {
       $('a[href*=#]:not([href=#])').click(function () {
           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
               if (target.length) {
                   $('html,body').animate({
                       scrollTop: target.offset().top
                   }, 1000);
                   return false;
               }
           }
       });
   });

   /* Mobile navigation */
   $('.js--nav-icon').click(function () {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');

       nav.slideToggle(200);

       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
   });

   //   });

   function showLogin() {
       var x = document.getElementById("login-box");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   }

   

   function register() {
       var regEmail = document.getElementById("email-register").value;
       var regPassw = document.getElementById("password-register").value;

       firebase.auth().createUserWithEmailAndPassword(regEmail, regPassw).catch(function (error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;

           window.alert("Error: " + errorMessage);
           // ...
       });
   }


   function login() {

       var userEmail = document.getElementById("login-email").value;
       var userPassword = document.getElementById("login-pwd").value;

       firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                window.location = 'Profile.html'
     
            } else {
                // No user is signed in.
            }
        });

           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           window.alert("Error: " + errorMessage);
           // ...

       });
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


   function passwordReset() {
       var auth = firebase.auth();
       var emailAddress = document.getElementById("login-email").value;

       auth.sendPasswordResetEmail(emailAddress).then(function () {
           // Email sent.
           window.alert("Email sent to: " + emailAddress)
       }).catch(function (error) {
           // An error happened.

           window.alert("Error: " + errorMessage);
       });
   }

   function profileUpdate() {


   }
