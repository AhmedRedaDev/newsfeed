import i18n from 'react-native-i18n'; 
import en from './en';
import ar from './ar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

export enum Lang {
  en = 'en',
  ar = 'ar',
}

export const available_languages = {
  en,
  ar
};

export const setLang =async (lang: Lang) => {
  const forceRestart:boolean= i18n.locale !=lang 
  I18nManager.allowRTL(lang == Lang.ar)
  await I18nManager.forceRTL(lang == Lang.ar);
  i18n.locale = lang;
  i18n.defaultLocale = lang;
  AsyncStorage.setItem('lang', lang);
 if(forceRestart){
    RNRestart.Restart();
    }
};

export const langConfig = async (lang?: Lang) => {
  const defaultLang = await AsyncStorage.getItem('lang');
  i18n.translations = available_languages;
  let currentLang = i18n.currentLocale().split('-')[0];
  
  i18n.locale = defaultLang || lang || Lang.en;
  i18n.defaultLocale = i18n.locale;
  I18nManager.allowRTL(i18n.locale == Lang.ar);
  await I18nManager.forceRTL(i18n.locale == Lang.ar);

  return i18n.locale;
};
