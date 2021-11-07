import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

export default class PhonicSoundButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pressedButtonIndex:''
    }
  }
  playSound=async(soundChunk)=>{
    var soundLink='https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3'
    await Audio.Sound.createAsync(
      {uri:soundLink},
      {shouldPlay:true}
    )
  }
  render(){
    return(
      <TouchableOpacity 
      style={
        this.props.buttonIndex===this.state.pressedButtonIndex
         ?[styles.chunkbutton,{backgroundColor:'#FFFF64'}]
         :[styles.chunkbutton,{backgroundColor:'#7109AA'}]
      }
      onPress={()=>{
        this.setState({pressedButtonIndex:this.props.buttonIndex})
        this.playSound(this.props.soundChunk)
      }}
      >
        <Text style={
          this.props.buttonIndex===this.state.pressedButtonIndex
          ?[styles.displayText,{color:'#7109AA'}]
          :[styles.displayText,{color:'white'}]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    )
  }
}
const styles=StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color:'white'
  },
  chunkbutton:{
    width:'60%',
    height:50,
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'purple',
    margin:10,
    borderRadius:10,
  }
})