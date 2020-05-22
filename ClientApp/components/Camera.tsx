import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
// import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

export default function Camera() {

  function ActivateCamera() {

  }

  return (
    <View style={appStyles.container}>
      <TouchableHighlight style={styles.button} onPress={() => ActivateCamera}>
        <Text style={styles.buttonText}>Activate Camera</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: 200,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});
