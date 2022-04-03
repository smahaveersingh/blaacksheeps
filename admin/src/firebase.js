import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavBOO7JsO4d_RlJBQcC722fbNk1NqkpM",
  authDomain: "blaacksheeps.firebaseapp.com",
  projectId: "blaacksheeps",
  storageBucket: "blaacksheeps.appspot.com",
  messagingSenderId: "534289931157",
  appId: "1:534289931157:web:2051c5c2e6fa808f4a349c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;