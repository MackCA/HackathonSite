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

   $(document).ready(function () {

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

   });

   function showLogin() {
       var x = document.getElementById("login-box");
       if (x.style.display === "block") {
           x.style.display = "none";
       } else {
           x.style.display = "block";
       }
   }


   firebase.auth().onAuthStateChanged(function (user) {
       if (user) {
           // User is signed in.
           if (window.location.pathname !== '/Profile.html') {
               window.location.href = '/Profile.html'
           } else {
               // your code here... (insert email into div...)
           }
       } else {
           // No user is signed in.
       }
   });


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
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           window.alert("Error: " + errorMessage);
           // ...

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


   //Star Rating
   (function () {
       'use strict';

       angular
           .module('app', [])
           .controller('RatingController', RatingController)
           .directive('starRating', starRating);

       function RatingController() {
           this.rating1 = 5;
           this.rating2 = 2;
           this.isReadonly = true;
           this.rateFunction = function (rating) {
               console.log('Rating selected: ' + rating);
           };
       }

       function starRating() {
           return {
               restrict: 'EA',
               template: '<ul class="star-rating" ng-class="{readonly: readonly}">' +
                   '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
                   '    <i class="fa fa-star"></i>' + // or &#9733
                   '  </li>' +
                   '</ul>',
               scope: {
                   ratingValue: '=ngModel',
                   max: '=?', // optional (default is 5)
                   onRatingSelect: '&?',
                   readonly: '=?'
               },
               link: function (scope, element, attributes) {
                   if (scope.max == undefined) {
                       scope.max = 5;
                   }

                   function updateStars() {
                       scope.stars = [];
                       for (var i = 0; i < scope.max; i++) {
                           scope.stars.push({
                               filled: i < scope.ratingValue
                           });
                       }
                   }
                   scope.toggle = function (index) {
                       if (scope.readonly == undefined || scope.readonly === false) {
                           scope.ratingValue = index + 1;
                           scope.onRatingSelect({
                               rating: index + 1
                           });
                       }
                   };
                   scope.$watch('ratingValue', function (oldValue, newValue) {
                       if (newValue || newValue === 0) {
                           updateStars();
                       }
                   });
               }
           };
       }
   });


   //  <!------------------------------------------------------------------------------>
   //   <!------------------------------Team Listing Population-------------------------->
   //   <!------------------------------------------------------------------------------>

   window.onload = function () {
       var dbdata = ["hi"];
       var userDataRef = firebase.database();
       userDataRef.once("value").then(function (snapshot) {
           snapshot.forEach(function (childSnapshot) {
               var key = childSnapshot.key;
               var childData = dbdata.push(childSnapshot.val());
               var teamNameVal = dbdata.push(childSnapshot.val().teamName);
               var member1Val = dbdata.push(childSnapshot.val().memberName1);
               var member2Val = dbdata.push(childSnapshot.val().memberName2);
               var member3Val = dbdata.push(childSnapshot.val().memberName3);
               var member4Val = dbdata.push(childSnapshot.val().memberName4);
               var projectSummaryVal = dbdata.push(childSnapshot.val().projectSummary);
               var emblemVal = dbdata.push(childSnapshot.val().emblem);


               //for(var i=0; i<dbData.length; i++){

               document.getElementById("teamListHead1").innerHTML = dbData[0];
               document.getElementById("").innerHTML = dbData[i];
               document.getElementById("").innerHTML = dbData[i];
               document.getElementById("").innerHTML = dbData[i];
               document.getElementById("").innerHTML = dbData[i];
               document.getElementById("").innerHTML = dbData[i];
               document.getElementById("").innerHTML = dbData[i];
               // }
               var teamData = [];
               document.getElementById("teamListHead1").innerHTML = teamNameVal.value; //(i + 1) + ": " + array[i];
               // $("#teamName").append(teamNameVal);
               // $("#member1").append(member1Val);



               // document.getElementById("teamListHead1").innerHTML += "Hi"; //(i + 1) + ": " + array[i];

               console.log(dbdata[0], dbdata[1], dbdata['cat'], dbdata['']);
           });
       });
   }
