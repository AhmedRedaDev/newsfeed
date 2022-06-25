import React from 'react';
import {ArticleModel} from 'models';
import {useNavigation, RouteProp} from '@react-navigation/native';
import { RenderArticleDetailsContainer } from './RenderArticleDetailsContainer';
interface Props {
  article: ArticleModel;
}
export const ArticleCard = ({article}: Props) => {
  const {navigate}: any = useNavigation();
  const onPress = () => {
    navigate(`articleDetails`, {article});
  };
  return <RenderArticleDetailsContainer article={article} onPress={onPress} />;
};