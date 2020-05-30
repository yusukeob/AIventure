import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

export default function ConfirmPictureScreen({ route, navigation }: any) {

  const { picture } = route.params;
  let pictureUri: string = "";

  async function SendPicture() {

      let data = new FormData();
      data.append('picture', { uri: picture.uri, type: 'image/jpeg', name: 'test.jpg' });

      try {
        let response = await fetch(
          appconfig.SERVER_HOST + '/api/ai/check_picture/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: data
          }
        );
        let json = await response.json();
        navigation.navigate('Result', {success: json.success})
      } catch (error) {
        console.error(error);
    }
  }

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
      }}
      onPress={SendPicture}>
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
