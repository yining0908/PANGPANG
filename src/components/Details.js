import React ,{Component } from 'react';

import { ScrollView, Linking ,View,Image } from 'react-native';
import { Button, Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
class Details extends Component {
  render() {
    const {card,back,title,logo,tex,bunny,title2,horizontal,icon1,icon2 } = styles;
    return (
      <ScrollView style={back}>
      <View style={card}> 
        <Image style={logo} source={require('../assets/bbcle.jpg')}/>
        <Text style={title}>ABOUT US</Text>
        <Text style={tex}>SHARE, LEARN, AND ENJOY ENGLISH WITH THE BBC!
At BBC Learning English we produce topical multimedia content for people 
all over the world who want to speak English for fun, work, or study. Here you can interact with members of the team and find 
 out about different programmes and content we have produced with you in mind.</Text>
             <Text style={title2}>DAILY</Text>
              <Image style={bunny} source={require('../assets/rab.jpg')}/>
           <View style={horizontal}>
              <Image style={icon1} source={require('../assets/yt.png')}/>
             <Button 
        title='Youtube >' 
          onPress={() => Linking.openURL('https://www.youtube.com/user/bbclearningenglish')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:24,width:90,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
         <Image style={icon2} source={require('../assets/fb.png')}/>
             <Button 
        title='Facebook >' 
          onPress={() => Linking.openURL('https://www.facebook.com/bbclearningenglish.multimedia/?fref=ts')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:24,width:90,height:25,left:19}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
           </View>

      </ScrollView>
    );
  }
};
const styles = {
  back:{
    backgroundColor:'#4682b4'
  },
  card:{
    backgroundColor:'#dae6f0',
    width:330,
    height:515,
    borderRadius:10,
    top:20,
    left:22
  },
  logo:
  {
    width:300,
    left:15,
    top:15,
    borderRadius:5
  },
   title:{
     color:'#4682b4',
     fontSize:20,
     marginTop:20,
     fontWeight:'bold',
     textAlign:'center'
   },
   tex:{
        textAlign:'center',
         color:'#588ebb',
   },
   bunny:{
       width:300,
       height:170,
    left:15,
    top:5,
    borderRadius:5
   },
    title2:{
     color:'#4682b4',
     fontSize:20,
     marginTop:5,
     fontWeight:'bold',
     textAlign:'center'
   },
   horizontal:{
     flexDirection: 'row',
 flex: 1,
   },
   icon1:{
left:19,
top:20
   },
icon2:{
left:24,
top:20
   }
}

export default Details;
