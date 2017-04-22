import React,{ Component} from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Setting extends Component {


  goToPageTwo = () => {
    this.props.navigation.navigate('lan');
  };

  render(){
 return (
      <ScrollView style={{backgroundColor:'#4682b4'}}>
        <List>
          <ListItem
            leftIcon={{name: 'color-lens'}}
            title="Color Of Theme"
          />
          <ListItem
          leftIcon={{name:'translate'}}
            title="Language"
               onPress={() => this.goToPageTwo()}
          />
          <ListItem
          leftIcon={{name:'people'}}
            title="Invite Friends"
          />
          <ListItem
          leftIcon={{name:'history'}}
            title="History"
          />
        </List>

        <List>
          <ListItem
          leftIcon={{name:'notifications'}}
            title="Notification"
          />
          <ListItem
            leftIcon={{name:'description'}}
            title="Policy"
          />
           <ListItem
            leftIcon={{name:'apps'}}
            title="Ver"
            rightTitle="1.5.1"
            hideChevron
          />
        </List>
      </ScrollView>
  );
};
  }
export default Setting;
