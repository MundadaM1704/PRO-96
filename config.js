import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAC902WiS6nJBnWcNZh85E2-1mASMYvGBM",
  authDomain: "diet-plans-6a106.firebaseapp.com",
  databaseURL: "https://diet-plans-6a106-default-rtdb.firebaseio.com",
  projectId: "diet-plans-6a106",
  storageBucket: "diet-plans-6a106.appspot.com",
  messagingSenderId: "224234723595",
  appId: "1:224234723595:web:927b730de724aa6950ea0e"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
