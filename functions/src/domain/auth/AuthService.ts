import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '@/keys/firebase_config';

import { SignupRequest } from '@/type/adapter';

firebase.initializeApp(firebaseConfig);

export class AuthService {
  public registerUser(body: SignupRequest) {
    if (!body.collect) {
      return null;
    }
    const result = firebase
      .auth()
      .createUserWithEmailAndPassword(body.value!.email, body.value!.password)
      .then(() => {
        return { success: true };
      })
      .catch((error) => {
        return {
          success: false,
          errorCode: error.code,
        };
      });
    return result;
  }

  public loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public sendEmailVerification(user: firebase.User) {
    return user.sendEmailVerification();
  }

  public logout() {
    return firebase.auth().signOut();
  }
}
