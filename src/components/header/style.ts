import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "#272727",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
        
    },
    headerInput: {
        width: 150,
        padding: 2,
        backgroundColor: "#333333",
        borderColor: "rgb(175, 175, 175)",
        borderWidth: 1,
        marginLeft: 15,
        color: "white"
    },
    loginImage: {
        width: 30,
        height: 30,
        backgroundColor: "rgb(153, 153, 153)",
        marginRight: 15,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
});

export default styles
