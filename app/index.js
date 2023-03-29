import React, { useState, useEffect, createContext, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Authentication from './screens/auth/Authentication';
import StatusEffect from './screens/StatusEffect';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import ForgotPassword from './screens/auth/ForgotPassword';

const Stack = createNativeStackNavigator();

const Index = () => {
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoading(false)
        setUser(true)
      }else {
        setLoading(false)
      }
    })
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        {
          loading ? 
          <Stack.Screen name='splash' component={StatusEffect}/>
          :
          user ? 
          <Stack.Screen name='home' component={TabNavigation} />
          :
          <>
            <Stack.Screen name='auth' component={Authentication}
            options={{ animationTypeForReplace: user ? 'pop' : 'push' }} />
            <Stack.Screen name='forgotPass' component={ForgotPassword} />
          </>
    
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Index;