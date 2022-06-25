import {AppText} from 'common';
import React from 'react';
import {Button, Switch, TouchableOpacity} from 'react-native';
import i18n from 'react-native-i18n';
import {useTheme} from 'slices';
import {setLang} from 'translation';
import style from './style';
export const LanguageRow = ({lang}) => {
  const onPress = () => setLang(lang);
  return <RenderContainer onPress={onPress} lang={lang} />;
};
const RenderContainer = ({lang, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.LanguageRowContainer,
        {
          borderColor: colors.reverseBackgroundColor,
          shadowColor: colors.reverseBackgroundColor,
          backgroundColor:
            i18n.locale == lang ? colors.greyish : colors.backgroundColor,
        },
      ]}>
        <AppText style={style.languageRowText}>{i18n.t(lang)}</AppText>
    </TouchableOpacity>
  );
}; 