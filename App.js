/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import ImageBanana from './component/imageBanana'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>This is the best wish from Frank gagagagaga bbbbbb</Text>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={styles.imgsize}/>
        <ImageBanana/>
        <View style={{width: 50,height: 50,backgroundColor: 'red'}}></View>
        <View style={{width: 150,height: 50,backgroundColor: 'blue'}}></View>
        <View style={{width: 250,height: 50,backgroundColor: 'black'}}></View>
        <View style={{width:'80%',flexDirection:'row'}}>
          <View style={{height:50,flex:1,backgroundColor:'yellow'}}></View>
          <View style={{height:50,flex:1,backgroundColor:'pink'}}></View>
          <View style={{height:50,flex:1,backgroundColor:'darkblue'}}></View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'flex-start'}}>
          <View style={{height:50,width:50,backgroundColor:'powderblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'skyblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'steelblue'}}></View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'flex-end'}}>
          <View style={{height:50,width:50,backgroundColor:'powderblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'skyblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'steelblue'}}></View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'center'}}>
          <View style={{height:50,width:50,backgroundColor:'powderblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'skyblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'steelblue'}}></View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-around'}}>
          <View style={{height:50,width:50,backgroundColor:'powderblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'skyblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'steelblue'}}></View>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-between'}}>
          <View style={{height:50,width:50,backgroundColor:'powderblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'skyblue'}}></View>
          <View style={{height:50,width:50,backgroundColor:'steelblue'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow:'scroll'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imgsize:{
    width:200,
    height:120
  }
});
