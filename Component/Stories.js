

import React from "react";
import { Image, Pressable, StyleSheet, View ,Text} from "react-native";
import { UserData } from "../Utils/UserData";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Stories = () => {

    const navigation = useNavigation();
    const themeData = useSelector((state) => state.theme.theme);

   
    return (
        <View style={styles.container}>
            {UserData.map((item, index) => {
                console.log(item, "item"); 
                return (
                    <View>
                    <Pressable key={index} style={styles.storyContainer} onPress={()=>navigation.navigate('Story',{item})}>
                        <View style={styles.storyImageContainer}>
                        <Image source={item.story.image} style={styles.storyImage} />
                        </View>
                    </Pressable>
                    <Text style={[styles.nameText,{color:themeData === 'light'?'#000':'#fff'}]}>{item.username}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default Stories;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
    },
    storyContainer: {
        margin: 5, 
    },
    storyImage: {
        width: 70,  
        height: 70, 
        borderRadius: 35,
    },
    storyImageContainer:{
        borderWidth:3,
        borderRadius:40,
        padding:2
    },
    nameText:{
        textAlign:'center'
    }
});
