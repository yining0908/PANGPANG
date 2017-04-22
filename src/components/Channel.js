import React ,{Component } from 'react';
import { View, Image,Text,ScrollView,Linking } from 'react-native';
import { SearchBar ,Button} from 'react-native-elements';
//import Hyperlink from 'react-native-hyperlink'

class Page extends Component {


  goToPageTwo = () => {
    this.props.navigation.navigate('Details');
  };

  render(){
    const {all,pics,left,right,horizontal,rightlast,leftlast,tit,more,rights,lefts,add,tit2} = styles;
return (
        <ScrollView>
          <SearchBar 
         lightTheme
         placeholder='Search...' />
        <View style={all}>
          <View style={horizontal}> 
          <View style={left}>
          <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics}
        source={require('../assets/bbc.jpg')}/>
        </View>
        <Text style={tit}>BBC LEARNING ENGLISH</Text>
        <Button 
        title='Learn More >' 
          onPress={() => this.goToPageTwo()}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-10,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
         <View style={right}> 
            <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/> 
        <Image style={pics}
        source={require('../assets/bcc.jpg')}/>
        </View>
        <Text style={tit}>BRITISH COUNCIL KIDS</Text>
            <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=british+council+learn+english+kids')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-10,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
         <View style={horizontal}> 
          <View style={lefts}>  
             <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics} 
        source={require('../assets/cnn.jpg')}/>
        </View>
        <Text style={tit2}>CNN CHANNEL</Text>
           <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/user/CNN')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
         <View style={rights}> 
        <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/> 
        <Image style={pics}
        source={require('../assets/de.jpg')}/>
        </View>
        <Text style={tit2}>DAILY ENGLISH</Text> 
           <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/channel/UCV1h_cBE0Drdx19qkTM0WNw')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        <View style={horizontal}> 
          <View style={lefts}>  
         <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics}
        source={require('../assets/ets.jpg')}/>
        </View>
        <Text style={tit2}>ETS TOEFL</Text>
     <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/user/TOEFLtv')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
         <View style={rights}>  
         <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics}
        source={require('../assets/rd.jpg')}/>
        </View>
        <Text style={tit2}>RA-DU ENGLISH</Text>
       <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/channel/UCeo3JwE3HezUWFdVcehQk9Q')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        <View style={horizontal}> 
          <View style={leftlast}>  
         <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics}
        source={require('../assets/voa.jpg')}/>
        </View>
        <Text style={tit2}>VOICE OF AMERICA</Text>
            <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL('https://www.youtube.com/user/VOALearningEnglish')}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
         <View style={rightlast}>  
         <View style={horizontal}> 
         <Image style={add} source={require('../assets/add.png')}/>
        <Image style={pics}
        source={require('../assets/vt.jpg')}/>
        </View>
        <Text style={tit2}>VOICETUBE</Text>
       <Button 
        title='Learn More >' 
          onPress={() => Linking.openURL("https://www.youtube.com/channel/UCa99X86NjYZzhz__nLKgPPg")}
          backgroundColor='#4682b4'
          color='#dae6f0'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:-15,width:100,height:25,left:14}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        </View>
        </ScrollView>
    );
};
  }
     
const styles =
{
all:{backgroundColor:'#4682b4',
flex:1},
pics:{
  width:130,
  height:130,
  borderRadius:63,
marginLeft:-8.5,
marginTop:10},
left:{
  width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:17,
  borderRadius:4
},
right:{
  width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:17,
  borderRadius:4
},
leftlast:{
width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:17,
  borderRadius:4,
  marginBottom:15,
},
rightlast:{
width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:19,
  borderRadius:4,
  marginBottom:15
},
lefts:{
width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:17,
  borderRadius:4
},
rights:{
width:160,
  height:230,
  backgroundColor:'#dae6f0',
  marginTop:15,
  marginLeft:19,
  borderRadius:4
},
horizontal:{
flexDirection: 'row',
 flex: 1,
},
tit:{
textAlign:'center',
fontWeight:'bold',
color:'#4682b4',
top:-18
},
tit2:{
textAlign:'center',
fontWeight:'bold',
color:'#4682b4',
top:-32
},
more:{
  top:20,
  textAlign:'right',
  fontSize:10,
  marginRight:8,
  color:'#757575',
  marginTop:16
},
add:{
  width:20,
  height:20,
  marginLeft:3,
  marginTop:3

}
};
export default Page;
