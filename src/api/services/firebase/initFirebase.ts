import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SEND,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_IP,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

function initFirebase(): firebase.app.App {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
    console.log('app')
  }

  return firebase.app()
}

const firebaseApp = initFirebase()

export const firestore = firebaseApp.firestore()
