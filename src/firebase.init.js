import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0HwchpNa9gUoLSHBA52r7HXTBKItBvMQ",
  authDomain: "rosetheme-project.firebaseapp.com",
  projectId: "rosetheme-project",
  storageBucket: "rosetheme-project.appspot.com",
  messagingSenderId: "756894907894",
  appId: "1:756894907894:web:fc9d7c6096c282e72bdbd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
