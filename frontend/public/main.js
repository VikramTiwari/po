// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOYTrdUNYYeleINvZA3ychUJbDrGRY-hU",
  authDomain: "ivikramtiwari.firebaseapp.com",
  databaseURL: "https://ivikramtiwari.firebaseio.com",
  storageBucket: "ivikramtiwari.appspot.com",
  messagingSenderId: "931430756122"
};
firebase.initializeApp(config);

// ======== Authentication ========= //
document.getElementById("authenticate").addEventListener('click', authenticate);
document.getElementById("logout").addEventListener('click', signOut)

function authenticate() {
  firebase.auth().signInWithRedirect(getAuthProvider());
}

function signOut() {
  firebase.auth().signOut().then(function() {
    console.log('signed out');
    // Sign-out successful.
  }, function(error) {
    console.error(error);
    // An error happened.
  });
}

function getAuthProvider() {
  var authProvider = new firebase.auth.GithubAuthProvider();
  authProvider.addScope('user');
  authProvider.setCustomParameters({
    'allow_signup': 'false'
  });
  return authProvider
}

function getRedirectResult() {
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      console.log(token);
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    console.error(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

getRedirectResult()

function notifications() {
  // ======= Messaging ========== //
  // use messaging feature
  const messaging = firebase.messaging()
    // requestPermission to send messages
  messaging.requestPermission().then(function() {
      console.log("got permissions");
      // get token to be used for messaging
      return messaging.getToken();
    })
    .then(function(token) {
      // use this token to send message from Firebase Messaging Service
      console.log(token);
    })
    .catch(function(err) {
      // catch error
      console.log("error:", err);
    })

  // show messaging payload
  messaging.onMessage(function(payload) {
    console.log('onMessage:', payload);
  })

}

// notifications();
