// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgDqUPmqi54mtRKRC9Rpskb_DrwpyNHWQ",
  authDomain: "story-app-61fa5.firebaseapp.com",
  projectId: "story-app-61fa5",
  storageBucket: "story-app-61fa5.appspot.com",
  messagingSenderId: "64972224858",
  appId: "1:64972224858:web:147b2ea34711009618db63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);