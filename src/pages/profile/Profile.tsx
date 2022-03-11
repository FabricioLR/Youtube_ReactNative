import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import Icon from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from 'react-redux';
import { UserState, UserTypes } from '../../storage/ducks/user/types';

type ProfileProps = {
  navigation: any
}

type StateProps = {
  user: UserState
}

export default function Profile({ navigation }: ProfileProps) {
  const state = useSelector(state => state) as StateProps
  const dispatch = useDispatch()
  return (
    <View style={styles.profile}>
      {
        state.user.data ?
          <> 
            <View style={styles.logOut} onTouchStart={() => dispatch({ type: UserTypes.REMOVE_USER })}>
              <Text style={styles.logOutText}>Log Out</Text>
              <Icon name="arrowright" size={20} color="white"/>
            </View>
          </>
        :
          <>
            <View style={styles.register} onTouchStart={() => navigation.navigate("Register")}>
              <Text style={styles.registerText}>Register</Text>
              <Icon name="arrowright" size={20} color="white"/>
            </View>
            <View style={styles.authenticate} onTouchStart={() => navigation.navigate("Authenticate")}>
              <Text style={styles.authenticateText}>Authenticate</Text>
              <Icon name="arrowright" size={20} color="white"/>
            </View>
          </>
      }
      
    </View>
  );
}
