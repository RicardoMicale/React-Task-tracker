import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  signInWithPopup,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDIlypD4P0Hl04WQfzu9lnL0OZPUZ7n8C0",
  authDomain: "react-e-tracker.firebaseapp.com",
  projectId: "react-e-tracker",
  storageBucket: "react-e-tracker.appspot.com",
  messagingSenderId: "999239252368",
  appId: "1:999239252368:web:660601cfc126efe34e9b15"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const signInGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider)
  const userId = res.user.uid
  //TODO: query mongodb collection for user uuid => get user else create user

}
const logInEmailPass = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    //TODO: return user from mongodb collection using res.user.uid
  } catch (err) {
    console.log(err)
  }
}

const signUpEmailPass = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user

    const newUser = {
      username: username,
      userId: user.uid,
      email: user.email
    }
    //TODO: create document in mongodb collection

  } catch (err) {
    console.log(err)
  }
}

const logOut = () => {
  signOut(auth)
}