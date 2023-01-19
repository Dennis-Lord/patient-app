import React from 'react';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import MainScreen from './screens/Main';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions= {{headerShown: false}}>
    //     <Stack.Screen name="Index" component={MainScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MainScreen />
  )
};

export default Index;