import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

export default function ResultScreen({ route, navigation }: any) {

  const { prediction } = route.params;

  return (
    <View style={appStyles.container}>
      <Text style={styles.resultText}>Prediction: {prediction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultText: {
    fontSize: 20
  },
});
