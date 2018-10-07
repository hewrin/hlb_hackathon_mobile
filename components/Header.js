import React from 'react';
import { Image, View } from 'react-native'

export default class Header extends React.Component {
  render() {
    return (
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 155, height: 40 }}
        />

    );
  }
}