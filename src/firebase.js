import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA9L3WPZVwTHuDjm2iMpJq1oxdfvgK9xQ0",
  authDomain: "realinstagram-e238a.firebaseapp.com",
  projectId: "realinstagram-e238a",
  storageBucket: "realinstagram-e238a.appspot.com",
  messagingSenderId: "659002157219",
  appId: "1:659002157219:web:1cd2f5868a490446643716",
  measurementId: "G-SLCK0DFN8D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();