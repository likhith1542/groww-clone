import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNU61qCTxz6iqJRHaKtlFLk0_YhvBQS-8",
  authDomain: "growwclone.firebaseapp.com",
  projectId: "growwclone",
  storageBucket: "growwclone.appspot.com",
  messagingSenderId: "177064479336",
  appId: "1:177064479336:web:506b78795fbf28fd2ac9dd",
});

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth}