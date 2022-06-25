 
import { AppText} from 'common';
 
import React  from 'react';
import {View } from 'react-native';
  
export const RenderArticleDetailsContainer = ({article}) => (
  <View style={{flex: 1}}>
    <AppText>
      {article.source.name}/{article.author}
    </AppText>
    <AppText>{article.description}</AppText>
    <AppText>{article.content}</AppText>
  </View>
);

 