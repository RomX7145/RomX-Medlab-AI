import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAAhgHn4abAIkh7Ycu9zmXQY51ixDkYfU",
  authDomain: "romx-medlab-ai.firebaseapp.com",
  projectId: "romx-medlab-ai",
  storageBucket: "romx-medlab-ai.firebasestorage.app",
  messagingSenderId: "41630613587",
  appId: "1:41630613587:web:4dcc44700bdcf6b521c6a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const setUpRecaptcha = (phoneNumber, onVerificationSuccess) => {
  const verifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  return auth.signInWithPhoneNumber(phoneNumber, verifier)
    .then(confirmationResult => onVerificationSuccess(confirmationResult))
    .catch(err => console.error(err));
};
