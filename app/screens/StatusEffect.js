import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontColor } from '../templates/template'
import { SemiBoldFont } from '../components/Font-components'
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const StatusEffect = ({navigation}) => {
  const [txt, setTxt] = useState('Please wait...')

  // 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        return navigation.navigate('main')
      } else {
        return navigation.navigate('auth')
      }
    }, (err) => {
      console.log(err)
      setTxt('No internet connection')
    })
  })

  return (
    <View style={styles.screenView}>
      <SemiBoldFont text={txt} tc={fontColor.s}/>
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