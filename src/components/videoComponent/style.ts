import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    video: {
        height: 236,
        flexDirection: "column",
    },
    videoComponent: {
        width: Dimensions.get("window").width - 20,
        height: 180,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    videoInfos: {
        paddingHorizontal: 10,
        color: "white",
        display: "flex",
        flexDirection: "row"
    },
    ownerImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "rgb(153, 153, 153)",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white"
    },
    ownerName: {
        color: "white",
    },
});

export default styles
