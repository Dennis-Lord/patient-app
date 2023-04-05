import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'
import { wrapper, iconColor, fontColor } from '../../../templates/template'

const Documents = () => {
  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={'Documents'} tc={fontColor.w}/>
        </View>
        <View style={[styles.wrapper, wrapper.bw]}>
          
        </View>
    </View>
  )
}

export default Documents

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: iconColor.gbgd
      },
      wrapper: {
        flex: 1,
        paddingHorizontal: 20,
      }
})