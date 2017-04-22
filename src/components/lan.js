import React ,{Component } from 'react';

import { ScrollView, Linking ,View,Image } from 'react-native';
import {  Text ,List, ListItem } from 'react-native-elements';

// Make a component
class lan extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:'#4682b4'}}>
           <List>
          <ListItem
            title="Chinese(中文)"
            hideChevron
          />
          <ListItem
            title="Thai（ไทย）"
            hideChevron
          />
          <ListItem
            title="Japanese（日本の）"
            hideChevron
          />
          <ListItem
            title="Korean (한국의)"
            hideChevron
          />
          <ListItem
            title="Turkish（Türk）"
            hideChevron
          />
          <ListItem
            title="Vietnamese（tiếng việt）"
            hideChevron
          />
          <ListItem
            title="Russian（русский）"
          hideChevron
          />
          <ListItem
            title="Malayanian（Bahasa Malaysia）"
          hideChevron
          />
          <ListItem
            title="Icelandic（icelandic）"
          hideChevron
          />
          <ListItem
            title="Maori（Maori）"
          hideChevron
          />
          <ListItem
            title="Nepalese（नेपाली）"
          hideChevron
          />
          <ListItem
            title="Spanish（idioma español）"
          hideChevron
          />
          <ListItem
            title="Lithuanian（Lietuvos）"
          hideChevron
          />
          <ListItem
            title="Czech（český）"
          hideChevron
          />
          <ListItem
            title="Javanese（Jawa）"
          hideChevron
          /> 
          <ListItem
            title="Greek（ελληνικά）"
          hideChevron
          />
           <ListItem
            title="Latin（Latine）"
          hideChevron
          />
         <ListItem
            title="German（Deutsch）"
          hideChevron
          />
        </List>


      </ScrollView>
    );
  }
};
export default lan;
