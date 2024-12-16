import { initializeApp } from 'firebase/app' ; 
import {getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider} from 'firebase/auth' ; 
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHmjungxBz6bebJi7tjAIHDx3NkQACD44",
    authDomain: "crown-clothing-db-cd733.firebaseapp.com",
    projectId: "crown-clothing-db-cd733",
    storageBucket: "crown-clothing-db-cd733.firebasestorage.app",
    messagingSenderId: "850973645781",
    appId: "1:850973645781:web:a49aa77b934ee82d19fb5c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider() ; 
  provider.setCustomParameters({
     prompt: "select_account"
  });

  export const auth = getAuth() ; 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

  export const db = getFirestore() ;  