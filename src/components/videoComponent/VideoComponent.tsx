import { View, Text, Image } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import styles from "./style"
import { useDispatch } from 'react-redux';
import { VideosTypes } from '../../storage/ducks/videos/types';
import { HistoricTypes } from '../../storage/ducks/historic/types';

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
}

export default function VideoComponent({ url, nome, visualizacoes, users, navigation, id }: VideoProps) {
    const dispatch = useDispatch()
    return (
        <View style={styles.video} onTouchStart={async () => {
                dispatch({ type: VideosTypes.LOAD_UPDATE_VISUALIZATIONS, payload: { videoId: id }})
                navigation.navigate("Watch", { url, nome, users, visualizacoes: visualizacoes + 1 })
                dispatch({ type: HistoricTypes.ADD_TO_HISTORIC_WL, payload: { id, url, nome, user: { nome: users.nome }}})
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
                    <Text style={styles.ownerName}>{users.nome} - {visualizacoes} visualizaçôes</Text>
                </View>
            </View>
        </View>
    )
}
