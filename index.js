//Listen for form submit
   document.getElementById('registration-form').addEventListener('submit', submitForm);

   //submit registration form
   function submitForm(e) {


       e.preventDefault();

       //get values
       var teamName = getInputVal('team-name');
       var memberName1 = getInputVal('member-name-1');
       var memberName2 = getInputVal('member-name-2');
       var memberName3 = getInputVal('member-name-3');
       var memberName4 = getInputVal('member-name-4');
       var email = getInputVal('email');
       var password = getInputVal('psw');
       var projectSummary = getInputVal('description-input');
       var emblem = getInputVal('emblem-input');



       //save message
       saveMessage(teamName, memberName1, memberName2, memberName3, memberName4, email, password, projectSummary, emblem);
   }

   //get form values
   function getInputVal(id) {
       return document.getElementById(id).value;
   }

   //save message to firebase

   var newMessageRef = messagesRef.push();
   newMessageRef.set({
       teamName: teamName,
       memberName1: memberName1,
       memberName2: memberName2,
       memberName3: memberName3,
       memberName4: memberName4,
       email: email,
       password: password,
       projectSummary: projectSummary,
       emblem: emblem
   });
