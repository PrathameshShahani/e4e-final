import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class GrammarCard extends React.Component{
  render(){
    return(
      <TouchableOpacity style={styles.container}
        onPress={()=>this.props.navigation.navigate('GrammarDetail',{grammar:this.props.grammar})}
      >
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.grammar.title}</Text>
        </View>
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:RFValue(10),
   justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:RFValue(300),
    height:RFValue(150),
    borderRadius:RFValue(20),
    shadowColor:'rgb(0,0,0)',
    shadowOffset:{
      width:RFValue(3),
      height:RFValue(3)
    },
    shadowOpacity:RFValue(0.5),
    shadowRadius:RFValue(5),
    elevation:RFValue(2)
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    alignContent:'center'
    
  },
  titleText:{
    fontSize:RFValue(20),
    fontWeight:'bold',
    textAlign:'center',
    alignItems:'center',
  }
})