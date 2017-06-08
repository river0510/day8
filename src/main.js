/**
 * Day 10
 * 
 */
'use strict';

import React,{ Component } from 'react';
import { Image,StyleSheet,Text,TouchableWithoutFeedback,TouchableHighlight,StatusBar,Animated,Easing,View } from 'react-native';
import Util from './utils';

export default class extends Component{
  state = {
    showBlur: false,
    shift: new Animated.Value(-120)
  }
  
  showMenu = ()=>{
    this.setState({
      showBlur: true
    })
    Animated.timing(
      this.state.shift,
      {
        toValue: Util.size.width === 375 ? 50:30,
        duration: 200,
        delay: 100,
        easing: Easing.elastic(1)
      }
    ).start();
  }

  hideMenu = ()=>{
    Animated.timing(
      this.state.shift,
      {
        toValue: -120,
        duration: 200,
        delay: 100,
        easing: Easing.elastic(1)
      }
    ).start();
    setTimeout(()=>{
      this.setState({
        showBlur: false
      })
    },200)
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.showMenu}>
          <Image source={require('./img/tumblr.png')} style={styles.bg}></Image>
        </TouchableWithoutFeedback>
        {this.state.showBlur?
          <View>
            <Image source={require('./img/tumblrblur.png')} style={styles.blur}>
              <Animated.View style={[styles.menuItem1,{left: this.state.shift}]}>
                <TouchableHighlight >
                  <View >
                    <Image source={require('./img/tumblr-text.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Text</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>
              <Animated.View style={[styles.menuItem2,{right: this.state.shift}]}>
                <TouchableHighlight >
                  <View >
                    <Image source={require('./img/tumblr-photo.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Photo</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>
              <Animated.View style={[styles.menuItem3,{left: this.state.shift}]}>
                <TouchableHighlight >
                  <View >
                    <Image source={require('./img/tumblr-quote.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Quote</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>
              <Animated.View style={[styles.menuItem4,{right: this.state.shift}]}>
                <TouchableHighlight >
                  <View >
                    <Image source={require('./img/tumblr-link.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Link</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>
              <Animated.View style={[styles.menuItem5,{left: this.state.shift}]}>
                <TouchableHighlight >
                  <View >
                    <Image source={require('./img/tumblr-chat.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Chat</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>
              <Animated.View style={[styles.menuItem6,{right: this.state.shift}]}>
                <TouchableHighlight >
                  <View>
                    <Image source={require('./img/tumblr-audio.png')} style={styles.icon}></Image>
                    <Text style={styles.text}>Audio</Text>
                  </View>
                </TouchableHighlight>                
              </Animated.View>                                                                     
            </Image>
            <TouchableHighlight onPress={this.hideMenu} underlayColor="transparent" activeOpacity={0}>
              <Text style={styles.btn}>Never Mind</Text>
            </TouchableHighlight>
          </View> : <View></View>
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  bg:{
    width: Util.size.width,
    height: Util.size.height - 20,
    marginTop: 20,
    position: "absolute"
  },
  blur: {
    width: Util.size.width,
    height: Util.size.height,
    position: "absolute",
    paddingTop: 20
  },
  menuItem1: {
    position: "absolute",
    top: 80,
    left: 50,
    // borderWidth: 1, borderColor: "red"

  },
  menuItem2: {
    position: "absolute",
    top: 80,
    right: 50,
    // borderWidth: 1, borderColor: "red"

  },
  menuItem3: {
    position: "absolute",
    top: 240,
    left: 50,
    // borderWidth: 1, borderColor: "red"

  },
  menuItem4: {
    position: "absolute",
    top: 240,
    right: 50,
    // borderWidth: 1, borderColor: "red"

  },
  menuItem5: {
    position: "absolute",
    top: 400,
    left: 50,
    // borderWidth: 1, borderColor: "red"

  },
  menuItem6: {
    position: "absolute",
    top: 400,
    right: 50,
    // borderWidth: 1, borderColor: "red"

  },
  icon: {
    width: 120,
    height: 100,
    // borderWidth: 1, borderColor: "red"
  },
  text: {
    color: "#fff",
    textAlign: "center"
  },
  btn: {
    color: "#555",
    fontWeight: "600",
    position: "absolute",
    top: 580,
    textAlign: "center",
    width: Util.size.width
  }
})