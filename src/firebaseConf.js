import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import React from 'react';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3vjRtTWtckiV5I84rFUKwSqHqFWV4mz8",
    authDomain: "smash-nation.firebaseapp.com",
    databaseURL: "https://smash-nation.firebaseio.com",
    projectId: "smash-nation",
    storageBucket: "smash-nation.appspot.com",
    messagingSenderId: "954554070010",
};


class Firebase {
  auth;
  firestore;
  storage;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth;
    this.firestore = app.firestore;
    this.storage = app.storage;
  }
}

const FirebaseContext = React.createContext(null);
export default Firebase;
export {FirebaseContext};