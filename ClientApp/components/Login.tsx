import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import appconfig from '../appconfig.json'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function getPlayerinfoAsync() {
    try {
      let response = await fetch(
          appconfig.SERVER_HOST + '/api/login/singleUser'
        );
        let json = await response.json();
        setUsername(json.username);
        setPassword(json.password);
      } catch (error) {
        console.error(error);
    }
  }

  return (
    <View>
      <Button
        onPress={getPlayerinfoAsync}
        title="Push"
      />
      <Text>Username: {username}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
}