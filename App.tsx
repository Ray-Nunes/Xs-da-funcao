/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/HomeScreen';
import TelaInicio from './src/screens/TelaInicial';

import { enableScreens } from "react-native-screens";
import { RootStackParamList } from './src/navigation/navigation';
enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TelaInicio" component={TelaInicio} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
