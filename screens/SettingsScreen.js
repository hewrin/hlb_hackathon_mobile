import React from 'react';
import SettingsList from 'react-native-settings-list';
import { View, Text } from 'react-native'
export default class SettingsScreen extends React.Component {

static navigationOptions = {
  title: 'Settings', 
    headerStyle: {
      backgroundColor: '#2a0131'
    },
    headerTitleStyle: {
      color: 'white'
    }

};

render() {
  var bgColor = '#DCE3F4';
  return (
    <View style={{backgroundColor:'#2A0131',flex:1}}>
      <View style={{backgroundColor:'#2A0131',flex:1}}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50} backgroundColor='#2A0131'>
          <SettingsList.Item
            title='Profile'
            titleStyle={{color: 'white'}}
            onPress={() => Alert.alert('Route to Wifi Page')}
            backgroundColor='#2A0131'
          />
          <SettingsList.Item
            title='Payment'
            titleStyle={{color: 'white'}}
            backgroundColor='#2A0131'
            onPress={() => this.props.navigation.navigate('Payment')}
          />
          <SettingsList.Item
       
            title='Sound'
            onPress={() => Alert.alert('Route To Cellular Page')}
            titleStyle={{color: 'white'}}
            backgroundColor='#2A0131'
          />
          <SettingsList.Item
            title='Terms and Conditions'
            onPress={() => Alert.alert('Route To Hotspot Page')}
            titleStyle={{color: 'white'}}
            backgroundColor='#2A0131'
          />
        </SettingsList>
      </View>
    </View>
  );
}
onValueChange(value){
  this.setState({switchValue: value});
}
}
