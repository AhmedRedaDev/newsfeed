import React from 'react';
import {View,Switch} from 'react-native';
import i18n from 'react-native-i18n'; 
import {onModeChange, useTheme} from 'slices';
import {useDispatch} from 'react-redux';
import style from './style'; 
export const DarkSwitch = () => {
  const {isDarkMode, colors} = useTheme();
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(onModeChange(!isDarkMode));
  };
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isDarkMode}
    />
  );
};  
