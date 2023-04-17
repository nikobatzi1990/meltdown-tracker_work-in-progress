const { initializeApp } = require("firebase/app") ;
const { getAuth } = require("firebase/auth");

// Path to process.env file
require("dotenv").config({
  path: "./.env",
});

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FB_API_KEY,
  // authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FB_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FB_APP_ID
  apiKey: "AIzaSyAW5IgBueoYDBcipAsGfJ9rbhOI9otJkN4",
  authDomain: "meltdown-tracker-d113a.firebaseapp.com",
  projectId: "meltdown-tracker-d113a",
  storageBucket: "meltdown-tracker-d113a.appspot.com",
  messagingSenderId: "798924452527",
  appId: "1:798924452527:web:0a90e842a2e94f68035a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = auth;