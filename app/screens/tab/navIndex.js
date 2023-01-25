import React from 'react';

// navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import MainScreen from './Main';
import ListScreen from './sub/ListScreen';
import MedicalFile from './sub/MedicalFile';
import Analysis from './sub/Analysis';
import Referrals from './sub/Referrals';

const Stack = createNativeStackNavigator();


const NavIndex = () => {
  return (
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="Index" component={MainScreen} />
        <Stack.Screen name="Analysis" component={Analysis} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="MedicalHistory" component={MedicalFile} />
        <Stack.Screen name="Referrals" component={Referrals} />
      </Stack.Navigator>
  )
};

export default NavIndex;