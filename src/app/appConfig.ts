import {Lang, langConfig} from 'translation';
import {listenToInternetStatus} from 'slices';
import {rootStore, storeConfig} from 'store';
import {registerCustomIconType} from 'common';
import customIcon from 'assets/icons/selection.json';
import {requestConfig} from 'api';
import {
  LinkingOptions,
} from '@react-navigation/native';
import * as Linking from 'expo-linking';
 
//general app configeration
export const appConfig = async () => {
  //langauges and local config
  await langConfig(Lang.ar);
  //api requestConfig
  requestConfig(); 
  // store config
  await storeConfig();
  //icons
  registerCustomIconType(customIcon);
  //listen to network
  rootStore.dispatch(listenToInternetStatus());
 
  return true;
};
// deep link config
const prefix = Linking.createURL('/');
export const linkingConfig: LinkingOptions<any> = {
  prefixes: [prefix],
  config: {
    screens: {
      HomeStack: {
        path: 'stack',
        initialRouteName: 'news',
        screens: {
          news: 'news',
          articleDetails: {
            path: 'articleDetails/:q',
            // parse: {
            //   id: (q: string) => `there, ${q}`,
              
            // },
            // stringify: {
            //   q: (q: string) => q.replace('there, ', ''),
            // },
          },
        },
      },
      settings: 'settings',
    },
  },
};