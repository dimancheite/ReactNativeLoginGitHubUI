import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return(
      <View style={ styles.formContainer }>
        <TextInput
          style={ styles.input }
          placeholder="username or email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="next"
          onSubmitEditing={ () => this.passwordInput.focus() }
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={ false }
        />

        <TextInput
          secureTextEntry
          style={ styles.input }
          placeholder="password"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="go"
          ref={ (input) => this.passwordInput = input }
        />

        <TouchableOpacity style={ styles.buttonContainer }>
          <Text style={ styles.button }>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },

  buttonContainer: {
    backgroundColor: '#BE90D4',
    paddingVertical: 15
  },

  button: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
