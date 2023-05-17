import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBA-mz2T0VWsagF_hNJIeCElCOXYlOIeXQ",
    authDomain: "social-media-app-3d8c1.firebaseapp.com",
    projectId: "social-media-app-3d8c1",
    storageBucket: "social-media-app-3d8c1.appspot.com",
    messagingSenderId: "967689570088",
    appId: "1:967689570088:web:dd94513543a8c7f898321d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);