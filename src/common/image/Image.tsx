import React, {useRef} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

import {Animated, View} from 'react-native';
import {AppSpinner} from '../spinner/spinner';
 

export interface Props extends FastImageProps {
  loading?: boolean;
}

export const AppImage: React.FC<Props> = (props) => {
  const {style, loading, ...rest} = props;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return !loading ? (
    <FastImage onLoadEnd={fadeOut} style={style} {...rest} />
  ) : (
    <View style={style}>
      <FastImage
        onLoadEnd={fadeOut}
        style={
          Array.isArray(style)
            ? style
            : [style, {flex: 1, width: '100%', height: '100%'}]
        }
        {...rest}
      />
      <Animated.View
        style={[
          style,
          {
            opacity: fadeAnim,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
        ]}>
        <AppSpinner color={'#CED7E0'} />
      </Animated.View>
    </View>
  );
};

// import React from 'react';
// import FastImage, {FastImageProps} from 'react-native-fast-image';
// export interface Props extends FastImageProps {}

// export const AppImage: React.FC<Props> = (props) => {
//   const {source, ...rest} = props;
//   return <FastImage source={source} {...rest} />;
// };
