import { initializeApp } from "firebase/app";
import {
        createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";

import {
        addDoc, 
        collection, 
        getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdhnIAGSOMY79YAgHRhaFB2fnKmy8Jr7Q",
  authDomain: "netflix-clone-63dc0.firebaseapp.com",
  projectId: "netflix-clone-63dc0",
  storageBucket: "netflix-clone-63dc0.firebasestorage.app",
  messagingSenderId: "49701633207",
  appId: "1:49701633207:web:85c20c6c9375016e9ca132"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async( name, email, password) => {

    try{
        const res = await createUserWithEmailAndPassword( auth, email, password );
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(e);
        alert(error);
    }
}

const login = async (email, password) => {

    try {
        signInWithEmailAndPassword(auth, email, password );
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logout};