import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppImage, AppText} from 'common';
import style from './style';
import {useTheme} from 'slices';
import {ArticleModel} from 'models'; 
import FastImage from 'react-native-fast-image';
interface Props {
  article: ArticleModel;
}
 
export const RenderArticleDetailsContainer = ({article, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.mainContainer,
        {backgroundColor: colors.purple},
      ]}>
      <RenderArticleDetails article={article} />
    </TouchableOpacity>
  );
};

const RenderArticleDetails = ({article}: Props) => {
  return (
    <>
      <RenderArticleDetailsTitle article={article} />
      <AppImage
        style={{flex: 1}}
        resizeMode='cover'
        source={{uri: `${article.urlToImage}`}}
      />
    </>
  );
};

const RenderArticleDetailsTitle = ({article}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={style.textContainer}>
      <AppText style={{color: colors.reverseTextColor}}>
        {article.title}
      </AppText>
    </View>
  );
};
