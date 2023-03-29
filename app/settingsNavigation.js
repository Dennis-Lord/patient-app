import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './screens/tab/Settings';
import DetailsScreen from './screens/details/Details';

const Stack = createNativeStackNavigator();

// navigation stack
const SettingsNavigation = () => {
  return (
      <Stack.Navigator initialRouteName='settings' screenOptions= {{headerShown: false}}>
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
  )
};

export default SettingsNavigation;