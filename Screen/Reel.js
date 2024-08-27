import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import ReelsComponent from "./ReelsComponent";




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Reel = () => {


    return (
        <View style={styles.container}>
            <View style={styles.reelContainer}>
                <Text style={styles.reelText}>Reels</Text>
                <Image source={require('../Assets/CameraIcon.png')} style={styles.cameraImage} />
            </View>
            <ReelsComponent />
        </View>
    )
}
export default Reel;


const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#000',
        position: 'relative'
    },
    reelContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10
    },
    cameraImage: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    },
    reelText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }

})