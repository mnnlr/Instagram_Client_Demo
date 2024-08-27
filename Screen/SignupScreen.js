import { Formik } from "formik";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert } from "react-native";
import { loginInitialValue, loginValidationSchema } from "./Utils";
import InputBox from "../Component/InputBox";
import CustomButton from "../Component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";


const SignupScreen = () => {

    const navigation = useNavigation();
    const themeData = useSelector((state) => state.theme.theme);
    console.log(themeData, "Current themeData");


    const handleSignup = () => {
        Alert.alert("Signup Successfully, Please Login");

    }


    const handleLogin = ()=>{
        navigation.navigate('Login')
    }
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <View style={styles.instagramContainer}>
                <Image source={require('../Assets/InstagramNameImage.png')} style={[styles.instaName,{tintColor:themeData==='light'?'#000':'#fff'}]} />
                <Formik
                    initialValues={loginInitialValue}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleSignup}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                        touched


                    }) => {
                        return (
                            <View>
                                <InputBox
                                    placeholder={'MobileNumber'}
                                    placeholderTextColor={themeData ==='light'?'#000':'#fff'}
                                    onChangeText={handleChange('mobilenumber')}
                                    onBlur={handleBlur("mobilenumber")}
                                    value={values.mobilenumber}
                                    errors={touched.mobilenumber && errors.mobilenumber} 
                                    keyboardType={'numeric'}
                                    maxLength={10}/>
                                    <InputBox
                                    placeholder={"FullName"}
                                    placeholderTextColor={themeData === 'light'?'#000':'#fff'}
                                    onChangeText={handleChange('fullname')}
                                    onBlur={handleBlur('fullname')}
                                    value={values.fullname}
                                    errors={touched.fullname && errors.fullname}/>
                                <InputBox
                                    placeholder={'UserName'}
                                    placeholderTextColor={themeData === 'light'?'#000':'#fff'}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    errors={touched.username && errors.username} />
                                <InputBox
                                    placeholder={'Password'}
                                    placeholderTextColor={themeData === 'light'?'#000':'#fff'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    errors={touched.password && errors.password}
                                    secureTextEntry={true} />
                                <CustomButton
                                    buttonTitle={"SignUp"}
                                    onPress={handleSignup} 
                                    disabled={!isValid}/>
                            </View>
                        )
                    }}

                </Formik>
            </View>
            <View style={styles.signupContainer}>
                <Text style={[styles.accountText,{color:themeData==='light'?'#000':'#fff'}]}>Have an account?</Text>
                <Pressable onPress={handleLogin}>
                    <Text style={[styles.signupText,{color:themeData==='light'?'#000':'#fff'}]}>Login</Text>
                </Pressable>
            </View>

        </View>
    )
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    instagramContainer: {
        // flex: 0.8,
        paddingTop: 50,
        justifyContent: 'center',
     
    },
    instaName: {
        width: 125,
        height: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    signupContainer: {
        flexDirection: 'row',
        // flex: 0.2,
        justifyContent: 'flex-end',
        marginTop:120
     
    },
    signupText: {
        color: '008080',
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal:5
    },
    accountText: {
        fontSize: 15,
        color: '#000'
    }
})
