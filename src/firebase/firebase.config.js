// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0qcbMahxiO54QniTN4F2kfa7S2y1sVpg",
  authDomain: "the-news-dragon-b21e2.firebaseapp.com",
  projectId: "the-news-dragon-b21e2",
  storageBucket: "the-news-dragon-b21e2.appspot.com",
  messagingSenderId: "1088138813902",
  appId: "1:1088138813902:web:93e90097f5bac1c4a9cb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;