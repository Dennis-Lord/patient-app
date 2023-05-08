import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'
import { optionsObject, fontColor, iconColor, wrapper, pallete } from '../../templates/template'
import { signOut } from "firebase/auth";
import { auth } from '../../../firebaseConfig'

const SettingsScreen = ({navigation}) => {

  // handle user's log out session
  const LogOut = async () => {
    await signOut(auth).then(() => {
      // Sign-out successful.
      return
    }).catch((error) => {
      // An error happened.
      const err = error;
      return
    });
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20}]}>
        <HeroFont text={'Settings'} tc={fontColor.w}/>
      </View>
      <View style={[styles.optionsContainer, wrapper.bw]}>
          {optionsObject.map(({iconName, option, r}) =>
          <View style={{marginVertical: 10}} key={option}> 
            <TouchableOpacity onPress={() => navigation.navigate(r, {option})}>
              <OptionsCard mic={pallete.darkG} tc={pallete.darkG} iconName={iconName} option={option} s={24} o={'a'}/>
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
    backgroundColor: pallete.greenB
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: pallete.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  br: {
    height: 60,
  },
})

export default SettingsScreen
