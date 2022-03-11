import { View, Image, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
import { useSelector } from 'react-redux';
import { UserState } from '../../storage/ducks/user/types';

type HeaderProps = {
    navigation: any,
    setTitle: Function
}

type StateProps = {
  user: UserState
}

export default function Header({ navigation, setTitle }: HeaderProps) {
  const state = useSelector(state => state) as StateProps
  return (
    <View style={styles.header}>
        <TextInput style={styles.headerInput} onChange={(e: any) => setTitle(e.target.value)}/>
        <View style={styles.loginImage} onTouchStart={() => navigation.navigate("Profile")}>
          {
            state.user.data ?
              state.user.data.user.foto_url === "" ?
                <Image source={require("../../../images/withoutlogin.png")} style={styles.image}/>
              :
                <Image source={{ uri: state.user.data.user.foto_url }} style={styles.image}/>
            :
              <Image source={require("../../../images/withoutlogin.png")} style={styles.image}/>
          }
        </View>
    </View>
  );
}
