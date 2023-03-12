import React from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TabIndex from './tabIndex';
// screen imports
import Authentication from './screens/auth/Authentication';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Index;