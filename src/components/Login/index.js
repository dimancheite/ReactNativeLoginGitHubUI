import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm  from './Form';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <View style={ styles.logoContainer }>
          <Image
            style={ styles.logo }
            source={ require('../images/github-logo.png') }
          />

          <Text style={ styles.title }>
            An app made for github using React Native
          </Text>
        </View>

        <LoginForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22A7F0',
    flex: 1,
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logo: {
    width: 100,
    height: 100
  },

  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
