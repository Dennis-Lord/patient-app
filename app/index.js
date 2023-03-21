import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabIndex from './tabIndex';
import Authentication from './screens/auth/Authentication';

const Stack = createNativeStackNavigator();

const Index = () => {
  // track user log in session

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions= {{headerShown: false}}>
  //       <Stack.Screen name="TabIndex" component={TabIndex} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
};

export default Index;