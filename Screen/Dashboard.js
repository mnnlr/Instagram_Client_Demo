import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Header from "../Component/Header";
import Stories from "../Component/Stories";
import Post from "../Component/Post";
import { useSelector } from "react-redux";



const Dashboard = () => {

    const themeData = useSelector((state) => state.theme.theme);
    return (
        <ScrollView style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <Header />
            <Stories />
            <Post />

        </ScrollView>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        bottom:2
    }
})