import React from "react"
import { StyleSheet, View } from 'react-native'
import { wrapper, iconColor, fontColor } from "../../templates/template"
import { HeroFont, MiniFont } from "../../components/Font-components"

const DetailsScreen = ({route}) => {
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
})

export default DetailsScreen
