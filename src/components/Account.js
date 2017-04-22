import React, { Component } from 'react';
import { ScrollView , Image,Linking, StyleSheet,} from 'react-native';
import { List, ListItem,Button,Icon  } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Me extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }
    goToPageTwo = () => {
    this.props.navigation.navigate('Change');
  };
    goToPageThree = () => {
    this.props.navigation.navigate('Logout');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor:'#4682b4'}}> 
        <Image
        source={require('../assets/pic.png')}
        style={{left:60,top:10}}

        />
       <List>
          <ListItem
            title="Change Your Photo"
            onPress={() => this.goToPageTwo()}
          />
        </List>
        <List>
          <ListItem
            title="Username"
            rightTitle={this.state.me.uname}
            //hideChevron
          />
          <ListItem
            title="My Target"
            rightTitle={this.state.me.target}
            //hideChevron
          />
          <ListItem
            title="Where Are You From"
            rightTitle={this.state.me.ucity}
            //hideChevron
          />
        </List>
        <List>
          <ListItem
          leftIcon={{name:'phone'}}
            title="Call Us"
            rightTitle={this.state.me.phone}
            hideChevron
          />
          <ListItem
          leftIcon={{name:'email'}}
            title="Mail Us"
            rightTitle={this.state.me.mail}
            hideChevron

          />
        </List>
        <Button
        onPress={() => this.goToPageThree()}
        backgroundColor='#dae6f0'
        buttonStyle={{borderRadius: 10,top:20}}
        textStyle={{textAlign: 'center'}}
        title="LogOut"
        color='#4682b4'
        marginTop='20'
        />
      </ScrollView>
    );
  }
}

export default Me;
