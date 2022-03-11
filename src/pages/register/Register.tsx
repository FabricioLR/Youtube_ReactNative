import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypes, UserState } from '../../storage/ducks/user/types';
import { setGenericPassword } from 'react-native-keychain';

type StateProps = {
  user: UserState
}

export default function Register() {
  const dispatch = useDispatch()
  const state = useSelector(state => state) as StateProps
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  
  async function register() {
    if (email && password && name){
      dispatch({ type: UserTypes.LOAD_REQUEST_REGISTRATION, data: { email, password, name }})
      if (!state.user.error){
       // await setGenericPassword(name, String(state.user.data?.token))
      }
    }
  }
  return (
    <View style={styles.register}>
        <TextInput placeholder="Name" style={styles.name} onChange={(e: any) => setName(e.target.value)}/>
        <TextInput placeholder="Email" style={styles.email} onChange={(e: any) => setEmail(e.target.value)}/>
        <TextInput placeholder="Password" style={styles.password} onChange={(e: any) => setPassword(e.target.value)}/>
        <Button onPress={() => register} title="Register"/>
    </View>
  );
}
