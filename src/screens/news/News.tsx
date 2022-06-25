import React from 'react'
import {View, Button } from 'react-native'
import { 
  useLinkTo, 
} from '@react-navigation/native';
import style from './style'
import { AppScreenContainer } from 'common';
import NewsHOC from 'controllers/NewsHOC';
export const News = (props) => { 
  const linkTo = useLinkTo();
  return (
    <AppScreenContainer>
      <NewsHOC /> 
      {/* <Button
        title="Go to Wojciech's profile"
        // npx uri-scheme open "newsfeed://stack/user/Wojciech/22" --android
        onPress={() => linkTo('/stack/articleDetails/Wojciech/22')} 
      />
      <Button
        title="Go to unknown profile"
        onPress={() => props.navigation.navigate('ArticleDetails')} 
      /> */}
    </AppScreenContainer>
  );
} 

 