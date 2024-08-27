import { Formik } from "formik";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert } from "react-native";
import { loginInitialValue, loginValidationSchema } from "./Utils";
import InputBox from "../Component/InputBox";
import CustomButton from "../Component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { colors } from "react-native-swiper-flatlist/src/themes";


const LoginScreen = () => {

    const navigation = useNavigation();
    const themeData = useSelector((state) => state.theme.theme);
    console.log(themeData, "Current themeData");
    
    const handleLogin = () => {
       Alert.alert('Login Sucessfully')
       navigation.navigate('Dashboard')
    
    }

    // const handleLogin = values =>{
    //     Alert.alert('Login Sucessfully')
    //     console.log(values.username,"values")
       
    // }

    const handleSignup = ()=>{
        navigation.navigate('Signup')
    }
    return (
        <View style={[styles.container, {backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <View style={styles.instagramContainer}>
                <Image source={require('../Assets/InstagramNameImage.png')} style={[styles.instaName,{tintColor:themeData==='light'?'#000':'#fff'}]} />
                <Formik
                    initialValues={loginInitialValue}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                        touched,
                    }) => {
                        return (
                            <View>
                                <InputBox
                                    placeholder={'UserName'}
                                    placeholderTextColor={themeData === 'light' ?'#000':'#fff'}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    errors={touched.username && errors.username} />
                                <InputBox
                                    placeholder={'Password'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    errors={touched.password && errors.password}
                                    secureTextEntry={true}
                                    placeholderTextColor={themeData === 'light' ?'#000':'#fff'}/>
                                <CustomButton
                                    buttonTitle={"Login"}
                                    onPress={handleLogin}
                                    />
                            </View>
                        )
                    }}

                </Formik>
            </View>
            <View style={styles.signupContainer}>
                <Text style={[styles.accountText,{color:themeData ==='light' ?'#000':'#fff'}]}>
                    Don't have an account?
                    </Text>
                <Pressable onPress={handleSignup}>
                <Text style={[styles.signupText,{color:themeData==='light'?'#000':'#fff'}]}>
                    Sign up
                </Text>
                </Pressable>
            </View>

        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    instagramContainer: {
        flex: 0.8,
        paddingTop: 25,
        justifyContent: 'center'
    },
    instaName: {
        width: 125,
        height: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    signupContainer: {
        flexDirection: 'row',
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    signupText:{
        color:'008080',
        fontSize:15,
        fontWeight:'500',
        paddingHorizontal:5
    },
    accountText:{
        fontSize:15,
        color:'#000'
    }
})
