import React from 'react';
import {Chase} from 'react-native-animated-spinkit';
import {SpinnerProps} from 'react-native-animated-spinkit/lib/typescript/SpinnerProps';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props extends Partial<SpinnerProps> {}

export const AppSpinner: React.FC<Props> = (props) => {
  const {color, ...rest} = props;
  const {aquaMarine} = useSelector((state: RootStore) => state.theme.colors);

  return <Chase color={color || aquaMarine} {...rest} />;
};
