import React from 'react'
import { StyleSheet, View, Text, Image, Touchable } from 'react-native'
import { Container, Content, Button, Card,CardItem } from 'native-base'
import Header from '../components/Header'
import Modal from "react-native-modal";

export default class TouchScreen extends React.Component {

  state = {
    isVisible: false
  }

  render() {
    return(
      <Container style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#2a0131'}}>
        <View style={{padding: 30}}>
          <Button onPress={() => this.setState({isVisible: !this.state.isVisible})} style={{backgroundColor: '#2a0131',alignSelf: "center"}}>
            <Image source={require('../assets/images/touch-dialog.png')} 
                    style={{width: '65%', resizeMode: 'contain'}} 
            />
          </Button>
        </View>
        <View>
          <Modal
            isVisible={this.state.isVisible}
            backdropColor={"#2a0131"}
            backdropOpacity={1}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={150}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onModalHide={() => this.props.navigation.navigate('Home')}
              >
            }
            <View>
              <Button onPress={() => this.setState({isVisible: !this.state.isVisible})}  >
                <Image source={require('../assets/images/approved.png') } 
                  style={{width: '100%', resizeMode: 'contain'}}
                  /> 
              </Button>
            </View>
          </Modal>
        </View>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  scrollableModal: {
    height: 300
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  }
});


