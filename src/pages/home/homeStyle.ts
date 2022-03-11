import { StyleSheet } from "react-native";
import { Dimensions } from "react-native"

const styles = StyleSheet.create({
    home: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#333"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    videos: {
        height: Dimensions.get("window").height - 40
    },
    miniVideo: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "#272727",
        alignItems: "center",
        justifyContent: "space-between",
       // position: 'absolute',
       // zIndex: 1000,
    },
    video: {
        width: 130,
        height: 50
    },
    videoTitle: {
        color: "whitesmoke",
        fontSize: 15
    },
    videoOwnerName: {
        color: "whitesmoke",
        fontSize: 11
    },
    icons: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconExit: {
        marginRight: 10,
        color: "white"
    },
    iconPauseReturn: {
        color: "white",
        marginRight: 10,
        width: 25
    }
})

export default styles