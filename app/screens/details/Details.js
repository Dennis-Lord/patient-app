import React, {useState} from "react"
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { wrapper, iconColor, fontColor } from "../../templates/template"
import { HeroFont, MiniFont, MediumFont, LightFont } from "../../components/Font-components"
import { MaterialIcons } from '@expo/vector-icons';
import {auth} from '../../../firebaseConfig'
import { deleteUser } from 'firebase/auth'

const DetailsScreen = ({route}) => {
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

    const {option} = route.params
  
    return (
      
      <View style={styles.screenView}>
        <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={option} tc={fontColor.w}/>
        </View>
        <View style={[wrapper.bw, styles.wrapper]}>
          <View style={styles.container}>
            {
              option === 'Privacy policy' ?
              <MiniFont text={'the policy'} />
              : option === 'About us'?
              <MiniFont text={'the about'} />
              : option === 'Help' ?
              <MiniFont text={'the help'} />
              : option === 'Account' ?
              <View style={styles.screen}>
              {
                error.e ? 
                <LightFont text={error.m}/>
                :
                <></>
              }
                <View style={styles.profile} />
                  <LightFont text={'Name'} tc={iconColor.bg}/>
                  <LightFont text={userProfile.name}/>
                  <View style={styles.h}/>
                  <LightFont text={'Email'} tc={iconColor.bg}/>
                <View style={styles.emailWrapper}>
                  <MaterialIcons name={'verified'} size={24} color={iconColor.bg} />
                  <View style={styles.w}/>
                  <LightFont text={userProfile.email}/>
                </View>
                <TouchableOpacity style={{width: 180, height: 38, borderRadius: 10, marginTop: 40}}>
                  <View style={styles.deleteBtn}>
                    <MediumFont text={'Delete account'} tc={fontColor.w}/>
                  </View>
                </TouchableOpacity>
              </View>
              :
              <MiniFont text={'the faq'} />
            }
          </View>
        </View>
      </View>
    )
  }
  
const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    display: 'flex',
    backgroundColor: iconColor.gbgd,
  },
    wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: fontColor.w,
    paddingTop: 10,
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: 'gray',
    marginBottom: 12,
  },
  deleteBtn: {
    flexGrow: 1,
    backgroundColor: fontColor.r,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailWrapper: {
    width: '90%',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row'
  },
  w: {
    width: 14
  },
  h: {
    height: 10
  }
})

export default DetailsScreen
