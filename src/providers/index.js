import axios from "axios"
import jwtDecode from "jwt-decode"

import buildCharacterProvider from "./character"
import buildAuthenticationProvider from "./authentication"
import buildStorageProvider from "./storage"
import buildJwtProvider from "./jwt"

const baseURL = "http://localhost:3050" // TODO: FIX TO USE ENV process.env.REACT_APP_MAHABHARATH_API

const http = axios.create({})
const httpAuthenticated = axios.create({})

const storageProvider = buildStorageProvider()
const authenticationProvider = buildAuthenticationProvider({ http, baseURL, storageProvider })
const jwtProvider = buildJwtProvider({ jwtDecode })

httpAuthenticated.interceptors.request.use(
  async config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [baseURL];

    let token = storageProvider.getToken();
    if (!token) {
      // TODO: add error validation
      alert("Not signed in")
      return config
    }
    if (jwtProvider.isExpired(token)) {
      await authenticationProvider.refreshToken()
      token = storageProvider.getToken();
    }

    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const characterProvider = buildCharacterProvider({ http, baseURL })

export {
  characterProvider,
  authenticationProvider,
  storageProvider,
  jwtProvider
}
