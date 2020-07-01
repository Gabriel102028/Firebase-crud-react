 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC9tdENEvCFKVkz8ZYjBTlYcj8gYtATSvM",
    authDomain: "fb-crud-react-3745e.firebaseapp.com",
    databaseURL: "https://fb-crud-react-3745e.firebaseio.com",
    projectId: "fb-crud-react-3745e",
    storageBucket: "fb-crud-react-3745e.appspot.com",
    messagingSenderId: "385355253942",
    appId: "1:385355253942:web:c707bb6e31335d8dba7e17"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();