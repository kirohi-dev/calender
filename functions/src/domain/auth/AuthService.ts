import * as firebase from 'firebase/app';
import { injectable } from 'inversify';
import 'firebase/auth';
import 'firebase/firestore';

import { AppError, ErrorCode } from '@/domain/Error.service';

import firebaseConfig from '@/keys/firebase_config';

import { SignupRequest, VerifyRequest } from '@/type/adapter';

firebase.initializeApp(firebaseConfig);

export default interface IAuthService {
  registerUser(body: SignupRequest): Promise<void>;
  loginUser(body: SignupRequest): Promise<void>;
  sendEmailVerification(body: VerifyRequest): Promise<void>;
  logout(): Promise<void>;
}

@injectable()
export class AuthService implements IAuthService {
  public async registerUser(body: SignupRequest) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(body.value!.email, body.value!.password)
      .catch((error) => {
        console.error(error);
        throw new AppError(ErrorCode.ERR_UNKNOWN);
      });
  }

  public async loginUser(body: SignupRequest): Promise<void> {
    await firebase
      .auth()
      .signInWithEmailAndPassword(body.value!.email, body.value!.password)
      .catch((error) => {
        console.error(error);
        throw new AppError(ErrorCode.ERR_UNKNOWN);
      });
  }

  public async sendEmailVerification(body: VerifyRequest) {
    await body.value!.user.sendEmailVerification();
  }

  public logout() {
    return firebase.auth().signOut();
  }
}
