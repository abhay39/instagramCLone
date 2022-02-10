import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { POSTS } from '../../data/posts'
import { USERS } from "../../data/User";

const postFooterIcons=[
    {
        name:'Like',
        imageUrl:'https://i.imgur.com/MA4SssT.png',
        likedImageUrl:'https://i.imgur.com/BjtUuqL.png'
    },
    {
        name:'Comment',
        imageUrl:'https://i.imgur.com/jzyd2z7.png',
    },
    {
        name:'Share',
        imageUrl:'https://i.imgur.com/jaS6WRK.png',
    },
    {
        name:'Save',
        imageUrl:'https://i.imgur.com/1iof92l.png',
    }
]

const Post = ({ post }) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal:15, marginTop:10}}>
            <PostFooter />
            <Likes post={post}/>
        </View>
    </View>
  );
};

const PostHeader = ({post})=>(
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:5, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={{uri:post.profile}} style={styles.stories} />
            <Text style={{color:'white', marginLeft:9, fontWeight:'700',fontSize:20}}>{post.user}</Text>
        </View>
        <Text style={{color:'white', fontWeight:'900', fontSize:24}}>...</Text>
    </View>
)

const PostImage =({post})=>(
    <View style={{width:'100%', height:500}}>
        <Image source={{uri:post.imageUrl}} style={{width:'100%',height:'100%', resizeMode:'cover'}} />
    </View>
)

const PostFooter =()=>(
    <View style={{flexDirection:'row'}}>
        <View style={styles.leftFooterItemContainer}> 
            <Icon imgStyle={styles.footerIcons} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcons} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcons} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
            <Icon imgStyle={styles.footerIcons} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
)

const Icon =({imgStyle, imgUrl})=>(
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes =({post})=>(
    <Text style={{color:'white'}}>
        {post.likes}
    </Text>
)
const styles = StyleSheet.create({
    text:{
        color:'white',
    },
    stories:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:8,
        borderWidth:3,
        borderColor:'#ff8501',
    },
    footerIcons:{
        width:33,
        height:33,
    },
     
    leftFooterItemContainer:{
        flexDirection:'row',
        width:'32%',
        justifyContent:'space-between',

    },
    shareIcon:{

    }
});

export default Post;

