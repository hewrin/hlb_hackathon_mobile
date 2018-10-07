import React from 'react';
import { Icon } from 'expo';
import { Image, View } from 'react-native'
import Colors from '../constants/Colors';

class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.color}
      />
    );
  }
}

class BigTabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={40}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

class HugeTabBarIcon extends React.Component {
  render() {
    return (
          <View
              style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  position: 'absolute',
                  alignItems: 'center'
              }}
          >
            <Image source={require('../assets/images/pamper_button.png')} resizeMode='center' style={{marginBottom: 10}}/>
          </View>
    )
  }
}

export { TabBarIcon, BigTabBarIcon, HugeTabBarIcon }