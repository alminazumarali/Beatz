import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCgK3XEJbubK805kAB29mzboBpEgp0-F2s",
  authDomain: "beatz-82dfe.firebaseapp.com",
  projectId: "beatz-82dfe",
  storageBucket: "beatz-82dfe.appspot.com",
  messagingSenderId: "728865692944",
  appId: "1:728865692944:web:e48969d51dfd599c2d1995"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
