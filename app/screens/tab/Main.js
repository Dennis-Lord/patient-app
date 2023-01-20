import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont } from '../../components/Font-components'

const MainScreen = () => {
  return (
    <View style={screenstyle.screenView}>
      <View style={screenstyle.heroPos}>
        <HeroFont text={'Meddocs'}/>
      </View>
      <MainCard />
      <View style={screenstyle.container}>
        <NavCard cardText={'Medical history'}/>
        <NavCard cardText={'Analysis'}/>
        <View style={screenstyle.flexContainer}>
        <NavCard_s cardText={'Documents'}/>
        <NavCard_s cardText={'Referrals'}/>
        </View>
      </View>
    </View>
  )
}

const screenstyle = StyleSheet.create({
  screenView: {
    flex: 1,
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
  },
  heroPos: {
    marginTop: 6,
    marginBottom: 18,
    position: 'relative',
    right: '30%',
  },
  container: {
    width: '100%',
    display: 'flex',
    marginTop: 22,
    padding: 18,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: '#707070',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  }
})

export default MainScreen