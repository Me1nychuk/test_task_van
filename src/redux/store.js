import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./car/slice";
import { favoriteReducer } from "./favorite/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    cars: carReducer,
    favorite: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
