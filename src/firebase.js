import { initializeApp } from "firebase/app";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.REACT_APP_RECAPTCHA_SITE_KEY),
// });

const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
