import NetInfo from '@react-native-community/netinfo';
import {createSlice} from '@reduxjs/toolkit';
import axios, {Canceler} from 'axios';
import {useSelector} from 'react-redux';
import {AppThunk, AppDispatch, RootStore} from '../store';

interface InternetState {
  isInternetAvailable: boolean;
}

const initialState: InternetState = {
  isInternetAvailable: true,
};

const internetSlice = createSlice({
  name: 'internet',
  initialState,
  reducers: {
    internetAvailable(state) {
      state.isInternetAvailable = true;
    },
    internetNotAvailable(state) {
      state.isInternetAvailable = false;
    },
  },
});

export const {internetAvailable, internetNotAvailable} = internetSlice.actions;

export const internetReducer = internetSlice.reducer;

export const listenToInternetStatus = (): AppThunk => async (
  dispatch: AppDispatch,
) => {
  const CancelToken = axios.CancelToken;
  let timeOut = 20000;
  let timePingOut = 15000;
  let timePingErrorOut = 16000;
  let cancel: Canceler;
  let timeOutListener: NodeJS.Timeout;
  let timeOutPingListener: NodeJS.Timeout;
  // poll check internet
  const _checkInternet = async () => {
    try {
      if (timeOutPingListener) clearTimeout(timeOutPingListener);
      timeOutPingListener = setTimeout(() => {
        timeOut = 1000;
        dispatch(internetNotAvailable());
      }, timePingErrorOut);
      await axios.get('https://www.google.com', {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
        timeout: timePingOut,
      });
      timeOut = 20000;
      if (timeOutPingListener) clearTimeout(timeOutPingListener);
      dispatch(internetAvailable());
    } catch (err) {
      if (!axios.isCancel(err)) {
        timeOut = 1000;
        dispatch(internetNotAvailable());
      }
    }
  };
  const _poll = async () => {
    if (cancel) cancel();
    if (timeOut) clearTimeout(timeOutListener);
    await _checkInternet();
    timeOutListener = setTimeout(_poll, timeOut);
  };
  // once
  const netInfostate = await NetInfo.fetch();
  if (netInfostate.isConnected) {
    await _poll();
  } else {
    dispatch(internetNotAvailable());
  }
  //listener
  NetInfo.addEventListener((netInfostate) => {
    if (netInfostate.isConnected) {
      timeOut = 20000;
      _poll();
    } else {
      dispatch(internetNotAvailable());
    }
  });
};

export const useInternet = () =>
  useSelector((state: RootStore) => state.internet);
