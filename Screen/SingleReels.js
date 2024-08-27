import React, { useRef, useState, useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View, Image } from "react-native";
import Video from "react-native-video";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleReels = ({ item, index, currentIndex }) => {

    const videoRef = useRef(null);
    // const [videoKey, setVideoKey] = useState(Date.now());

    const onBuffer = buffer => {
        console.log('Buffering', buffer)
    }

    const onError = error => {
        console.log("error", error)
    }
    const [mute, setMute] = useState(false);

    const [like, setLike] = useState(false);

    const handleLikePress = ()=>{
        setLike(!like);
    }

    return (
        <View style={styles.container}>
            <Pressable
                activeOpacity={0.9}
                onPress={() => setMute(!mute)}
                style={styles.videoContainer}>
                <Video
                    key={index}
                    ref={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    paused={currentIndex !== index}
                    muted={mute}
                    source={{ uri: item.video }}
                    style={styles.videoData} />
            </Pressable>
            <View style={styles.secondContainer}>
                <Pressable style={{ padding: 10 }} onPress={handleLikePress}>
                    <Image source={like ? require('../Assets/LoveIcon.png') : require('../Assets/HeartIconImage.png')} 
                     style={[styles.heartIconImage, { tintColor: like ? 'red' : '#fff' }]}/>
                </Pressable>
                <Pressable style={{ padding: 10 }} >
                    <Image source={require('../Assets/CommentImage.png')}
                     style={styles.heartIconImage}/>
                </Pressable>
                <Pressable style={{ padding: 10 }} >
                    <Image source={require('../Assets/MessangerIconImage.png')}
                     style={styles.heartIconImage}/>
                </Pressable>
                <Pressable style={{ padding: 10 }} >
                    <Image source={require('../Assets/MoreVerticalImage.png')}
                     style={styles.heartIconImage}/>
                </Pressable>
            </View>
        </View>
    )
}
export default SingleReels;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        position: 'relative'
    },
    videoData: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },

    secondContainer: {
        position: 'absolute',
        bottom: 100,
        right: 0,
        alignItems: 'center',
        flexDirection: 'column'
    },
    heartIconImage: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    }
})


