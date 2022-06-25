import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {AppSpinner} from '../spinner/spinner';

interface Props<T> extends FlatListProps<T> {
  hideIndicator?: boolean;
}

export const AppList = function <T>(props: Props<T>) {
  const {hideIndicator, ...rest} = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={!hideIndicator}
      showsVerticalScrollIndicator={!hideIndicator}
      keyExtractor={(_, index) => `${index}`}
      onEndReachedThreshold={0.2}
      {...rest}
    />
  );
};
