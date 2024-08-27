import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Dashboard from "../Screen/Dashboard";
import Search from "../Screen/Search";
import { Image } from "react-native";
import AddPost from "../Screen/AddPost";
import Reel from "../Screen/Reel";
import UserProfile from "../Screen/UserProfile";
import { useSelector } from "react-redux";


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {

    const themeData = useSelector((state) => state.theme.theme);
    return (
        <Tab.Navigator
            screenOptions=
            {{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor:themeData === 'light' ? "#fff" :'#000',
                    borderTopColor:themeData === 'light'? '#dcdcdc' : '#333'
                }
            }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: 24, width: 24 ,tintColor:themeData === 'light' ?'#000': '#fff'}}
                        source={focused ? require('../Assets/homeButtonIcon.png') : require('../Assets/homeIconImage.png')} />
                )
            }} />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 24, width: 24 ,tintColor:themeData === 'light' ?'#000': '#fff'}}
                            source={focused ? require('../Assets/SearchiconImage.png') : require('../Assets/SearchImage.png')} />
                    )

                }} />
            <Tab.Screen name="AddPost" component={AddPost}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 24, width: 24, tintColor:themeData === 'light' ?'#000': '#fff'}}
                            source={focused ? require('../Assets/AddPostIcon.png') : require('../Assets/PostImage.png')} />
                    )

                }} />
            <Tab.Screen name="Reel" component={Reel}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 24, width: 24,tintColor:themeData === 'light' ?'#000': '#fff' }}
                            source={focused ? require('../Assets/IconReel.png') : require('../Assets/ReelIcon.png')} />
                    )

                }} />
            <Tab.Screen name="UserProfile" component={UserProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 40, width: 40,tintColor:themeData === 'light' ?'#000': '#fff' }}
                            source={focused ? require('../Assets/userProfileImage.png') : require('../Assets/ImageProfile.png')} />
                    )

                }} />
        </Tab.Navigator>
    )

}
export default BottomNavigation;