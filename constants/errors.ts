export const ERROR_CONFIG = {
  OAUTH: {},
  SIGNIN: {
    code: "SIGNIN_ERROR",
    message: "错误的邮箱或密码",
  },
  AUTH: {
    NEED_EMAIL: {
      code: "AUTH_NEED_EMAIL",
      message: "please enter email address.",
    },
    USER_EXIST: {
      code: "AUTH_USER_EXIST",
      message: "User already exist, please sign in.",
    },
    USER_NOT_EXIST: {
      code: "AUTH_USER_NOT_EXIST",
      message: "User does not exist, please sign up.",
    },
    SHOPLAZZA: {
      HMAC: {
        code: "SHOPLAZZA_HMAC",
        message: "HMAC validation failed",
      },
    },
  },
  PASSWORD: {
    ERROR: { code: "PASSWORD_ERROR", message: "Enter a valid password." },
    SAME_AS_OLD: {
      code: "PASSWORD_SAME_AS_OLD",
      message: "password cannot be the same as the old one.",
    },
  },
  DATABASE: {
    VERIFICATION_TOKEN: {
      GENERATE_FAIL: {
        code: "EMAIL_TOKEN_GENERATE_FAIL",
        message: "email send failed, please try again",
      },
      TOKEN_NOT_EXIST: {
        code: "TOKEN_NOT_EXIST",
        message: "wrong link, please try again",
      },
      TOKEN_HAS_EXPIRED: {
        code: "TOKEN_HAS_EXPIRED",
        message: "link expired, please try again",
      },
      TOKEN_HAS_USED: {
        code: "TOKEN_HAS_USED",
        message: "link was used, please try again",
      },
    },
  },
  SERVER: {
    ERROR_500: {
      code: "Internal Server Error",
      message: "Internal Server Error",
    },
  },
};