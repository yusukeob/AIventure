import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
// import appconfig from '../appconfig.json'
import appStyles from './AppStyles';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }: any) {

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera: any;

  async function ActivateCamera() {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  async function TakePicture() {
    if (camera) {
      let pic = await camera.takePictureAsync();
      navigation.navigate('Confirm Picture', {picture: pic})
    }
  }

  if (hasPermission) {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type} ref={ref=>{camera = ref}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.8,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={TakePicture}>
              <Text style={{ fontSize: 30, marginBottom: 10, color: 'white' }}> Take Picture </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }

  return (
    <View style={appStyles.container}>
      <TouchableHighlight style={styles.button} onPress={ActivateCamera}>
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
