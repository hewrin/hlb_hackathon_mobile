import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Content, Button, Card,CardItem, Icon } from 'native-base'
import Header from '../components/Header'
import Modal from "react-native-modal";

export default class PaymentScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#2a0131',
    },
    headerTintColor: 'white',
  };

  state = {
    isTouchVisible: false,
    isApprovedVisible: false
  }

  render() {
    return(
      <Container style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#2a0131'}}>
        <Text style={{color: 'white'}}>Add Payment Method</Text>
        <View style={{ borderBottomColor: '#666',borderStyle: 'solid',borderWidth: 1}}>
            <Text style={{color: 'white', fontWeight: '600', marginTop: 30, marginBottom: 30 }}><Icon name='md-add' style={{color: 'white', fontSize: 16, fontWeight: '600'}}/>Add Credit Card</Text>
        </View>

        <View style={{padding: 30}}>
          <Button onPress={() => this.setState({isTouchVisible: true})} style={{backgroundColor: '#2a0131',alignSelf: "center"}}>
            <Image source={require('../assets/images/hong-leong-connect-01.png')} style={{width: '50%', resizeMode: 'contain'}}/>
          </Button>
        </View>
        <View>
          <Modal
            isVisible={this.state.isTouchVisible}
            backdropColor={"#2a0131"}
            backdropOpacity={1}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={150}
            animationOutTiming={100}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onModalHide={() => this.setState({isApprovedVisible: true})}
              >
              <Button onPress={() => this.setState({isTouchVisible: false})} style={{backgroundColor: '#2a0131',alignSelf: "center"}}>
                <Image source={require('../assets/images/touch-dialog.png')} 
                    style={{width: '65%', resizeMode: 'contain'}} 
            />
              </Button>
            </Modal>
        </View>
        <View>
          <Modal
            isVisible={this.state.isApprovedVisible}
            backdropColor={"#2a0131"}
            backdropOpacity={1}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={150}
            animationOutTiming={100}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onModalHide={() => this.props.navigation.navigate('Home')}
              >
            
            <View>
              <Button onPress={() => this.setState({isApprovedVisible: false})} style={{backgroundColor: '#2a0131',alignSelf: "center"}} >
                <Image source={require('../assets/images/approved.png') } 
                  style={{width: '65%', resizeMode: 'contain'}}
                  /> 
              </Button>
            </View>
          </Modal>
        </View>
      </Container>
    )
  }
}
