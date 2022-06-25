import React from 'react';
import {View} from 'react-native';
import {AppText} from 'common/text/Text';
import {AppIcon} from 'common/icon/Icon';
import {windowHeight, windowWidth} from 'common/utils/responsiveDimmensions';
import I18n from 'react-native-i18n';
import {useTheme} from 'slices/theme';
import {IconType} from 'common/utils/icon';
interface Props {
  height?: number;
  color?: string;
}
export const EmptyComponent: React.FC<Props> = (props: Props) => {
  const {
    colors: {greyish},
  } = useTheme();
  const {height = windowHeight / 2, color = greyish} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
      }}>
      <AppIcon
        name={'database-remove'}
        type={IconType.materialCommunityIcons}
        color={color}
        size={windowWidth / 2}
      />
      <AppText style={{color: color, fontSize: 20}}>
        {I18n.t('emptyData')}
      </AppText>
    </View>
  );
};
