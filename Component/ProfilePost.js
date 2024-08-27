import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { typeData, UserData } from "../Utils/UserData";
import { useSelector } from "react-redux";


const ProfilePost = () => {


    const themeData = useSelector((state) => state.theme.theme);
    const [selected, setSelected] = useState(1);
    console.log(selected, "selected")


    const renderItem = (item)=>{
return(
    <View style={{backgroundColor:themeData === 'light'?'#fff':'#000'}}>
        <Image source={item.item.post.image} style={styles.postImage}/>
    </View>
)
    }
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                {typeData.map(item => {
                    return (
                        <View
                            key={item.id}
                            style={[
                                styles.secondContainer,
                                { borderBottomWidth: selected === item.id? 1 : 0 }
                            ]}
                        >
                            <Pressable style={styles.gridButton} onPress={() => setSelected(item.id)}>
                                <Image source={item.image} style={[styles.gridImage,{tintColor:themeData === 'light'?'#000':'#fff' }]} />
                            </Pressable>
                        </View>

                    )
                })}
            </View>
           {selected == 1 && (
            <FlatList
            data={UserData}
            renderItem={renderItem}
            keyExtractor={item =>item.id.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}/>
           )}
        </View>
    )
}
export default ProfilePost;


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secondContainer: {
        width: 200,
        paddingBottom: 15,

    },
    gridImage: {
        tintColor: '#000',
        alignSelf: 'center',
        width: 30,
        height: 30
    },
   postImage:{
    height:138,
    width:138,
    borderColor:'#000',
    borderWidth:1,
    // marginBottom:5
   }

})