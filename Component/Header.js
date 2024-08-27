import React from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";



const Header = () => {

    const themeData = useSelector((state) => state.theme.theme);
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <View>
                <Image source={require('../Assets/InstagramNameImage.png')} style={[styles.instagramImage,{tintColor:themeData==='light'?'#000':'#fff'}]} />
            </View>
            <View style={styles.secondContainer}>
                <Pressable style={styles.heartButton}>
                    <Image source={require('../Assets/HeartIconImage.png')} style={[styles.heartIcon,{tintColor:themeData==='light'?'#000':'#fff'}]} />
                </Pressable>
                <Pressable>
                    <View style={styles.messangerContainer}>
                        <Image source={require('../Assets/MessangerIconImage.png')} style={[styles.messangerIcon,{tintColor:themeData==='light'?'#000':'#fff'}]} />
                        <View style={styles.countTextContainer}>
                            <Text style={styles.countText}>
                                5
                            </Text>
                        </View>
                    </View>
                </Pressable>

            </View>
        </View>
    )
}
export default Header;


const styles = StyleSheet.create({
    instagramImage: {
        height: 40,
        width: 115
    },
    heartIcon: {
        height: 30,
        width: 30
    },
    messangerIcon: {
        height: 30,
        width: 30
    },
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50
    },
    secondContainer: {
        flexDirection: 'row'
    },
    heartButton: {
        marginRight: 15
    },
    messangerContainer: {
        position: 'relative'
    },
    countTextContainer: {
        position: 'absolute',
        bottom:15,
        left:15
    },
    countText:{
       backgroundColor:'red',
       paddingHorizontal:5,
       borderRadius:10
    }
})