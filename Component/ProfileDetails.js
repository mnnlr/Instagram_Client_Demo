import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
    const [profilePic, setProfilePic] = useState(require('../Assets/ProfileIconImage.png'));
    const [modalVisible, setModalVisible] = useState(false);
    const themeData = useSelector((state) => state.theme.theme);

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                setProfilePic({ uri: response.assets[0].uri });
            }
        });
        setModalVisible(false);
    };


    const openCamera = () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                setProfilePic({ uri: response.assets[0].uri });
            }
        });
        setModalVisible(false);
    };


    const handleEditProfile = () => {
        setModalVisible(true);
    }
    return (
        <View style={[styles.container,{backgroundColor:themeData === 'light'?'#fff':'#000'}]}>
            <View style={styles.profileContainer}>
                <Image source={profilePic} style={styles.profileIcon} />
                <View style={styles.postContainer}>
                    <Text style={[styles.postCountText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>4</Text>
                    <Text style={[styles.postText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Posts</Text>
                </View>
                <View style={styles.postContainer}>
                    <Text style={[styles.postCountText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>1.2 M</Text>
                    <Text style={[styles.postText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Followers</Text>
                </View>
                <View style={styles.postContainer}>
                    <Text style={[styles.postCountText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>10</Text>
                    <Text style={[styles.postText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Following</Text>
                </View>
            </View>
            <Text style={[styles.profileName,{ color: themeData === 'light' ? '#000' : '#fff' }]}>its_Rutuparna</Text>
            <Text style={[styles.hobbyText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>React Native</Text>
            <Text style={[styles.hobbyText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Music Lover</Text>
            <Text style={[styles.hobbyText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Travelling</Text>
            <View style={styles.editProfileContainer}>
                <Pressable onPress={handleEditProfile}>
                    <Text style={styles.editProfileText}>Edit Profile</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.editProfileText}>Share Profile</Text>
                </Pressable>
            </View>
            {/* Modal for selecting image source */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View style={[styles.modalContainer,{ backgroundColor: themeData === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)' }]}>
                    <View style={[styles.modalContent,{ backgroundColor: themeData === 'light' ? '#fff' : '#333' }]}>
                        <Pressable style={styles.modalButton} onPress={selectImage}>
                            <Text style={styles.modalButtonText}>Choose From Gallery</Text>
                        </Pressable>
                        <Pressable style={styles.modalButton} onPress={openCamera}>
                            <Text style={styles.modalButtonText}>Take Photo</Text>
                        </Pressable>
                        <Pressable style={styles.modalbutton} onPress={() => setModalVisible(false)}>
                            <Text style={[styles.modalButtonText,{ color: themeData === 'light' ? '#000' : '#fff' }]}>Cancel</Text>
                        </Pressable>

                    </View>

                </View>
            </Modal>
        </View>

    )
}
export default ProfileDetails;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileIcon: {
        height: 80,
        width: 80,
        borderRadius: 4
    },
    postContainer: {
        width: 75,
        alignItems: 'center'
    },
    postCountText: {
        fontSize: 24,
        fontWeight: '400',
        color: '#000'
    },
    postText: {
        fontSize: 16,
        color: '#000'
    },
    profileName: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500',
        marginTop: 10
    },
    hobbyText: {
        color: '#000',
        fontSize: 15
    },
    editProfileContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    editProfileText: {
        backgroundColor: '#E1E1E1',
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: '#000'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalButton: {
        marginVertical: 10,
        width: '100%',
        padding: 15,
        backgroundColor: '#E1E1E1',
        borderRadius: 5,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 16,
        color: '#000',
    }

})