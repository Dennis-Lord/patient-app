import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MainCard } from '../components/Card-components'

const MainScreen = () => {
  return (
    <View style={screenstyle.screenView}>
      <MainCard />
    </View>
  )
}

const screenstyle = StyleSheet.create({
  screenView: {
    flex: 1,
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default MainScreen