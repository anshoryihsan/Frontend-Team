import User from './user'
import Auth from './auth'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authConfig = {
  key: "auth",
  storage,
  blacklist: ["error"]
}

export default combineReducers({ User, Auth: persistReducer(authConfig, Auth) })