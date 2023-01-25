import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'

const Documents = ({route}) => {
  const h_title = route.params.dataObject.title
  return (
    <View style={styles.screenView}>
      <HeroFont text={h_title}/>
    </View>
  )
}

export default Documents

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,
      },
})