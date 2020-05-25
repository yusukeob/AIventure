import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

export default function ConfirmPictureScreen({ route, navigation }: any) {

  const { picture } = route.params;

  return (
    <View style={appStyles.container}>
      <Image 
        style={styles.picturePreview}
        source={picture}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 10, color: 'black' }}> Send </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  picturePreview: {
    height: 480,
    width: 270
  },
});
