import React from "react";
import { StyleSheet, TextInput, View,Text } from "react-native";
import { useSelector } from "react-redux";


const InputBox = ({
    placeholder,
    onChangeText,
    onBlur,
    value,
    secureTextEntry,
    keyboardType,
    maxLength,
    errors,
    placeholderTextColor
}) => {

    const themeData = useSelector((state) => state.theme.theme);
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput,{color:themeData==='light'?'#000':'#fff'}]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholderTextColor={placeholderTextColor} />
                {errors && <Text style={styles.errorText}>{errors}</Text>}
        </View>
    )
}
export default InputBox;


const styles = StyleSheet.create({
    container: {
        height: 78,
        // marginBottom: 20,
        // alignItems: 'center',
        // justifyContent: 'center'

    },
    textInput: {
        borderWidth: 1,
        width: 350,
        borderColor: 'grey',
        borderRadius: 5,
        paddingHorizontal: 10,
        
    },
    errorText:{
        color:'red',
        fontSize:12,
        paddingLeft:5
    }
})