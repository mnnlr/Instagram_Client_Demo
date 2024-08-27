import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AppColor } from "../Utils/AppColor";
import { useSelector } from "react-redux";


const CustomButton = ({ buttonTitle,onPress,disabled }) => {

    const theme = useSelector((state)=>state.theme.theme);
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                disabled={disabled}
                style={({ pressed }) => [
                    styles.buttonContainer,
                    {
                        // backgroundColor: disabled ? AppColor.DISABLE_BUTTON : AppColor.BUTTON,
                        // opacity: pressed ? 0.8 : 1,
                        backgroundColor: disabled
                        ? theme === 'light' ? '#cccccc' : '#444444' 
                        : theme === 'light' ? '#008080' : '#00FFFF', 
                    opacity: pressed ? 0.8 : 1,
                    }
                ]}
            >
                <View style={styles.buttonContainer}>
                  <Text style={[styles.buttonText,{color:theme === 'light'?'#fff':'#000'}]}>
                    {buttonTitle}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer:{
        width:350,
        // backgroundColor:disabled ? AppColor.DISABLE_BUTTON : AppColor.BUTTON,
        borderRadius:10,
        // marginTop:15
    },
    buttonText:{
        color:'#fff',
        paddingVertical:10,
        textAlign:'center',
        fontSize:15,
        fontWeight:'500'
    }
})