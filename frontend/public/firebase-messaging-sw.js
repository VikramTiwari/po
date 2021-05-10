importScripts('https://www.gstatic.com/firebasejs/3.6.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.6.4/firebase-messaging.js')

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOYTrdUNYYeleINvZA3ychUJbDrGRY-hU",
  authDomain: "ivikramtiwari.firebaseapp.com",
  databaseURL: "https://ivikramtiwari.firebaseio.com",
  storageBucket: "ivikramtiwari.appspot.com",
  messagingSenderId: "931430756122"
};
firebase.initializeApp(config);

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  const title = payload.data.title
  const options = {
    body: payload.data.message
  }
  return self.registration.showNotification(title, options)
})
