import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Analysis = () => {
  return (
    <View>
        <HeroFont text={'FBC / CBC'}/>
    </View>
  )
}

export default Analysis

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        marginTop: 40,
        display: 'flex',
        paddingHorizontal: 20,
      },
})