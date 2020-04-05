import * as firebase from 'firebase/app';
import { injectable } from 'inversify';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '@/keys/firebase_config';

import { SignupRequest } from '@/type/adapter';

firebase.initializeApp(firebaseConfig);

export default interface IAuthService {
  registerUser(
    body: SignupRequest
  ): Promise<
    { success: boolean } | { success: boolean; errorCode: any }
  > | null;
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential>;
  sendEmailVerification(user: firebase.User): Promise<void>;
  logout(): Promise<void>;
}

@injectable()
export class AuthService implements IAuthService {
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
