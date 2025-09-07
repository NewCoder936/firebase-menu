import {initializeApp} from "firebase/app";

const config = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  appId: import.meta.env.VITE_APP_APP_ID,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
};


export const app = initializeApp(config)
