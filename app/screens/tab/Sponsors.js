import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SponsorsScreen = () => {
  return (
    <View style={styles.screenView}>
      <HeroFont text={"Sponsors"}/>
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
}) 

export default SponsorsScreen
