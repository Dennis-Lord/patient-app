import { StyleSheet,SafeAreaView, View, Text } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <SafeAreaView>
      <View >
        <Text className={fontstyle.fonts}>MainScreen</Text>
      </View>
    </SafeAreaView>
  )
}

const fontstyle = StyleSheet.create( {
  fonts: {
    fontSize: 30,
    fontWeight: 600,
  }
})

export default MainScreen