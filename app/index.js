import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabIndex from './tabIndex';
import Authentication from './screens/auth/Authentication';
import StatusEffect from './screens/StatusEffect';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import MainScreen from './screens/tab/Main';

const Stack = createNativeStackNavigator();

const Index = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })

      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions= {{headerShown: false}}>
            {
              user ? 
              <Stack.Screen name='signIn' component={TabIndex}/>
              :
              <>
                <Stack.Screen name='auth' component={Authentication}/>
                <Stack.Screen name='status' component={StatusEffect}/>
              </>
            }
          </Stack.Navigator>
        </NavigationContainer>
      )
};

export default Index;