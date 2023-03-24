import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontColor } from '../templates/template'
import { SemiBoldFont } from '../components/Font-components'
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const StatusEffect = ({navigation}) => {
  const [txt, setTxt] = useState('Please wait...')

  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        // setLoggedin(true);
        return navigation.navigate('signIn');
      } else {
        return navigation.navigate('auth');
      } 
    }, (err) => {
      console.log(err)
      setTxt('No internet connection')
    })
  }

  // 
  useEffect(() => {
    observeAuthState()
  })

  return (
    <View style={styles.screenView}>
      <TouchableOpacity onPress={() => observeAuthState()}>
      <SemiBoldFont text={txt} tc={fontColor.s}/>
      </TouchableOpacity>
    </View>
  )
}

export default StatusEffect

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        paddingTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fontColor.w
      },
})