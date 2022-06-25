import {RefreshControl,SafeAreaView,View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getArticles} from 'api';
import {ArticleModel} from 'models';
import {AppInput, AppList, AppSpinner, EmptyComponent, IconType} from 'common';
import {  ArticlesList} from 'components';
import {useNavigation} from '@react-navigation/native';
import NewsHOCSearch from './NewsHOCSearch';

const NewsHOC = (props) => {
  const {setOptions} = useNavigation();
  const [articles, setArticles] = useState<ArticleModel[]>([]);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  useEffect(() => {
    getInitData();
  }, []);
  const getInitData = async (q = 'apple') => {
    setLoadingIndicator(true);
    let result = await getArticles({q});
    setLoadingIndicator(false);
    setArticles(result);
  }; 
  return <SafeAreaView style={{flex:1}}>
    <View style={{height:70}}>
  <NewsHOCSearch getInitData={getInitData} />
  </View>
  <View style={{flex:1}}>
  <ArticlesList {...{loadingIndicator, getInitData, articles}} />
  </View>
  </SafeAreaView>;
}; 
 

export default NewsHOC;
