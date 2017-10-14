const config = {
    apiKey: "AIzaSyC2ojLgQ1CNwgJ-KBTx-Fo4x-pGCnWdgz4",
    authDomain: "chat-hecho-en-casa.firebaseapp.com",
    databaseURL: "https://chat-hecho-en-casa.firebaseio.com",
    projectId: "chat-hecho-en-casa",
    storageBucket: "chat-hecho-en-casa.appspot.com",
    messagingSenderId: "297111358085"
  };
  firebase.initializeApp(config);

  const db = database.firebase();
  const messagesRef = db.ref('messages/');

const provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  let token = result.credential.accessToken;
  let user = result.user;
}).catch(function(error) {
  let errorCode = error.code;
  let errorMessage = error.message;
  let email = error.email;
  let credential = error.credential;
});
