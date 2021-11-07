import React,{Component} from 'react';
import {View,Text,Header,SafeAreaView,StyleSheet,Platform,Image,StatusBar,FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import GrammarCard from './GrammarCard'

let grammars = require ('./Grammar.json')


export default class GrammarScreen extends Component {
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item:grammar})=>{
    return(
      <GrammarCard grammar={grammar} navigation={this.props.navigation}/>
    )
  }
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}/>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logoImage}/>
         <Text style={styles.titleText}>E4E</Text>
        </View>
        <View style={styles.grammarCard}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={grammars}
            renderItem={this.renderItem}
          />
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
  grammarCard:{
    flex:0.85
  }
})