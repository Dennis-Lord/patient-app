import React from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import ProfileScreen from './screens/tab/Profile';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Index;