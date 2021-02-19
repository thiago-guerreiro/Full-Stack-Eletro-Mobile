import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Principal from './src/screens/Principal';
import Cadastro from './src/screens/Cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Principal" component={Principal} options={{headerShown:false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={specificStyle.safe}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const specificStyle = StyleSheet.create({
  safe: {
    flex: 1,
  },
})