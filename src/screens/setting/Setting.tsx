import React from 'react';
import {View, Button, Switch} from 'react-native';
import {useTheme} from 'slices';
import style from './style';
import {DarkSwitch, LanguageSection} from 'components';
import { AppScreenContainer } from 'common';
export const Setting = () => {
  const {colors} = useTheme();
  return ( 
    <AppScreenContainer>
        <LanguageSection />
    </AppScreenContainer>
  );
}; 
