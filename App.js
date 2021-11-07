import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DictionaryScreen from './screens/DictionaryScreen';
import GrammarScreen from './screens/GrammarScreen';
import PhonemesScreen from './screens/PhonemesScreen';
import GrammarDetail from './screens/GrammarDetailScreen';

const Stack=createStackNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Dictionary' component={DictionaryScreen}/>
          <Stack.Screen name='Phonemes' component={PhonemesScreen}/>
          <Stack.Screen name='Grammar' component={GrammarScreen}/>
          <Stack.Screen name='GrammarDetail' component={GrammarDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
//adding info about each screen using an 'i' button