import React from 'react';

// navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import MainScreen from './Main';
import ListScreen from './sub/ListScreen';
import MedicalFile from './sub/MedicalFile';
import Analysis from './sub/Analysis';
import Referrals from './sub/Referrals';
import Documents from './sub/Documents';

const Stack = createNativeStackNavigator();

// navigation stack
const NavIndex = () => {
  return (
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={MainScreen} />
        <Stack.Screen name="Analysis" component={Analysis} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="MedicalFile" component={MedicalFile} />
        <Stack.Screen name="Referrals" component={Referrals} />
        <Stack.Screen name="Documents" component={Documents} />
      </Stack.Navigator>
  )
};

export default NavIndex;