import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { UserData } from "../Utils/UserData";
import { useSelector } from "react-redux";

const screenwidth = Dimensions.get('window').width

const Post = () => {

    const themeData = useSelector((state) => state.theme.theme);
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            {UserData.map(item => {
                return (
                    <View style={styles.firstContainer}>
                        <View style={styles.secondContainer}>
                            <Image source={item.profile} style={styles.profileImage} />
                            <Text style={[styles.nameText,{color:themeData === 'light'? '#000':'#fff'}]}>{item.name}</Text>
                        </View>
                        <View>
                            <Image source={item.post.image} style={styles.postImage} />
                        </View>
                        <View style={styles.commentContainer}>
                            <Pressable>
                                <Image source={require('../Assets/HeartIconImage.png')} style={[styles.likeImage,{tintColor:themeData ==='light'?'#000':'#fff'}]} />
                            </Pressable>
                            <Pressable>
                                <Image source={require('../Assets/CommentImage.png')} style={[styles.commentImage,{tintColor:themeData ==='light'?'#000':'#fff'}]} />
                            </Pressable>
                            <Pressable>
                                <Image source={require('../Assets/MessangerIconImage.png')} style={[styles.messageImage,{tintColor:themeData ==='light'?'#000':'#fff'}]} />
                            </Pressable>
                        </View>
                        <Text style={[styles.likeText,{color:themeData === 'light'?'#000':'#fff'}]}>
                            {item.post.like} likes
                        </Text>
                        <View style={styles.captionContainer}>
                            <Text style={[styles.captionNameText,{color:themeData === 'light'?'#000':'#fff'}]}>{item.name} {''}</Text>
                            <Text style={[styles.captionText,{color:themeData === 'light'?'#000':'#fff'}]}>{item.post.caption}</Text>
                        </View>
                    </View>
                )
            })}

        </View>
    )
}
export default Post;


const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    firstContainer: {
        marginTop: 10
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8
    },
    nameText: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#000'

    },
    postImage: {
        height: 400,
        width: screenwidth

    },
    likeImage: {
        height: 24,
        width: 28
    },
    commentImage: {
        height: 24,
        width: 24,
        marginLeft: 15
    },
    messageImage: {
        height: 24,
        width: 24,
        marginLeft: 15
    },
    commentContainer: {
        paddingHorizontal: 13,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    likeText: {
        marginLeft: 13,
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    captionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 13,
        alignItems: 'center'
    },
    captionText: {
        color: '#000',

    },
    captionNameText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500'
    }

})
