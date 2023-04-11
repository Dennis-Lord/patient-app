import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fontColor } from '../../templates/template'
import { auth } from '../../../firebaseConfig'
import { deleteUser } from 'firebase/auth'
import { LightFont, MiniFont } from '../../components/Font-components'
import MaterialCommunityIcons from '@expo/vector-icons'

const Account = () => {
  const [loading, setLoading] = useState({s: true, m: ''})
  const [error, setError] = useState({e: false, m: ''})
  const user = auth.currentUser;
  const userProfile = {
    name: user.displayName,
    email: user.email,
    verified: user.emailVerified,
    photo: user.photoURL
  }

  const DeleteAccount = () => {
    deleteUser(user).then(() => {
      return
    }).catch((error) => {
      setError({e: true, m: error.message})
    });
  }

  return (
    <View style={styles.screen}>
      {
        error.e ? 
        <LightFont text={error.m}/>
        :
        <></>
      }
      <View style={styles.profile} />
        <MiniFont text={'Name'}/>
        <LightFont text={userProfile.name}/>
        <View style={styles.h} />
        <MiniFont text={'Email'}/>
      <View style={styles.emailWrapper}>
        <MaterialCommunityIcons name={'verified'} size={24} color={fontColor.g} />
        <View style={styles.w}/>
        <LightFont text={userProfile.email}/>
      </View>
      <TouchableOpacity onPress={() => DeleteAccount()}>
        <View style={styles.deleteBtn}>
          <LightFont text={'Delete account'} tc={fontColor.w}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: fontColor.w,
    paddingTop: 50
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginVertical: 14,
  },
  deleteBtn: {
    width: 60,
    height: 30,
    backgroundColor: fontColor.r,
    borderRadius: 10
  },
  emailWrapper: {
    width: '90%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  w: {
    width: 6
  },
  h: {
    height: 6
  }
})

export default Account;
