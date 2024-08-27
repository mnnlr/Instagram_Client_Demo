import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, Linking, Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";


const ProfileHeader = () => {
    const [open, setOpen] = useState(false);
    const navigation = useNavigation();
    const [addPostModalVisible, setAddPostModalVisible] = useState(false);
    const themeData = useSelector((state) => state.theme.theme);


    const handleModal = () => {
        setOpen(!open);
    };

    //Logout
    const handleLogout = () => {
        Alert.alert("Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                {
                    text: 'OK', onPress: () => {
                        navigation.navigate('Login');
                    }
                },
            ]

        );
    };

    //Facebook
    const handleFacebook = () => {
        const facebookUrl = 'https://www.facebook.com/';
        Linking.openURL(facebookUrl).catch(err => console.error('Failed to open Facebook:', err));
    }

    //Whatsapp
    const handleWhatsapp = () => {
        const whatsappUrl = 'https://web.whatsapp.com/';
        Linking.openURL(whatsappUrl).catch(err => consaole.error('Failed to open Whatsapp', err));
    }

    //PrivacyCenter
    const handlePrivacyCenter = () => {
        const privacyUrl = 'https://privacycenter.instagram.com/';
        Linking.openURL(privacyUrl).catch(err => console.error('Failed to open PrivacyCenter', err));
    }

    //ThreadIcon
    const handleThreadIconPress = () => {
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.instagram.threadsapp';
        Linking.openURL(playStoreUrl).catch(err => console.error('Failed to open playstore'))
    }

    const handlePostModal = () => {
        setAddPostModalVisible(!addPostModalVisible);
    }
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <View style={[styles.mainContainer,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
                <Text style={[styles.nameText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Rutuparna Dwari</Text>
                <View style={[styles.secondContainer,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
                    <Pressable style={styles.threadConatiner} onPress={handleThreadIconPress}>
                        <Image source={require('../Assets/ThreadsIcon.png')} style={[styles.addPostImage,{tintColor:themeData==='light'?'#000':'#fff'}]} />
                    </Pressable>
                    <Pressable style={styles.postConatiner} onPress={handlePostModal}>
                        <Image style={[styles.addPostImage,{tintColor:themeData==='light'?'#000':'#fff'}]}
                            source={require('../Assets/AddPostIcon.png')} />
                    </Pressable>
                    <Pressable onPress={handleModal}>
                        <Image style={[styles.menuImage,{tintColor:themeData==='light'?'#000':'#fff'}]}
                            source={require('../Assets/Menu.png')} />
                    </Pressable>

                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={handleModal}>
                <View style={[styles.modalContainer,{ backgroundColor: themeData === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)' }]}>
                    <View style={[styles.modalContent,{ backgroundColor: themeData === 'light' ? '#fff' : '#333' }]}>
                        <Pressable onPress={handleModal} style={styles.closeButton}>
                            <Image source={require('../Assets/CloseIcon.png')} style={[styles.lineImage,{ tintColor: themeData === 'light' ? '#000' : '#fff' }]} />
                        </Pressable>
                        <View style={styles.modalOptions}>
                            <OptionItem text="Privacy Center" onPress={handlePrivacyCenter} themeData={themeData}/>
                            <OptionItem text="Close Friends" themeData={themeData}/>
                            <OptionItem text="Blocked" themeData={themeData}/>
                            <OptionItem text="Account Privacy" themeData={themeData}/>
                            <OptionItem text="Help" themeData={themeData}/>
                            <OptionItem text="About WhatsApp" onPress={handleWhatsapp} themeData={themeData}/>
                            <OptionItem text="Facebook" onPress={handleFacebook} themeData={themeData}/>
                            <OptionItem text="Logout" showArrow={false} onPress={handleLogout} themeData={themeData}/>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Add Post Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={addPostModalVisible}
                onRequestClose={handlePostModal}>
                <TouchableWithoutFeedback onPress={handlePostModal}>
                    <View style={[styles.addPostModalContainer,{ backgroundColor: themeData === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)' }]}>
                        <TouchableWithoutFeedback>
                            <View style={[styles.addPostModalContent,{ backgroundColor: themeData === 'light' ? '#fff' : 'rgba(0, 0, 0, 0.7)' }]}>
                                <Text style={[styles.createText,{color:themeData==='light'?'#000':'#fff'}]}>Create</Text>
                                <OptionData text="Reel" imageSource={require('../Assets/ReelIcon.png')}  themeData={themeData}/>
                                <OptionData text="Post" imageSource={require('../Assets/PostImage.png')}  themeData={themeData}/>
                                <OptionData text="Story" imageSource={require('../Assets/StoryIcon.png')}  themeData={themeData}/>
                                <OptionData text="Story highlight" imageSource={require('../Assets/StoryHighlightedIcon.png')} themeData={themeData}/>
                                <OptionData text="Live" imageSource={require('../Assets/LiveIcon.png')} themeData={themeData}/>


                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const OptionItem = ({ text, showArrow = true, onPress, imageSource ,themeData}) => (

    <Pressable style={styles.optionContainer} onPress={onPress}>
        <View style={styles.optionContent}>
            {imageSource && <Image source={imageSource} style={[styles.optionImage,{tintColor:themeData==='light'?'#000':'#fff'}]} />}
            <Text style={[styles.optionText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>{text}</Text>
        </View>
        {showArrow && <Image source={require('../Assets/RightArrow.png')} style={[styles.arrowImage,{tintColor:themeData==='light'?'#000':'#fff'}]} />}
    </Pressable>
);


const OptionData = ({ text, onPress, imageSource,themeData }) => (
    <Pressable style={styles.optionContainer} onPress={onPress}>
        <View style={styles.optionContent}>
            {imageSource && <Image source={imageSource} style={[styles.optionImage,{tintColor:themeData==='light'?'#000':'#fff'}]} />}
            <Text style={[styles.optionText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>{text}</Text>
        </View>
    </Pressable>
)
export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 10,
        height: 55
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000'

    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addPostImage: {
        height: 24,
        width: 24
    },
    menuImage: {
        height: 40,
        width: 40,

    },
    postConatiner: {
        marginRight: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        padding: 20,
        height: '50%',
        justifyContent: 'flex-start',
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10
    },
    lineImage: {
        width: 24,
        height: 24
    },
    modalOptions: {
        flex: 1,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    arrowImage: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    optionText: {
        fontSize: 18,
        color: '#000'
    },
    threadConatiner: {
        marginRight: 15
    },
    addPostModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',    
    },
    addPostModalContent: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 20,
        width: '100%',
    },
    createText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
        color: '#000'
    },
    optionImage: {
        width: 24,
        height: 24
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 4
    },
})


