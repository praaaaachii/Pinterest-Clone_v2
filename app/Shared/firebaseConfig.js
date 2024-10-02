// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpu9KDNSaNNyrza03t_KgslwC4NEWqIJU",
  authDomain: "pinterest-clone-9b54a.firebaseapp.com",
  projectId: "pinterest-clone-9b54a",
  storageBucket: "pinterest-clone-9b54a.appspot.com",
  messagingSenderId: "813279690853",
  appId: "1:813279690853:web:364c214ca4adde219d068c",
  measurementId: "G-JGMHQHRX5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;