import { View} from 'react-native';
import React, { useRef, useState} from 'react';
 
import {AppInput,  IconType} from 'common';
 
const NewsHOCSearch = ({getInitData}) => {
  const [searchText, setSearchText] = useState('');
  const refTime = useRef<any>();
  const onSearchText = (text) => {
    setSearchText(text);
    refTime.current = setTimeout(() => {
      getInitData(text);
    }, 2000);
  };
  return (
    <View  style={{flex:1,alignSelf:'stretch',paddingEnd:10}}>
    <AppInput 
     icon_type={IconType.fontAwesome}
      icon_name={'search'}
      value={searchText}
      onChangeText={onSearchText}
    /></View>
  );
}; 

export default NewsHOCSearch;
