import React, { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import InputBox from "./Component/InputBox";
import CustomButton from "./Component/CustomButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screen/LoginScreen";
import SignupScreen from "./Screen/SignupScreen";
import Header from "./Component/Header";
import Dashboard from "./Screen/Dashboard";
import StoryView from "./Component/StoryView";
import BottomNavigation from "./Navigation/BottomNavigation";
import { Provider } from "react-redux";
import { Store } from "./Redux/store";
import ThemeListener from "./Utils/ThemeListener";
import SplashScreen from "./Component/SplashScreen";





const App = () => {
  const Stack = createNativeStackNavigator();

  // useEffect(()=>{
  //   if(Platform.OS === 'android'){
  //     SplashScreen.hide();
  //   }
  // },[])
  return (
    <Provider store={Store}>
      <ThemeListener>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="Story" component={StoryView} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={BottomNavigation} options={{headerShown:false}}/>
       

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeListener>
    </Provider>
  )
}
export default App;