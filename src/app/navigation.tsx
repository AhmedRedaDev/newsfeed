import React from 'react';
import I18n from 'react-native-i18n';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppIcon, IconType} from 'common';
import {Setting, News, ArticleDetails} from 'screens';
import {DarkSwitch} from 'components';
import {useTheme} from 'slices';

const MyTabs = createBottomTabNavigator();
const HomeStack = () => {
  const MyStack = createStackNavigator();
  const {colors} = useTheme();
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="news"
        component={News}
        options={{
          headerShown: false,
          title: I18n.t('news'),
          headerTintColor: colors.textColor,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
          },
        }} 
      />
      <MyStack.Screen
        name="articleDetails"
        component={ArticleDetails}
        options={{
          title: I18n.t('articleDetails'),
          headerTintColor: colors.textColor,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
          },
        }}
      />
    </MyStack.Navigator>
  );
};
const SettingsStack = () => {
  const MyStack = createStackNavigator();
  const {colors} = useTheme();
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="settings"
        component={Setting}
        options={{
          title: I18n.t('settings'),
          headerRight:DarkSwitch,
          headerTintColor: colors.textColor,
          headerStyle: {
            backgroundColor: colors.backgroundColor,
          },
        }}
      />
    </MyStack.Navigator>
  );
};

export const HomeTabs = (props) => {
  const {colors} = useTheme();
  const tabsList=[
    {
      name: 'HomeStack',
      component: HomeStack,
      options: {
        title: I18n.t('news_tab'),
        headerShown: false,
        tabBarIcon: get_tabBarIcon(
          'ios-information-circle-outline',
          'ios-information-circle',
        ),
      },
    },
    {
      name: 'Settings',
      component: SettingsStack,
      options: {
        headerShown: false,
        tabBarIcon: get_tabBarIcon('ios-list-outline', 'ios-list'),
      },
    },
  ]
  return (
    <MyTabs.Navigator 
      {...props}
      tabBarOptions={{
        activeTintColor: colors.reverseBackgroundColor,
        inactiveTintColor: colors.greyish,
        activeBackgroundColor: colors.backgroundColor,
        inactiveBackgroundColor: colors.backgroundColor,
      }}>
      {tabsList.map((tabData, key) => (
        <MyTabs.Screen {...tabData} key={key} />
      ))}
    </MyTabs.Navigator>
  );
};
function get_tabBarIcon(iconName: String, activeIconName: String) {
  //statements
  return ({focused, color, size}) => (
    <AppIcon
      type={IconType.ionicons}
      name={focused ? activeIconName : iconName}
      size={size}
      color={color}
    />
  );
}
