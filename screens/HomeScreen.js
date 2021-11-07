import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Platform,StatusBar,Image,SafeAreaView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class HomeScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}/>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logoImage}/>
         <Text style={styles.titleText}>E4E</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={()=>this.props.navigation.navigate('Dictionary')}>
            <Image source={require('../assets/dicticon.png')} style={styles.iconImage}/>
            <Text style={styles.buttonText}>Dictionary</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={()=>this.props.navigation.navigate('Phonemes')}>
            <Image source={require('../assets/phoneicon.png')} style={styles.iconImage}/>
            <Text style={styles.buttonText}>Phonemes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={()=>this.props.navigation.navigate('Grammar')}>
            <Image source={require('../assets/gramicon.jpg')} style={styles.iconImage}/>
            <Text style={styles.buttonText}>Grammar</Text>
          </TouchableOpacity>

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
  logoImage:{
    width:RFValue(80),
    height:RFValue(80),
  },
  titleContainer:{
    flex:0.2,
    flexDirection:'row'
  },
  button:{
    flex:0.3,
    marginLeft:RFValue(15),
    marginRight:RFValue(15),
    marginBottom:RFValue(50),
    backgroundColor:'white',
    borderRadius:RFValue(50),
    alignItems:'center',
    flexDirection:"row"
  },
  buttonContainer:{
    flex:RFValue(0.8),
  },
  buttonText:{
    textAlign:"center",
    fontSize:RFValue(25),
    paddingLeft:RFValue(10)
  },
  iconImage:{
    width:RFValue(70),
    height:RFValue(70),
    margin:RFValue(20)
  }
})