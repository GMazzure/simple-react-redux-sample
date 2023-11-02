import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import contador from "./slices/counter"
import logger from './middlewares/logger'
import photos from "./slices/photos"

const middleware = [...getDefaultMiddleware(), logger]

const reducer = combineReducers({ contador, photos });
const store = configureStore({ reducer, middleware: middleware });

export default store