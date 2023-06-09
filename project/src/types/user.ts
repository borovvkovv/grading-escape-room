export type AuthorizationInfo = {
  email: string;
  token: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type LocationState = {
  prevPath: string;
}

export type UserCredentialInputs = {
  login: string;
  password: string;
  agreement: boolean;
};
