import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore ,  collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgDqUPmqi54mtRKRC9Rpskb_DrwpyNHWQ",
  authDomain: "story-app-61fa5.firebaseapp.com",
  projectId: "story-app-61fa5",
  storageBucket: "story-app-61fa5.appspot.com",
  messagingSenderId: "64972224858",
  appId: "1:64972224858:web:147b2ea34711009618db63"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storiesRef = collection(db, "stories");