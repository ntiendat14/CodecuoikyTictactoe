import React, { Component } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Game5x5 from './components/Game5x5';
import Game from './components/Game';


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Tab />
      </NavigationContainer>
    );
  }
}

function Tab5x5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Game5x5 />
      <Button
        title="3x3 Screen" onPress={() => navigation.navigate('3x3')}/>
    </View>
  );
}

function Tab3x3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
    <Game />
      <Button
        title="5x5 Screen" onPress={() => navigation.navigate('5x5')}/>
    </View>
  );
}

const Stack = createStackNavigator();

function Tab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="3x3" component={Tab3x3} />
      <Stack.Screen name="5x5" component={Tab5x5} />
   </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});