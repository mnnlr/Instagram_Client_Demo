import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileHeader from "../Component/ProfileHeader";
import ProfileDetails from "../Component/ProfileDetails";
import ProfilePost from "../Component/ProfilePost";
import { useSelector } from "react-redux";


const UserProfile = () => {
    const themeData = useSelector((state) => state.theme.theme);
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <ProfileHeader/>
            <ProfileDetails/>
            <ProfilePost/>

        </View>
    )
}
export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }

})