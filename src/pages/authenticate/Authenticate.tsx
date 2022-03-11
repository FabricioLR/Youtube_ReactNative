import { View, TextInput, Button, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypes, UserState } from '../../storage/ducks/user/types';
import { setGenericPassword } from 'react-native-keychain';

type AuthenticateProps = {
  navigation: any
}

type StateProps = {
  user: UserState
}

export default function Authenticate({ navigation }: AuthenticateProps) {
  const dispatch = useDispatch()
  const state = useSelector(state => state) as StateProps
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  async function authenticate() {
    if (email && password){
      dispatch({ type: UserTypes.LOAD_REQUEST_AUTHENTICATION, payload: { email, password }})
      if (!state.user.error){
       // await setGenericPassword(String(state.user.data?.user.nome), String(state.user.data?.token))
      }
    }
  }

  return (
    <View style={styles.authenticate}>
        <TextInput placeholder="Email" style={styles.email} onChange={(e: any) => setEmail(e.target.value)}/>
        <TextInput placeholder="Password" style={styles.password} onChange={(e: any) => setPassword(e.target.value)}/>
        <Text style={styles.text}>Does not have an accont? <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Register</Text></Text>
        <Button onPress={authenticate} title="Log In" />
    </View>
  );
}
