import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore, 
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOmRUo6J0ydwrEKMDuYm6kHY95VNGGacI",
    authDomain: "crown-clothing-db-6cf31.firebaseapp.com",
    projectId: "crown-clothing-db-6cf31",
    storageBucket: "crown-clothing-db-6cf31.appspot.com",
    messagingSenderId: "1036595476119",
    appId: "1:1036595476119:web:8abcee3b34d9c6cbf41bd2"
  };
  
 
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName, email} =userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}