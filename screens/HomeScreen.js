import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Header from '../components/Header'
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { source: this.imageRendered() };
}

  static navigationOptions = {
    headerTitle: <Header />, 
    headerTransparent: true
  };

  state = {
    source: ''
  }

  imageRendered() {
    if (this.props.navigation.getParam('payed', false)) {
      return require('../assets/images/jasmine-happy.png')
    } else {
      return require('../assets/images/jasmine.png')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%',justifyContent: 'flex-end'}}>
          <Image source={this.state.source} style={{width: '85%', height: '80%', marginBottom: 30, alignSelf: 'flex-end', resizeMode: 'contain'}} />
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
