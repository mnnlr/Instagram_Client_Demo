import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, Image, StatusBar, Dimensions } from "react-native";
import SearchBox from "../Component/SearchBox";
import SearchContent from "../Component/SearchContent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = () => {
    const [image, setImage] = useState(null);

    const getData = data => {
        setImage(data);
    }


 
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <SearchBox />
                <SearchContent data={getData} />
                <Pressable style={styles.plusCircleContainer}>
                    <Image source={require('../Assets/PlusCircle.png')} style={styles.plusCircleImage} />
                </Pressable>
            </ScrollView>
            {
                image ?
                    (
                        <View style={styles.firstContainer}>
                            <StatusBar style={styles.statusBarContainer}/>
                            <View style={styles.secondContainer}>
                                <View style={styles.imageContainer}>
                                    <Image source={image} style={styles.imageData}/>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.dataText}>the_anonymous_guy</Text>
                                        </View>
                                    </View>
                                    <Image source={image} style={styles.imageData}/>
                            </View>
                        </View>
                    ) : null
            }
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'relative'
    },
    plusCircleImage: {
        width: 30,
        height: 30,

    },
    plusCircleContainer: {
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusBarContainer:{
        backgroundColor:'#525252',
        barStyle:'dark-content'
    },
    secondContainer:{
        position:'absolute',
        top:windowHeight/6,
        left:windowWidth/10,
        backgroundColor:'white',
        width:350,
        height:465,
        borderRadius:15,
        zIndex:1,
        elevation:50
    },
    firstContainer:{
        position:'absolute',
        zIndex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(52,52,52,52,0.8)'
    },
    imageData:{
        width:30,
        height:30,
        borderRadius:100
    },
    imageContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:15
    },
    dataText:{
        fontSize:12,
        fontWeight:'600'
    },
    textContainer:{
        paddingLeft:8
    },
    imageData:{
        width:'100%',
        height:'80%'
    }
})