/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/main'

export default class day8 extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

AppRegistry.registerComponent('day8', () => day8);
