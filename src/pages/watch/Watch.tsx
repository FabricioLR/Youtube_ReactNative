import { View, Text, Image } from 'react-native';
import React, { useRef } from 'react';
import { Video } from "expo-av"
import styles from './style';
import Icon from "react-native-vector-icons/AntDesign"
import { useDispatch } from 'react-redux';
import { VideoTypes } from '../../storage/ducks/video/types';

type WathProps = {
    route: any
    navigation: any
}

export default function Watch({ route, navigation }: WathProps) {
    const dispatch = useDispatch()
    const ref = useRef<any>(null)
    return (
        <View style={styles.watch}>
            <Icon name="down" style={[styles.exit, { transform: [{ scale: 1.5 }]}]} size={18} onPress={async () => {
                const position = await ref.current.getStatusAsync()
                dispatch({ type: VideoTypes.SAVE_VIDEO, payload: { url: route.params.url, nome: route.params.nome, users: { nome: route.params.users.nome }, position: position.positionMillis }})
                navigation.goBack()
            }}/>
            <Video resizeMode="cover" ref={ref} source={{ uri: route.params.url }} style={styles.video} shouldPlay={true} useNativeControls={true} />
            <View style={styles.infoVideo}>
                <View style={styles.ownerImage}>
                    {
                        route.params.users.foto_url === "" ?
                            <Image source={require("../../../images/withoutlogin.png")} style={{ width: "100%", position: "relative", height: "100%", borderRadius: 50 }}/>
                        :
                            <Image source={{
                                uri: route.params.users.foto_url
                            }} style={{ width: "100%", position: "relative", height: "100%", borderRadius: 50 }}/>
                    }
                    <Image style={styles.img} source={{
                        uri: route.params.users.foto_url
                    }}/>
                </View>
                <View>
                    <Text style={styles.title}>{route.params.nome}</Text>
                    <Text style={styles.ownerName}>{route.params.users.nome} - {route.params.visualizacoes} visualizaçôes</Text>
                </View>
            </View>
        </View>
    );
}
