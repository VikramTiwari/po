// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOYTrdUNYYeleINvZA3ychUJbDrGRY-hU",
  authDomain: "ivikramtiwari.firebaseapp.com",
  databaseURL: "https://ivikramtiwari.firebaseio.com",
  storageBucket: "ivikramtiwari.appspot.com",
  messagingSenderId: "931430756122"
};
firebase.initializeApp(config);

// ======= Storage ======== //
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
var spaceRef = storageRef.child('images/space.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"
// Reference's path is: 'images/space.jpg'
// This is analogous to a file path on disk
console.log(spaceRef.fullPath);

// Reference's name is the last segment of the full path: 'space.jpg'
// This is analogous to the file name
console.log(spaceRef.name);

// Reference's bucket is the name of the storage bucket where files are stored
console.log(spaceRef.bucket);

// ========== Database ============= //
var database = firebase.database();
document.getElementById("writeUserData").addEventListener('click', writeUserData);

function writeUserData() {
  var userId = name = email = imageUrl = 1;
  firebase.database().ref('test/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}


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

// ======= Messaging ========== //
function notifications() {
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
notifications();
