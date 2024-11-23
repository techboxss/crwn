import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcGPLrNWa5Xb-LQ0xzZd9Mfv6Ko93mUHc",
  authDomain: "crwn-clothing-db-9f51c.firebaseapp.com",
  projectId: "crwn-clothing-db-9f51c",
  storageBucket: "crwn-clothing-db-9f51c.firebasestorage.app",
  messagingSenderId: "490826618393",
  appId: "1:490826618393:web:a151942f41324da1893c88"
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account" 
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const createUserDocument = async (userAuth) => {
  if (!userAuth || !userAuth.uid) {
    console.error("Invalid userAuth object:", userAuth);
    return;
  }

  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName: userAuth.displayName || 'No Display Name',
        email: userAuth.email || 'No Email',
        createdAt: new Date(),
      });
      console.log("User document created successfully!");
    } catch (error) {
      console.error("Error creating user document:", error);
    }
  } else { 
    console.log("User document already exists.");
  }
};
