import React, { Component } from 'react';
import { ScrollView,View,Image,Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

//import me from '../json/me.json';

// Make a component

 // state = { me: [] };

 // componentWillMount() {
  //  this.setState({ me });
  //}
 
 class Me extends Component { 
  render() {   
  const {block,pics,horizontal,two,one,three,four,heart} = styles;
    return (
      <ScrollView style={{backgroundColor:'#4682b4'}}> 
    <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/rd.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.24( Monday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.03 ( Monday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
         <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/cnn.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.22( Saturday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.12 ( Wednesday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
       <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/voa.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.19( Friday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.15 ( Saturday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
       <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/bbc.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.15( Saturday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.10 ( Monday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
       <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/vt.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.15( Friday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.09 ( Sunday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
       <View style={block}> 
     <View style={horizontal}> 
      <Image style={pics}
        source={require('../assets/de.jpg')}/>
        <Text style={one}>Last Update:</Text>
         </View>
        <Text style={two}>  2017.04.12( Wednesday )</Text>
        <Text style={three}>Last Seen:</Text>
        <Text style={four}>  2017.04.06 ( Thurssday )</Text>
        <Image  style={heart}
        source={require('../assets/heart.png')}/>
        </View>
</ScrollView>
    );
  }
}
const styles =
{
block:{
  backgroundColor:'#dae6f0',
  width:350,
  height:100,
  borderRadius:10,
  top:10,
  left:10,
  marginTop:10
},
pics:{
width:90,
height:90,
borderRadius:5,
top:5,
left:10
},
horizontal:{
flexDirection: 'row',
 flex: 1,
},
one:{left:20,top:10,color:'#4682b4',fontSize:16,fontWeight:'bold'},

two:{
  left:110,
  top:8,
  width:160,color:'#588ebb',fontSize:12},

three:{left:110,
top:13,
width:160,color:'#4682b4',fontSize:16,fontWeight:'bold'},

four:{
  left:110,
  top:15,
  width:160,color:'#588ebb',fontSize:12},


heart:{
  left:315,
  height:24,
  width:24,
  bottom:10
}
}
export default Me;
