import { FlatList, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from "./style"
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import { Historic } from '../../storage/ducks/historic/types';

type BibliotecaProps = {
  navigation: any
}

type StateProps = {
  historic: {
    data: Historic[]
  }
}

type VideoProps = {
  item: {
    id: number
    url: string
    nome: string
    user: {
        nome: string
    }
  }
}

export default function Biblioteca({ navigation }: BibliotecaProps) {
  const [title, setTitle] = useState("")
  const state = useSelector(state => state) as StateProps

  const renderVideo = ({ item }: VideoProps) => (
		<View></View>
	)

  return (
    <View style={styles.biblioteca}>
      <Header navigation={navigation} setTitle={setTitle}/>
      <View style={styles.recents}>
        <Text style={styles.recentsTitle}>Recents</Text>
        <ScrollView>
          {
            state.historic.data.length > 0 ? 
              <FlatList 
                data={state.historic.data}
                renderItem={renderVideo}
                keyExtractor={video => String(video.id)}
              />
            :
            null
          }
        </ScrollView>
      </View>
    </View>
  );
}
