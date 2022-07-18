// Firebase login error codes
export const AuthErrorCodes = [
  {
    error: 'Email address is already in use!',
    code: 'auth/email-already-in-use',
  },
  {
    error: 'Email address is invalid!',
    code: 'auth/invalid-email',
  },
  {
    error:
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    code: 'auth/user-not-found',
  },
  {
    error: 'The password is invalid or the user does not have a password.',
    code: 'auth/wrong-password',
  },
]
