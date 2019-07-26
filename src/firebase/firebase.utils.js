import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFGBE3FcsY54L74M9U3z5dwYw1ZWFG_B0",
    authDomain: "clothing-store-db.firebaseapp.com",
    databaseURL: "https://clothing-store-db.firebaseio.com",
    projectId: "clothing-store-db",
    storageBucket: "",
    messagingSenderId: "1092476078797",
    appId: "1:1092476078797:web:d5af6a8e11f52734"
  };


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth)return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;