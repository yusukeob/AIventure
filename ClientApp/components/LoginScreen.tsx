import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import appconfig from '../appconfig.json'
import appStyles from './AppStyles';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('raijin002');
  const [password, setPassword] = useState('password');

  async function PlayerLogin() {
    try {
      let response = await fetch(
          appconfig.SERVER_HOST + '/api/login/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
            })
          }
        );
        let json = await response.json();
        if (json.success) {
          navigation.navigate('Camera')
        }
      } catch (error) {
        console.error(error);
    }
  }

  return (
    <View style={appStyles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={username => setUsername(username)}
        defaultValue={username}
        style={styles.loginInput}
      />
      <TextInput
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        style={styles.loginInput}
      />
      <Button
        onPress={PlayerLogin}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginInput: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 2
  },
});
