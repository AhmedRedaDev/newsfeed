import {createSlice, PayloadAction} from '@reduxjs/toolkit';
 
import {useSelector} from 'react-redux';
import {RootStore} from '../store';


const initialState = {};

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    refreshList: (state, action) => {
      console.log('🚀 ~ file: list.ts ~ line 14 ~ action', action);
      action.payload.forEach((element) => {
        state[element] = !state[element];
      });
    },
  },
});

export const {refreshList} = listSlice.actions;

export const listReducer = listSlice.reducer;

export const useList = () => {
  const lists = useSelector((state: RootStore) => state.lists);
  return lists;
};
