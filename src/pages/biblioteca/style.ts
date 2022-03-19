import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    biblioteca: {
        height: "100%",
        backgroundColor: "#333"
    },
    recents: {
        height: 170,
        borderBottomColor: "rgb(96, 96, 96)",
        borderBottomWidth: 1
    },
    recentsTitle: {
        color: "white",
        paddingTop: 5,
        paddingLeft: 10
    },
    video: {
        width: "100%",
        height: 90
    },
    historicVideo: {
        marginHorizontal: 10,
        marginVertical: 10,
        zIndex: 1000,
        width: 150,
        height: 120
    },
    historic: {
        zIndex: 1000000,
    },
    title: {
        color: "white",
        fontSize: 16
    },
    ownerName: {
        color: "white",
        fontSize: 12
    }
});

export default styles
