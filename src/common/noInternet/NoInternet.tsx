import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {AppText} from 'common/text/Text';
import {AppIcon} from 'common/icon/Icon';
import {windowHeight, windowWidth} from 'common/utils/responsiveDimmensions';
import I18n from 'react-native-i18n';
import {useInternet, useTheme} from 'slices';
import {IconType} from 'common/utils/icon';
interface Props {
  height?: number;
  color?: string;
  children?: any;
  onReconnect?: any;
}
export const NoInternet: React.FC<Props> = (props: Props) => {
  const {
    colors: {dark},
  } = useTheme();
  const {isInternetAvailable} = useInternet();
  const {
    height = windowHeight / 2,
    color = dark,
    children,
    onReconnect,
  } = props;
  const prevIsInternetAvailableRef = useRef(isInternetAvailable);
  useEffect(() => {
    if (
      onReconnect &&
      !prevIsInternetAvailableRef.current &&
      isInternetAvailable
    ) {
      onReconnect();
    }
    prevIsInternetAvailableRef.current = isInternetAvailable;
  }, [isInternetAvailable]);

  return isInternetAvailable ? (
    children
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
      }}>
      <AppIcon
        name={'wifi-off'}
        type={IconType.materialCommunityIcons}
        color={color}
        size={windowWidth / 2}
      />
      <AppText style={{color: color, fontSize: 20}}>
        {I18n.t('noInternet')}
      </AppText>
    </View>
  );
};
