import React, {useState} from "react"
import { StyleSheet, View } from 'react-native'
import { wrapper, iconColor, fontColor } from "../../templates/template"
import { HeroFont, MiniFont } from "../../components/Font-components"
import Account from "./AccountDetails"

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

export default DetailsScreen
