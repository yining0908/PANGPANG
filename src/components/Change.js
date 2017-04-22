import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile } from 'react-native-elements';

 const Change = () => {
    return (
      <ScrollView style={{ backgroundColor: '#4682b4' }}>
        <Image
          source={require('../assets/pic2.png')}
          style={{ left: 60, top: 10 }}
        />
        <List>
          <ListItem
            title="Album"
          />
          <ListItem
            title="Use Cemera"
          />
          <ListItem
            title="Delete"
          />
        </List>
      </ScrollView>
    );
  };

export default Change;