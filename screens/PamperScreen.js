import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, AlertIOS } from 'react-native'

export default class PamperScreen extends React.Component {
  static navigationOptions = {
    title: 'Pamper',
  };

  items() {
    return [
      {name: 'Car', url: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=car-vehicle-luxury-112460.jpg&fm=jpg', price: '20000'},
      {name: 'Flowers', url: 'https://res.cloudinary.com/prestige-gifting/image/fetch/fl_progressive,q_95,e_sharpen:50,w_480/e_saturation:05/https://www.prestigeflowers.co.uk/images/NF1018.jpg', price: '10'},
      {name: 'Beans', url: 'https://ll-us-i5.wal.co/asr/98dd5d0a-79db-423d-8a9f-1aaa084c60a5_1.dfc3290b334bedb6a61f7f24d80a6a5f.jpeg-f673312f2915e25f59fe438f7d481f5d65a3090a-optim-450x450.jpg?odnBg=FFFFFF', price: '3'},
      {name: 'Table Tennis Table', url: 'https://images.sportsdirect.com/images/products/77022018_l.jpg', price: '400'},

    ]
  }

  async onPurchase(item) {
    const url = 'https://f10ed65a.ngrok.io'

    const response = await fetch(
      `${url}/accounts/1`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: `${item.price}`
        })
      }
    ).then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
    this.props.navigation.navigate('Home') 
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
      <Card key={index}>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: item.url}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
          </Left>
          <Body>
            <Button transparent onPress={() => this.onPurchaseClick(item)}>
              <Icon active name="card" />
              <Text>{`RM${item.price}`}</Text>
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
      <ScrollView>
        <Container>
          <Content>
            {this.renderCards()}
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
