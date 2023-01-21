import React from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TabIndex from './tabIndex';
// screen imports
import SponsorsScreen from './screens/tab/Sponsors';
import SettingsScreen from './screens/tab/Settings';
import MainScreen from './screens/tab/Main';
import ProfileScreen from './screens/tab/Profile';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={TabIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Index;