import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, View } from 'react-native-elements';

 const Logout = () => {
 //  const { welcome,horizontal,texts,box,block } = styles;
  return (
    <ScrollView style={{ backgroundColor: '#4682b4' }}>
      <Image
          source={require('../assets/pic1.png')}
       style={{ width:200 ,height:200, top: 10,left:85 }}
        />
        <List>
          <ListItem
            title="Username :"
            hideChevron
          />
          <ListItem
            title="Password :"
            hideChevron
          />
        </List>
         <Button 
        title='LogIn' 
          onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=british+council+learn+english+kids')}
          backgroundColor='#dae6f0'
          color='#4682b4'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:20,width:140,height:30,left:17}}
        textStyle={{textAlign: 'center',fontSize:16,fontWeight:'bold'}} />
    <Button 
        title='SignUp' 
          onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=british+council+learn+english+kids')}
          backgroundColor='#dae6f0'
          color='#4682b4'
          fontSize='10'
        buttonStyle={{borderRadius:3,marginTop:-9.75,width:140,height:30,marginLeft:205}}
        textStyle={{textAlign: 'center',fontSize:16,fontWeight:'bold'}} />
    </ScrollView>
  );
};

const styles = {
    block: {
      backgroundColor: '#dae6f0',
      width: 300,
      height: 30,
      borderRadius: 10,
      top: 10,
      left: 10,
      marginTop: 10
    },
    box: {
      backgroundColor: 'white',
      width: 140,
      height: 16,
      top: 7,
      left: 150
    },
    horizontal: {
      flexDirection: 'row',
      flex: 1,
    },
    texts: {
      left: 30, 
      top: 50,
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    welcome: {
      top: 20,
      bottom: 60,
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: 'white',
    },
};
export default Logout;
