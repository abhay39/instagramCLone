import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/instalogo.png')}/>
      </TouchableOpacity>
      
      <View style={styles.itemContainer}>

      <TouchableOpacity>
          <Image source={require('../../assets/plus.png')} 
          style={styles.icons}/>
          
        </TouchableOpacity>


      <TouchableOpacity>
          <Image source={require('../../assets/like.png')} 
          style={styles.icons}/>
        </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}></Text>
        </View>
          <Image source={require('../../assets/message.png')} 
          style={styles.icons}/>
        </TouchableOpacity>    

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      marginHorizontal:20,
  },

  text:{
      color: 'white',
      marginLeft:20,
      marginTop:20,
      fontSize:20,
      fontWeight: 'bold'
  },
  logo:{
      width:150,
      height:100,
      borderWidth:5,
      resizeMode:'contain',
  },
  itemContainer:{
    flexDirection:'row',
  },
  icons:{
    marginBottom:-5,
    width:60,
    height:50,
  },
  unreadBadge:{
    backgroundColor:'#FF3250',
    position:'absolute',
    left:20,
    bottom:25,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
  },
  unreadBadgeText:{
      color:'white',
      fontWeight:'600',
  }
})
export default Header;
