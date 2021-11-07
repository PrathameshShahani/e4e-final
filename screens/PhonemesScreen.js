import React,{Component} from 'react';
import {View,Text,Header,SafeAreaView,StyleSheet,Platform,Image,StatusBar,TextInput,TouchableOpacity,Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import PhonicSoundButton from '../components/PhonicSoundButton';
import db from '../localdb';
export default class PhonemesScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds:[]
    };
  }
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}/>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logoImage}/>
         <Text style={styles.titleText}>E4E</Text>
        </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/phoneicon.png')} style={{width:RFValue(100),height:RFValue(100)}}/>
        </View>
        <View>
        <Text style={{fontSize:RFValue(20),textAlign:'center'}}>Learn how to break a word and pronounce!!</Text>
          <TextInput
          style={styles.inputBox}
          placeholder={'Type Here...'}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word=this.state.text.toLowerCase().trim()
            db [word]?(
              this.setState({ chunks: db[word].chunks }),
              this.setState({phonicSounds:db[word].phones})
            ):
            Alert.alert("The Word dosent exist in our Database")
            
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index)=>{
            return(
              <PhonicSoundButton wordChunk={this.state.chunks[index]} soundChunk={this.state.phonicSounds[index]} buttonIndex={index}/>
            )
          })}
        </View>
        </View>
        </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFD300'
  },
  safeArea:{
    marginTop:Platform.OS==='android'?StatusBar.currentheight:0
  },
  titleText:{
    flex:0.8,
    fontSize:RFValue(40),
    fontWeight:'bold',
    textAlign:"center"
  },
  titleContainer:{
    flex:0.2,
    flexDirection:'row'
  },
  logoImage:{
    width:RFValue(80),
    height:RFValue(80),
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: RFValue(50),
    textAlign: 'center',
    borderWidth: RFValue(2),
    borderRadius:RFValue(10),
    fontSize:RFValue(20),
    marginTop:RFValue(20)
  },
  goButton: {
    width: '40%',
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(20),
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    alignSelf: 'center',
    },
  buttonText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
})