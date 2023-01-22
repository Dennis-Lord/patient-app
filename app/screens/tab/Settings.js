import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// component imports
import { HeroFont, SemiFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'

// template imports
import { optionsObject } from '../../templates/template'

const SettingsScreen = () => {
  return (
    <View style={styles.screenView}>
      <HeroFont text={"Settings"}/>
      <View style={styles.optionsContainer}>
        {optionsObject.map(({iconName, option}) => <OptionsCard key={option} iconName={iconName} option={option} s={24} o={'a'}/>)}
      </View>
      <View style={styles.br}/>
      <OptionsCard iconName={"logout"} option={"Log out"} s={24} o={'a'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    marginTop: 40,
    display: 'flex',
    paddingHorizontal: 20,
  },
  optionsContainer: {
    height: 210,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  br: {
    height: 60,
  },
})

export default SettingsScreen
