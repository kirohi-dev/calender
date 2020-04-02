export interface SignupRequest {
  collect: boolean;
  value?: {
    email: string;
    password: string;
  };
}
