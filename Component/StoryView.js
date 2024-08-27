import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width

const StoryView = ({ route }) => {
    console.log(route.params)

    const selectedIem = route.params.item;
    const navigation = useNavigation();
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const storyTime = currentHour - selectedIem.story.time;

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            navigation.goBack();
        },10000)
    },[])
  
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={selectedIem.profile} style={styles.profileImage} />
                <Text style={styles.profileName}>{selectedIem.name}</Text>
                <Text style={styles.time}>{storyTime} Hr</Text>
            </View>
            <View style={styles.mainContainer}>
                <Image source={selectedIem.story.image} style={styles.storyImage}/>
                <View style={styles.secondContainer}>
                    <TextInput 
                    style={styles.inputContainer}
                    placeholder="Message"
                    placeholderTextColor={'#fff'}/>
                    <Pressable>
                    <Image source={require('../Assets/MessangerIconImage.png')} style={styles.messangerIcon}/>
                    </Pressable>

                </View>
            </View>

        </View>

    )
}
export default StoryView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000'

    },
    imageContainer: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingLeft: 12,
        alignItems: 'center',
        position:'relative',
        zIndex:1
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10
    },
    profileName:{
        fontSize:18,
        fontWeight:'700',
        color:'#fff'
    },
    time:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:10,
        color:'#fff'
    },
    mainContainer:{
        position:'absolute'
    },
    storyImage:{
        height:screenHeight -80,
        width:screenWidth,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    secondContainer:{
        flexDirection:'row',
        marginTop:15,
        alignItems:'center',
       
    },
    inputContainer:{
        borderWidth:1,
        borderColor:'#fff',
        width:300,
        paddingHorizontal:10,
        borderRadius:30,
        marginHorizontal:30,
        color:'#fff'

    },
    messangerIcon:{
        tintColor:'#fff',
        width:30,
        height:30,
        marginRight:10
    }

})