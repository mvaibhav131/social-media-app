import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAbaD4UnhaOVjzIgFBmPXWFj_twBq6pMTQ",
    authDomain: "social-media-app-d0286.firebaseapp.com",
    projectId: "social-media-app-d0286",
    storageBucket: "social-media-app-d0286.appspot.com",
    messagingSenderId: "249993608460",
    appId: "1:249993608460:web:9af660ac77b4b444d71d29",
    measurementId: "G-CZ67BVMCKQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);