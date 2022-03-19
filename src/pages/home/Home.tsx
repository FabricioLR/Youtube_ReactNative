import { View, FlatList, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './homeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { VideosTypes, Video} from "../../storage/ducks/videos/types"
import VideoComponent from "../../components/videoComponent/VideoComponent"
import Header from '../../components/header/Header';
import { Video as video, VideoTypes } from "../../storage/ducks/video/types"
import { Video as VideoC } from "expo-av"
import Icon from "react-native-vector-icons/AntDesign"
import IconF from "react-native-vector-icons/Fontisto"
import { StatusBar } from 'react-native';

interface StateProps {
    videos: {
        data: Video[]
    }
	video: {
		data: video
	}
}

type VideoProps = {
    item: {
		id: number
        url: string
        nome: string
        visualizacoes: number
        users: {
            nome: string
            foto_url: string
        }
    }
}

type HomeProps = {
	navigation: any
}

export default function Home({ navigation }: HomeProps) {
	const state = useSelector<StateProps>(state => state) as StateProps
	const [loading, setLoading] = useState(true)
	const [titleSearch, setTitleSearch] = useState("")
	const ref = useRef<any>(null)
	const dispatch = useDispatch()

	console.log(state)

	useEffect(() => {
		dispatch({ type: VideosTypes.LOAD_REQUEST })
	}, [])

	useEffect(() => {
		if (state.video.data){
			ref.current.playFromPositionAsync(state.video.data.position)
		}
	}, [state])

	const renderVideo = ({ item }: VideoProps) => (
		<VideoComponent
			id={item.id}
			nome={item.nome}
			url={item.url}
			users={item.users}
			visualizacoes={item.visualizacoes}
			navigation={navigation}
			setLoading={setLoading}
		/>
	)
	
	return (
		<View style={styles.home}>
			<StatusBar barStyle="light-content" networkActivityIndicatorVisible={true}/>
			<Header navigation={navigation} setTitle={setTitleSearch}/>
			<View style={styles.videos}>
				{
					state.videos.data.length > 0 ? 
						<FlatList 
							data={state.videos.data}
							renderItem={renderVideo}
							keyExtractor={video => String(video.id)}
						/>
					:
					null
				}
			</View>
			{
				state.video.data ? 
					<View style={styles.miniVideo}>
						<VideoC source={{
							uri: state.video.data.url
						}} style={styles.video} shouldPlay={false} ref={ref} />
						<View>
							<Text style={styles.videoTitle}>{state.video.data.nome}</Text>
							<Text style={styles.videoOwnerName}>{state.video.data.users.nome}</Text>
						</View>
						<View style={styles.icons}>
							{
								loading ? 
									<Icon name="pause" size={25} style={{...styles.iconPauseReturn, marginRight: 17}} onPress={() => {
										setLoading(false)
										ref.current.pauseAsync()
									}}/>
								:
									<IconF name="play" size={16} style={styles.iconPauseReturn} onPress={() => {
										setLoading(true)
										ref.current.playAsync()
									}}/>
							}
							<Icon name="close" size={25} style={styles.iconExit} onPress={() => {
								ref.current.pauseAsync()
								dispatch({ type: VideoTypes.REMOVE_VIDEO })
							}}/>
						</View>
					</View>
				:
					null
			}
		</View>
    );
}