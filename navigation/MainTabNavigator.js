import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon, BigTabBarIcon, HugeTabBarIcon } from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PamperScreen from '../screens/PamperScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PaymentScreen from '../screens/PaymentScreen'
import TouchScreen from '../screens/TouchScreen'
import ApprovedScreen from '../screens/ApprovedScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#dc01bd'
      name='md-heart-outline'
    />
  ),
};

const PamperStack = createStackNavigator({
  Pamper: PamperScreen,
  Home: HomeScreen
});

PamperStack.navigationOptions = {
    tabBarIcon: ({ focused }) => {
    return <HugeTabBarIcon/>
  },

};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Payment: PaymentScreen,
  Touch: TouchScreen,
  Approved: ApprovedScreen
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#8e8e93'
      name='ios-settings'
    />
  ),
};

const Settings2Stack = createStackNavigator({
  Settings: SettingsScreen,
});

Settings2Stack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#8e8e93'
      name="md-chatbubbles"
    />
  ),
};

const Settings3Stack = createStackNavigator({
  Settings: SettingsScreen,
});

Settings3Stack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color='#8e8e93'
      name="md-image"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  Settings2Stack,
  PamperStack,
  Settings3Stack,
  SettingsStack,
},
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#000'
      }
    },
  });
