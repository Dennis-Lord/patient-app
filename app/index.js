import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabIndex from './tabIndex';
import Authentication from './screens/auth/Authentication';
import StatusEffect from './screens/StatusEffect';

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions= {{headerShown: false}} initialRouteName='/'>
            <Stack.Screen name="/" component={StatusEffect} />
            <Stack.Screen name="auth" component={Authentication} />
            <Stack.Screen name="main" component={TabIndex} />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default Index;