import {RefreshControl,View} from 'react-native';
import React  from 'react';
import {ArticleModel} from 'models';
import {  AppList,   EmptyComponent  } from 'common';
import {ArticleCard} from 'components/articleCard/ArticleCard';
 
export const ArticlesList = ({loadingIndicator, getInitData, articles}) => (
  <AppList<ArticleModel>
    refreshControl={
      <RefreshControl
        refreshing={loadingIndicator}
        onRefresh={getInitData}
        progressViewOffset={100}
      />
    }
    hideIndicator
    data={articles}
    initialNumToRender={1}
    ListEmptyComponent={EmptyComponent}
    renderItem={({item}) => <ArticleCard article={item} />}
  />
);
 
