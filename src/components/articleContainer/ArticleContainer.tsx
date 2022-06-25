 
import {AppImage, AppScreenContainer, AppText} from 'common';
 
import React  from 'react';
import {View, Text} from 'react-native';
import { RenderArticleDetailsContainer } from './RenderArticleDetailsContainer';
  
export const ArticleContainer = ({article}) => article&&(
  <AppScreenContainer>
    <AppImage
      style={{flex: 1}}
      resizeMode="contain"
      source={{uri: `${article.urlToImage}`}}
    />
    <RenderArticleDetailsContainer article={article} />
  </AppScreenContainer>
);
 