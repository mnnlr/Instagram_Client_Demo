import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

const SearchContent = (props) => {
    const searchData = [
        {
            id: 0,
            images: [
                require('../Assets/post1.jpg'),
                require('../Assets/post2.jpg'),
                require('../Assets/post3.jpg'),
                require('../Assets/post10.jpg'),
                require('../Assets/post11.jpg'),
            ]
        },
        {
            id: 1,
            images: [
                require('../Assets/post4.jpg'),
                require('../Assets/post5.jpg'),
                require('../Assets/post6.jpg'),
                require('../Assets/post12.jpg'),
                require('../Assets/post13.jpg'),
            ]
        },
        {
            id: 2,
            images: [
                require('../Assets/post7.jpg'),
                require('../Assets/post8.jpg'),
                require('../Assets/post16.jpg'),
                require('../Assets/post17.jpg'),
                require('../Assets/post18.jpg'),
            ]
        }
    ];

    const themeData = useSelector((state) => state.theme.theme);

    return (
        <View style={{ backgroundColor: themeData === 'light' ? '#fff' : '#000' }}>
            {
                searchData.map((data) => {
                    return (
                        <React.Fragment key={data.id}>
                            {data.id === 0 ? (
                                <View style={styles.imageContainer}>
                                    {data.images.map((imageData, index) => (
                                        <Pressable 
                                        key={index} 
                                        style={styles.searchImageButton}
                                        onPressIn={()=>props.data(imageData)}
                                        onPressOut={()=>props.data(null)}>
                                            <Image source={imageData} style={styles.searchImage} />
                                        </Pressable>
                                    ))}
                                </View>
                            ) : null}
                            {data.id === 1 ? (
                                <View style={styles.secondImageContainer}>
                                    <View style={styles.imageContainer2}>
                                        {data.images.slice(0, 4).map((imageData, index) => (
                                            <Pressable 
                                            key={index} 
                                            style={styles.searchImageButton}
                                            onPressIn={()=>props.data(imageData)}
                                            onPressOut={()=>props.data(null)}>
                                                <Image source={imageData} style={styles.searchImage} />
                                            </Pressable>
                                        ))}
                                    </View>
                                    <Pressable 
                                    style={styles.extraImageContainer}
                                    onPressIn={()=>props.data(data.images[4])}
                                    onPressOut={()=>props.data(null)}
                                    >
                                        <Image source={data.images[4]} style={styles.imageItem} />
                                    </Pressable>
                                </View>
                            ) : null}
                            {
                                data.id === 2 ? (
                                    <View style={styles.secondImageContainer}>
                                        <Pressable 
                                        style={{paddingRight:2}}
                                        onPressIn={()=>props.data(data.images[2])}
                                        onPressOut={()=>props.data(null)}>
                                            <Image source={data.images[2]} style={{width:260,height:300}}/>
                                        </Pressable>
                                        <View style={styles.imageContainer3}>
                                            {data.images.slice(0,2).map((imageData,imageIndex)=>{
                                                return(
                                                    <Pressable 
                                                    onPressIn={()=>props.data(imageData)}
                                                    onPressOut={()=>props.data(null)}
                                                    style={{paddingBottom:2}}>
                                                        <Image source={imageData} style={{width:129,height:150}}/>
                                                    </Pressable>
                                                )
                                            })}
                                        </View>

                                    </View>

                                ) : null
                            }
                        </React.Fragment>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    searchImage: {
        width: 129,
        height: 150,
    },
    searchImageButton: {
        paddingBottom: 2,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    secondImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 261,
        justifyContent: 'space-between',
    },
    imageItem: {
        width: 120,
        height: 300,
    },
    extraImageContainer: {
        marginLeft: 2,
    },
    imageContainer3:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        width:140
    }
});

export default SearchContent;
