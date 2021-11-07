import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar,Image,ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class GrammarDetail extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}/>
        <ScrollView>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logoImage}/>
         <Text style={styles.titleText}>E4E</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.textTitle}>{this.props.route.params.grammar.title}</Text>
          <Text style={styles.descriptionText}>{this.props.route.params.grammar.description}</Text>
          <Text style={styles.exampleText}>{this.props.route.params.grammar.example}</Text>
        </View>
        </ScrollView>
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
  textTitle:{
    fontSize:RFValue(25),
    fontWeight:'bold'
  },
  descriptionText:{
    fontSize:RFValue(20)
  },
  exampleText:{
    fontSize:RFValue(18)
  },
  detailContainer:{
    flex:1
  }
  
})


/* <View style={styles.contentContainer}>
          <Text>{this.props.grammar.description}</Text>
           <Text>{this.props.grammar.example}</Text>
        </View>
        */