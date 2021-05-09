import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCh6wp0IGkdUgXw83Mw5WEDb8SKLIHUO9s",
    authDomain: "signal-d61be.firebaseapp.com",
    projectId: "signal-d61be",
    storageBucket: "signal-d61be.appspot.com",
    messagingSenderId: "309350951867",
    appId: "1:309350951867:web:0b69adb9c60f666e77329e"
  };

let app;

  console.log(app)
  app = firebase.initializeApp(firebaseConfig)


  // app = firebase.app()



export const db = app.firestore();
export const auth = firebase.auth();


