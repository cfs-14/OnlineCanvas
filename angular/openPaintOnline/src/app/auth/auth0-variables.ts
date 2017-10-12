interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'VF03Snqryiyrpkue2rPOVyxRxdbVMhba',
  domain: 'onlinepaint.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
