import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render() {
    return(
      <View style={ styles.wrapper }>
        <Text style={ styles.title }>Github App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#E68364',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'white',
    fontSize: 35
  }
});
