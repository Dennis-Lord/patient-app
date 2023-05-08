import { StatusBar } from 'expo-status-bar';
import Index from './app/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pallete } from './app/templates/template';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

export default function App() {
  const [c, setC] = useState(false)
  try{
    onAuthStateChanged(auth, (user) => {
        if(user) {
          setC(true)
        }else {
          setC(false)
        }
      })
  }catch(e) {
    setC(false)
  }
  return (
    <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <StatusBar backgroundColor={c  === true ? pallete.greenB : pallete.white}/>
      <Index/>
    </SafeAreaView>
  )
}
