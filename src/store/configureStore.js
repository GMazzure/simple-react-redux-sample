import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import counter from "./slices/counter"
import logger from './middlewares/logger'
import users from "./slices/users"

const middleware = [...getDefaultMiddleware(), logger]

const reducer = combineReducers({ counter, users });
const store = configureStore({ reducer, middleware: middleware });

export default store