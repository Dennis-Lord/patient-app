import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'
import { wrapper } from '../../templates/template'
import { optionsObject, fontColor, iconColor } from '../../templates/template'
import { getAuth, signOut } from "firebase/auth";


const SettingsScreen = () => {

  // handle user's log out session
  const LogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('logged out')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20}]}>
        <HeroFont text={'Settings'} tc={fontColor.w}/>
      </View>
      <View style={[styles.optionsContainer, wrapper.bw]}>
        
          {optionsObject.map(({iconName, option}) =>
          <View style={{marginVertical: 10}} key={option}> 
            <TouchableOpacity>
              <OptionsCard iconName={iconName} option={option} s={24} o={'a'}/>
            </TouchableOpacity>
          </View>
          )}
      <View style={styles.br}/>
      <TouchableOpacity onPress={() => LogOut()}>
        <OptionsCard iconName={"logout"} option={"Log out"} s={24} o={'a'}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: iconColor.gbgd
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: fontColor.w,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  br: {
    height: 60,
  },
})

export default SettingsScreen
