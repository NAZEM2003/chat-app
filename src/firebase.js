import firebase from "firebase/app";
import "firebase/auth"

export const  auth = firebase.initializeApp({
  apiKey: "AIzaSyAEtUoSD8E-gR1Cuh4Sk4iI1TlRYWvA4D0",
  authDomain: "chatino-95ba6.firebaseapp.com",
  projectId: "chatino-95ba6",
  storageBucket: "chatino-95ba6.appspot.com",
  messagingSenderId: "894453224711",
  appId: "1:894453224711:web:b96ff85fe6614d53ac21a2"
  }).auth();