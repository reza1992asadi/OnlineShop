import { initializeApp } from 'firebase/app' ; 
import {getAuth, signInWithPopup , GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth' ; 
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

  const googleprovider = new GoogleAuthProvider() ; 
  googleprovider.setCustomParameters({
     prompt: "select_account"
  });
 
  export const auth = getAuth() ; 
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider); 
  export const db = getFirestore() ;  //this is going to directly point to our database. 

  // this method aims to get the data that user uses while authenticating and store it in firestore. 
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
      const userDocRef = doc(db, 'users', userAuth.uid)
      console.log(userDocRef) ; 
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot); 

      if(!userSnapshot.exists()) {
         const {displayName, email} = userAuth; 
         const createdAt = new Date () ; 

         try {
            await setDoc(userDocRef, {
               displayName, 
               email, 
               createdAt,
               ...additionalInformation,
            });
         } catch(error) {
            console.log('error creating the user', error.message);
         }
      }
      return userDocRef; 
  }

  export const createAuthUserWithEmailAndPassword =async (email, password) => {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
  };