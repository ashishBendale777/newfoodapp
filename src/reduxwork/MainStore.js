import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from './CartSlice'
import userReducer from "./UserSlice"

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'cart  ',
    version: 1,
    storage,
}


const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const MainStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})