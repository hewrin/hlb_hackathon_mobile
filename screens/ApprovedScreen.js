import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Content, Button, Card,CardItem } from 'native-base'
import Header from '../components/Header'

export default class ApprovedScreen extends React.Component {
  render() {
    return(
      <Container style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#2a0131'}}>
        <View style={{padding: 30}}>
          <Button onPress={() => this.props.navigation.navigate('Home')} style={{backgroundColor: '#2a0131',alignSelf: "center"}}>
            <Image source={require('../assets/images/approved.png')} 
                    style={{width: '65%', resizeMode: 'contain'}} 
            />
          </Button>
        </View>
      </Container>
    )
  }
}
