import React, {useContext} from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props extends ViewProps {}

export const AppScreenContainer: React.FC<Props> = (props) => {
  const {children, style, ...rest} = props;
  const {
    colors: {backgroundColor},
  } = useSelector((state: RootStore) => state.theme);
  return (
    <View
      {...rest}
      style={[styles.container, {backgroundColor: backgroundColor}, style]}>
      {children}
    </View>
  );
};
