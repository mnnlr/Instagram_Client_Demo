import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { useSelector } from "react-redux";



const SearchBox = () => {
    const themeData = useSelector((state) => state.theme.theme);
    return (
        <View style={[styles.container, { backgroundColor: themeData === 'light' ? '#EBEBEB' : '#333' }]}>
            <Image source={require('../Assets/SearchiconImage.png')} style={[styles.searchIcon, { tintColor: themeData === 'light' ? '#000' : '#fff' }]} />
            <TextInput
                placeholder="Search"
                placeholderTextColor={themeData === 'light' ? '#909090' : '#b0b0b0'}
                style={[
                    styles.searchInput,
                    {
                        color: themeData === 'light' ? '#000' : '#fff',
                        backgroundColor: themeData === 'light' ? '#EBEBEB' : '#444',
                    },
                ]} />
        </View>
    )
}
export default SearchBox;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        // marginTop: 20
    },
    searchIcon: {
        width: 24,
        height: 24,
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 25
    },
    searchInput: {
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40
    }
})