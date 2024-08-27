

import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate('Login')
        },7000);
        return () => clearTimeout(timer);
    },[navigation])
    return (
        <View style={styles.container}>
            <FastImage
                source={require('../Assets/InstagramImageGif.gif')}
                style={styles.image}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',  
    },
    image: {
        resizeMode:'cover',
        width: windowWidth,   
        height: windowHeight,  
    }
});
