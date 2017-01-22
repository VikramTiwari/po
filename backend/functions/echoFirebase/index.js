'use strict'

// include firebase and service account key
const firebase = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

// for debugging
require('@google/cloud-debug').start()

// initialize firebase app
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://chat-1a56f.firebaseio.com'
})

/**
 * init firebase and reply last message
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.echoFirebase = function echoFirebase (req, res) {
  // take last one value only
  firebase.database().ref('/messages').limitToLast(1).on('child_added', function (messageSnapshot) {
    res.send(messageSnapshot.val())
  })
}
