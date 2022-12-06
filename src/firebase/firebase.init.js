import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
export { auth, db, storage, analytics, provider };
