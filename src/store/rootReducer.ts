import {combineReducers} from '@reduxjs/toolkit';
import {
  internetReducer, 
  themeReducer,
  listReducer, 
} from '../slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, persistReducer} from 'redux-persist';

export const reducers = combineReducers({
  internet: internetReducer,
  theme: themeReducer, 
  lists: listReducer
});

const persistConfig: PersistConfig<RootStore> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['theme'],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
