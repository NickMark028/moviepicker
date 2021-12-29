// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_AB9VS7v5NOEZDulnv9H2QbQMHP9SLAU",
    authDomain: "moviepicker-96f33.firebaseapp.com",
    projectId: "moviepicker-96f33",
    storageBucket: "moviepicker-96f33.appspot.com",
    messagingSenderId: "497183014274",
    appId: "1:497183014274:web:21bc0f1ff47671db3d239b",
    measurementId: "G-SCC71CB7H9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();
export { app, auth, firestore };
