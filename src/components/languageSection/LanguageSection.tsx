import React from 'react';
import {View} from 'react-native';
import I18n from 'react-native-i18n';
import {Lang} from 'translation';
import style from './style';
import {LanguageRow} from 'components/languageRow/LanguageRow';
import {AppText} from 'common';
export const LanguageSection = () => {
  return (
    <View>
      <AppText>{I18n.t('selectLanguage')}</AppText>
      <RenderListLang />
    </View>
  );
};

const RenderListLang = () => (
  <>
    <LanguageRow lang={Lang.ar} />
    <LanguageRow lang={Lang.en} />
  </>
);
