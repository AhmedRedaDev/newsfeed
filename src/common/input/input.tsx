import React, {useState} from 'react';
import {
  TextInputProps,
  TextInput,
  View,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  KeyboardTypeOptions,
} from 'react-native';
import {AppText} from '../text/Text';
import {styles} from './style';
import {IconType} from '../utils/icon';
// import {AppIconButton} from '../iconButton/IconButton';
import I18n from 'react-native-i18n';
import {useTheme} from 'slices';
import {AppIcon} from 'common/icon/Icon';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  value: string;
  backgroundColor?: string;
  secureTextEntry?: boolean;
  onChangeText: (text) => void;
  onBlur?: (text) => void;
  onFocus ?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  icon_type: IconType;
  icon_name: string;
  multiline?: any;
  numberOfLines?: any;

  maxLength?: number;
}
export const AppInput = (props: Props) => {
  const {
    numberOfLines,
    multiline,
    onFocus,
    onBlur,
    label,
    error,
    value,
    backgroundColor,
    onChangeText,
    keyboardType,
    editable,
    icon_type,
    icon_name,
    maxLength,
  } = props;
  const {
    colors: { 
      reverseBackgroundColor, 
      white,
      reverseTextColor,
      errorTextColor,
      greyish,
    },
  } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(
    props.secureTextEntry || false,
  );
  const onFocusInput = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setIsFocus(true);
    if (onFocus) onFocus(event);
  };
  const onBlurInput = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setIsFocus(false);
    if (onBlur) onBlur(event);
  };
  let inputTextColor = isFocus ? reverseTextColor : error ? errorTextColor : greyish;
  let borderColor = isFocus ? reverseBackgroundColor : error ? errorTextColor : greyish;
  let _iconColor = isFocus ? reverseBackgroundColor : error ? errorTextColor : greyish;
  return (
    <View>
      <View
        style={{
          alignSelf: 'stretch',
          height: multiline ? 145 : 45,
          marginVertical: 15,
          borderRadius: 7,
          borderColor: borderColor,
          borderWidth: 1,
        }}>
        <View style={styles.container}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: multiline ? 5 : 0,
              justifyContent: multiline ? 'flex-start' : 'center',
            }}>
            <AppIcon
              color={_iconColor}
              size={20}
              type={icon_type}
              name={icon_name}
            />
          </View>
          <TextInput
            value={value}
            placeholder={label}
            secureTextEntry={secureTextEntry}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            // style={{flex:1 ,paddingHorizontal:35}}
            keyboardType={keyboardType ? keyboardType : 'default'}
            style={{
              fontSize: 17,
              flex: 1,
              paddingEnd: 10,
              color: reverseBackgroundColor,
              fontWeight: 'bold',
              paddingStart: 20,
              textAlign: I18n.locale == 'en' ? 'left' : 'right',
            }}
            placeholderTextColor={reverseBackgroundColor}
            onChangeText={onChangeText}
            editable={editable}
            numberOfLines={numberOfLines}
            multiline={multiline}
            maxLength={maxLength}
            returnKeyType={'done'}
          />
          {/* {props.secureTextEntry && (
            <AppIconButton
              color={_iconColor}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              containerStyle={styles.show_password_icon}
              size={20}
              type={IconType.ionicons}
              name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
            />
          )} */}
        </View>
      </View>
      {error?.length && (
        <View style={{position: 'absolute', bottom: 0, left: 15}}>
          <AppText style={{color: errorTextColor, fontSize: 10}}>
            {error}
          </AppText>
        </View>
      )}
    </View>
  );
};
