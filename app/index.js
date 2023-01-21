import React from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import SettingsScreen from './screens/tab/Settings';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Index;