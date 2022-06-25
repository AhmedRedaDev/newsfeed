import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  persistStore,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {rootReducer, RootStore} from './rootReducer';

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // }
  }),
});

export const persistor = persistStore(rootStore);

export const storeConfig = () => {
  if (persistor.getState().bootstrapped) return;
  return new Promise((res, rej) => {
    persistor.subscribe(() => {
      res(false);
    });
  });
}; 
export type AppDispatch = typeof rootStore.dispatch;
export type AppThunk = ThunkAction<void, RootStore, unknown, Action<string>>;
