// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const environment = {
  production: false,
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: "AIzaSyAJWGJUTmK9ipqdNtZfK1aZnroC_2xe0OE",
    authDomain: "bahdelny-leaderboard-a2d93.firebaseapp.com",
    projectId: "bahdelny-leaderboard-a2d93",
    storageBucket: "bahdelny-leaderboard-a2d93.appspot.com",
    messagingSenderId: "762049815474",
    appId: "1:762049815474:web:d0fb8fd1c474c29945faab",
    measurementId: "G-Y97NLNH06W"
  }
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJWGJUTmK9ipqdNtZfK1aZnroC_2xe0OE",
  authDomain: "bahdelny-leaderboard-a2d93.firebaseapp.com",
  projectId: "bahdelny-leaderboard-a2d93",
  storageBucket: "bahdelny-leaderboard-a2d93.appspot.com",
  messagingSenderId: "762049815474",
  appId: "1:762049815474:web:d0fb8fd1c474c29945faab",
  measurementId: "G-Y97NLNH06W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: "AIzaSyBfVpnAJ5ysGsltY_k9Lfd4RCtCuOhwCuQ",
// authDomain: "bahdelny-leaderboard.firebaseapp.com",
// projectId: "bahdelny-leaderboard",
// storageBucket: "bahdelny-leaderboard.appspot.com",
// messagingSenderId: "939455324798",
// appId: "1:939455324798:web:6541208b8bcb38a1beae2f",
// measurementId: "G-7RR6Q0NY69"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);