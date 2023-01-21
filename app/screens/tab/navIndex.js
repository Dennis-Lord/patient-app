import React from 'react';

// navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import MainScreen from './Main';
import ListScreen from './sub/ListScreen';

const Stack = createNativeStackNavigator();

const NavIndex = () => {
  return (
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={MainScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
  )
};

export default NavIndex;