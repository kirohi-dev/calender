export interface SignupRequest {
  collect: boolean;
  value?: {
    email: string;
    password: string;
  };
}

export interface VerifyRequest {
  collect: boolean;
  value?: {
    user: firebase.User;
  };
}
