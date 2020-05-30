import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

export default function ResultScreen({ route, navigation }: any) {

  const { success } = route.params;

  const missionFailedText = <Text style={styles.resultText}>Mission Failed</Text>;
  const missionPassedText = <Text style={styles.resultText}>Mission Passed</Text>;

  return (
    <View style={appStyles.container}>
      {success ? missionPassedText : missionFailedText}
    </View>
  );
}

const styles = StyleSheet.create({
  resultText: {
    fontSize: 20
  },
});
