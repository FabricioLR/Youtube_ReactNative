import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { Video } from 'expo-av';
import styles from "./style"
import { useDispatch, useSelector } from 'react-redux';
import { VideosTypes } from '../../storage/ducks/videos/types';
import { HistoricTypes } from '../../storage/ducks/historic/types';
import { VideoTypes } from '../../storage/ducks/video/types';
import { User } from '../../storage/ducks/user/types';

type VideoProps = {
    id: number
    url: string
    nome: string
    visualizacoes: number
    users: {
        nome: string
        foto_url: string
    },
    navigation: any
    setLoading: Function
}

type StateProps = {
    user: {
        data: User
    }
}

export default function VideoComponent({ url, nome, visualizacoes, users, navigation, id, setLoading }: VideoProps) {
    const dispatch = useDispatch()
    const state = useSelector(state => state) as StateProps
    return (
        <View style={styles.video} onTouchStart={async () => {
            setLoading(true)
            dispatch({ type: VideoTypes.REMOVE_VIDEO })
            dispatch({ type: VideosTypes.LOAD_UPDATE_VISUALIZATIONS, payload: { videoId: id }})
            navigation.navigate("Watch", { url, nome, users, visualizacoes: visualizacoes + 1 })
            if (state.user.data){
               // dispatch({ type: HistoricTypes.ADD_TO_HISTORIC_WL, payload: { videoId: id, userId: state.user.data.user.id }})
            } else {
                dispatch({ type: HistoricTypes.ADD_TO_HISTORIC_WTL, payload: { url, nome, visualizacoes, id, user: { nome: users.nome, foto_url: users.foto_url } }})
            } 
        }}>
            <Video source={{ uri: url }} style={styles.videoComponent} resizeMode="cover"/>
            <View style={styles.videoInfos}>
                <View style={styles.ownerImage}>
                    {
                        users.foto_url === "" ?
                            <Image source={require("../../../images/withoutlogin.png")} style={{ width: "100%", position: "relative", height: "100%", borderRadius: 50 }}/>
                        :
                            <Image source={{
                                uri: users.foto_url
                            }} style={{ width: "100%", position: "relative", height: "100%", borderRadius: 50 }}/>
                    }
                </View>
                <View>
                    <Text style={styles.title}>{nome}</Text>
                    <Text style={styles.ownerName}>{users.nome} - {visualizacoes} visualizações</Text>
                </View>
            </View>
        </View>
    )
}
