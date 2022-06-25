import axios from 'axios';
// import {showError} from 'common/utils/localNotifications';
import I18n from 'react-native-i18n';
// import {logout} from 'slices';
import {rootStore} from '../store';
import {REST_ENDPOINT} from 'utils/urls.json';
let cancelSource = axios.CancelToken.source();

export const requestConfig = (localToken = '') => {
  axios.defaults.baseURL = REST_ENDPOINT;
  // axios.interceptors.request.use(
  //   (config) => {
  //     const data = rootStore.getState().auth;

  //     const {token} = data;

  //     const {Authorization} = config.headers;
  //     const authorization = token
  //       ? {
  //           Authorization: `Bearer ${token}`,
  //         }
  //       : Authorization
  //       ? {Authorization}
  //       : Authorization;
  //     return {
  //       ...config,
  //       cancelToken: cancelSource.token,
  //       headers: {
  //         'Accept-Language': I18n.locale,
  //         Authorization: `Bearer ${localToken}`,
  //         ...config.headers,
  //         ...authorization,
  //         lang: I18n.locale,
  //       },
  //     };
  //   },
  //   (error) => {
  //     Promise.reject(error);
  //   },
  // );
  // axios.interceptors.response.use(
  //   (res) => {
  //     if (res.config.url != 'https://www.google.com') {
  //       console.log(
  //         '🚀 ~ file: config.ts ~ line 47 ~ requestConfig ~ res',
  //         res,
  //       );
  //     }
  //     return res;
  //   },
  //   (error) => {
  //     console.log(
  //       '🚀 ~ file: config.ts ~ line 50 ~ requestConfig ~ error',
  //       error.response,
  //     );
  //     if (error.response && error.response.status === 401) {
  //       setTimeout(() => {
  //         cancelAPI();
  //         showError(I18n.t('Login_expires'));
  //       }, 2000);
  //       rootStore.dispatch(logout());
  //     }
  //     return Promise.reject(error);
  //   },
  // );
};

export const cancelAPI = () => cancelSource.cancel('Your cancellation message');
export const getError = (message: string | {data?:any}) => {
  let newMessage = message;
  if (typeof message != 'string' && message.data && message.data.errors) {
    newMessage = collectErrors(message.data.errors);
  }
  return newMessage == 'Network Error' ? I18n.t('networkError') : newMessage;
};
const collectErrors = (errorList: any) => {
  let errors = '';
  for (const element of errorList) {
    if (typeof element == 'string') {
      errors = `${errors} ${element}\n`;
    } else {
      errors = `${errors} ${element[0]}\n`;
    }
  }

  return errors;
};
