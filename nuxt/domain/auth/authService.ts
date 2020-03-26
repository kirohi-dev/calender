import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '@/assets/keys/firebase_config';

firebase.initializeApp(firebaseConfig);

export default interface IAuthService {
  registerUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential>;
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential>;
}

export class AuthService implements IAuthService {
  public registerUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}
