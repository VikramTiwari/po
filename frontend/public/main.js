// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOYTrdUNYYeleINvZA3ychUJbDrGRY-hU",
  authDomain: "ivikramtiwari.firebaseapp.com",
  databaseURL: "https://ivikramtiwari.firebaseio.com",
  storageBucket: "ivikramtiwari.appspot.com",
  messagingSenderId: "931430756122"
};
firebase.initializeApp(config);

// use messaging feature
const messaging = firebase.messaging()
// requestPermission to send messages
messaging.requestPermission().then(function() {
  console.log("got permissions");
  // get token to be used for messaging
  return messaging.getToken();
})
.then(function (token) {
  // use this token to send message from Firebase Messaging Service
  console.log(token);
})
.catch(function(err) {
  // catch error
  console.log("error:", err);
})

//
messaging.onMessage(function (payload) {
  console.log('onMessage:', payload);
})
