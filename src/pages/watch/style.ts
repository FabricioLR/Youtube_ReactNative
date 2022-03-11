import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    watch: {
        backgroundColor: "#333",
        height: "100%",
        zIndex: 100
    },
    video: {
        backgroundColor: "white",
        height: 200
    },
    infoVideo: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    ownerImage: {
        width: 35,
        height: 35,
        backgroundColor: "white",
        borderRadius: 50,
        marginRight: 10
    },
    img: {
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: 50
    },
    title: {
        color: "whitesmoke",
        fontSize: 18
    },
    ownerName: {
        color: "whitesmoke"
    },
    exit: {
        position: "absolute",
        padding: 8,
        zIndex: 1,
        color: "#333"
    }
});

export default styles
