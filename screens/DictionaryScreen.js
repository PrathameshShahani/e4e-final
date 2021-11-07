import React,{Component} from 'react';
import {View,Text,Header,SafeAreaView,StyleSheet,Platform,Image,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class DictionaryScreen extends Component {
   constructor(){
    super()
    this.state={
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word  : "Loading...",
      lexicalCategory :'',
      definition : ""
    }
  }
  getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    return fetch (url)
    .then((data)=>{
      if(data.status===200)
      {
        return data.json()
      }
      else
      {
        return null
      }
    })
    .then((response)=>{
      var responseObject=response
      if(responseObject)
      {
        var wordData=responseObject.definitions[0]
        var definition=wordData.description
        var lexicalCategory=wordData.wordtype
        this.setState({
          "word":this.state.text,
          "definition":definition,
          "lexicalCategory":lexicalCategory
        })
      }
      else
      {
        this.setState({
          "word":this.state.text,
          "definition":"Not Found"
        })
      }
    })
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
          <Image source={require('../assets/dicticon.png')} style={{width:RFValue(100),height:RFValue(100)}}/>
        </View>
        <View style={styles.inputBoxContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder={'Type Here...'}
            onChangeText={(text) => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: 'Loading...',
                lexicalCategory: '',
                examples: [],
                definition: '',
              });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text);
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{ fontSize: RFValue(20) }}>
            {this.state.isSearchPressed && this.state.word === 'Loading...'
              ? this.state.word
              : ''}
          </Text>
          {this.state.word !== 'Loading...' ? (
            <View style={{ justifyContent: 'center', marginLeft: RFValue(10) }}>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Word : {''}</Text>
                <Text style={styles.details}>{this.state.word}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Type : {''}</Text>
                <Text style={styles.details}>{this.state.lexicalCategory}</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Definition : {''}</Text>
                <Text style={styles.details}>{this.state.definition}</Text>
              </View>
            </View>
          ) : null}
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
  titleContainer:{
    flex:0.2,
    flexDirection:'row'
  },
  logoImage:{
    width:RFValue(80),
    height:RFValue(80),
  },
  titleText:{
    flex:0.8,
    fontSize:RFValue(40),
    fontWeight:'bold',
    textAlign:"center"
  },
  
  inputBoxContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: RFValue(50),
    textAlign: 'center',
    borderWidth: RFValue(2),
    borderRadius:RFValue(10),
    fontSize:RFValue(20)
  },
  searchButton: {
    width: '40%',
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(20),
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    alignSelf: 'center',
    
  },
  searchText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  outputContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsTitle: {
    color: '#7109AA',
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  details:{
    fontSize:RFValue(20)
  }
})