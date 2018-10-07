import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Container , Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import { Image, AlertIOS } from 'react-native'
import Header from '../components/Header'
import Modal from "react-native-modal";
import { StackActions, NavigationActions } from 'react-navigation';
import Loader from '../components/loader';

export default class PamperScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />, 
    headerStyle: {
      backgroundColor: '#2a0131'
    }
  };

  state = {
    isVisible: false,
    selectedItem: {},
    loading: false
  }

  items() {
    return [
      {name: '100 IG Likes', url: require('../assets/images/likes100-01.png'), price: '10'},
      {name: '1000 IG Likes', url: require('../assets/images/likes1000-01.png'), price: '100'},
      {name: 'Tropical Island Vacation', url: require('../assets/images/island-01.png'), price: '200'},
      {name: 'Sports Car', url: require('../assets/images/car-01.png'), price: '350'},
    ]
  }

  renderSpinner() {
    return <Loader loading={ this.state.loading } />
  }

  async onConfirm(item) {
    this.setState({loading: true })
    const url = 'https://b1fa25c1.ngrok.io'

    const response = await fetch(
      `${url}/accounts/1`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: `${this.state.selectedItem.price}`
        })
      }
    ).then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home', key: 'Home', params: {payed: 'true'}})],
    });
    this.props.navigation.dispatch(resetAction);
  }

  onPurchase(item) {
    this.setState({selectedItem: item, isVisible: true})
  }

  onPurchaseClick(item) {
    AlertIOS.alert(
      `Pay RM${item.price} for a ${item.name}`,
      '',
      [
        {
          text: 'Yes',
          onPress: () => this.onPurchase(item)
        },
        {
          text: 'No',
          onPress: () => console.log('Install Pressed'),
          style: 'cancel',
        },
      ]
    );
  }

  renderCards() {
    const items = this.items()

    return items.map((item, index) =>{
    return(
      <Card key={index} style={{backgroundColor: '#2a0131'}}>
        <CardItem style={{backgroundColor: '#620181'}}>
          <Left>
            <Body>
              <Text style={{color: 'white'}}>{item.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody style={{backgroundColor: '#2a0131'}}>
          <Image source={item.url} style={{height: 200, width: null, flex: 1, resizeMode: 'contain'}} />
        </CardItem>
        <CardItem style={{backgroundColor: '#2a0131'}}>
          <Left>
          </Left>
          <Body>
            <Button style={{backgroundColor: 'white'}} onPress={() => this.onPurchaseClick(item)}>
              <Icon active name="card" style={{color: '#2a0131'}} />
              <Text style={{color: '#2a0131'}}>{`RM${item.price}`}</Text>
            </Button>
          </Body>
          <Right>
          </Right>
        </CardItem>
      </Card>
    )
    })

  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#2a0131'}}>
        <Container style={{backgroundColor: '#2a0131'}}>
          <Content style={{backgroundColor: '#2a0131'}}>
            {this.renderSpinner()}
            {this.renderCards()}
            }
          </Content>
        </Container>
        <View flexDirection='row' justifyContent='flex-end'>
          <Modal
            isVisible={this.state.isVisible}
            backdropColor={"#2a0131"}
            backdropOpacity={1}
            animationIn="zoomInUp"
            animationOut="zoomOut"
            animationInTiming={150}
            animationOutTiming={100}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onModalHide={() => this.onConfirm()}
              >
              <Button onPress={() => this.setState({isVisible: false})} style={{backgroundColor: '#2a0131'}}>
                <Image source={require('../assets/images/ApplePay.png')} 
                    style={{width: '100%', resizeMode: 'contain'}} 
            />
              </Button>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#2a0131',
  },
});
