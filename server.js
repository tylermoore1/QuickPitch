// var http = require('http'),
//     fs = require('fs');
//
//
// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(8000);
// });

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDeK5V3wEEep63xT9Oswq_WvcwVgYt15To",
  authDomain: "quickpitch-5a93f.firebaseapp.com",
  databaseURL: "https://quickpitch-5a93f.firebaseio.com",
  projectId: "quickpitch-5a93f",
  storageBucket: "quickpitch-5a93f.appspot.com",
  messagingSenderId: "8766578793"
};
firebase.initializeApp(config);

var database = firebase.database();

//create new users and add them to the database
$('#idSignUpButton').click(function() {
  if ($('#idCreateNewPassword').val() == $('#idConfirmNewPassword').val()) {
    var email = $('#idCreateNewEmail').val();
    var password = $('#idCreateNewPassword').val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(data) {
      firebase.database().ref('users/' + data.user.uid).set({
        firstName: $('#idCreateNewFirstName').val(),
        lastName: $('#idCreateNewLastName').val(),
        emailAddress: email
      });

      //tell user you have been successfully signed up
      alert('You have been successfully signed up');

      //update their profile page so that their display name will be saved under their account
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var first = $('#idCreateNewFirstName').val();
          var last = $('#idCreateNewLastName').val()
          user.updateProfile({displayName: first + " " + last})
          .then(function() {
            //display name has been updated properly
            //alert (user.displayName);
          });
        }
      });

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });

  }

});

//sign in a specific user
$('#idLogInButton').click(function() {

  firebase.auth().signInWithEmailAndPassword($('#idEmailAddressInput').val(), $('#idPasswordInput').val())
  .then(function(data) {
    //set display name for user
    //data.user.updateProfile({'displayName': $('#idCreateNewFirstName').val()});

    alert('successfully signed in ' + data.user.displayName);
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  alert (errorMessage);
});
});
