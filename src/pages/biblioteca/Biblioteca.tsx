import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./style"
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Historic, HistoricTypes } from '../../storage/ducks/historic/types';
import { User } from '../../storage/ducks/user/types';
import { Video as VideoC } from "expo-av"
import { Video, VideoTypes } from '../../storage/ducks/video/types';
import { VideosTypes } from '../../storage/ducks/videos/types';

type BibliotecaProps = {
  navigation: any
}

type StateProps = {
  historic: {
    data: Historic[]
  },
  user: {
    data: User
  },
  video: {
    data: Video
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
    visualizacoes: number
  }
}

export default function Biblioteca({ navigation }: BibliotecaProps) {
  const [title, setTitle] = useState("")
  const state = useSelector(state => state) as StateProps
  const dispatch = useDispatch()

  useEffect(() => {
    if (state.user.data){
     // dispatch({ type: HistoricTypes.LOAD_REQUEST, payload: { userId: state.user.data.user.id } })
    }
  }, [])

  const renderVideo = ({ item }: VideoProps) => (
    <View style={styles.historicVideo} onTouchStart={() => {
      dispatch({ type: VideoTypes.REMOVE_VIDEO })
      dispatch({ type: VideosTypes.LOAD_UPDATE_VISUALIZATIONS, payload: { videoId: item.id }})
      navigation.navigate("Watch", { url: item.url, nome: item.nome, users: item.user, visualizacoes: item.visualizacoes + 1 })
    }}>
      <VideoC source={{ uri: item.url }} style={styles.video} resizeMode="cover" />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.ownerName}>{item.user.nome}</Text>
    </View>
	)
  
  return (
    <View style={styles.biblioteca}>
      <Header navigation={navigation} setTitle={setTitle}/>
      <View style={styles.recents}>
        <Text style={styles.recentsTitle}>Recents</Text>
        <View style={styles.historic}>
          {
            state.historic.data.length > 0 ? 
              <FlatList
                horizontal={true}
                data={state.historic.data}
                renderItem={renderVideo}
                keyExtractor={video => String(video.id * Math.random())}
              />
            :
            null
          }
        </View>
      </View>
    </View>
  );
}
