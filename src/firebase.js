import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDZO6HtVl1JAnIGeaHAuVa8eTcYnReLcSo",
    authDomain: "react-chat-fffe9.firebaseapp.com",
    projectId: "react-chat-fffe9",
    storageBucket: "react-chat-fffe9.appspot.com",
    messagingSenderId: "972032519403",
    appId: "1:972032519403:web:afdec75c19712de48662ae"
  };

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();  

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();