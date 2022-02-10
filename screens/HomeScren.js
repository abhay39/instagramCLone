import { View, Text, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';

const HomeScren = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Components */}
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index)=>(
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    Stories:{
      width:35,
      height:35,
      borderRadius:50,
      marginLeft:8,
      borderWidth:1.5,
      borderColor:'#ff8501',
    },
})

export default HomeScren;

