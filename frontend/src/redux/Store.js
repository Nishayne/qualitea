import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { rootReducers } from "./reducers"
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}
const persistedReducer= persistReducer(persistConfig,rootReducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)