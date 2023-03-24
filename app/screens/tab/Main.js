import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont } from '../../components/Font-components'
import { iconColor, fontColor, wrapper } from '../../templates/template'


// test@gmail.com Test123

// main screen of the application
const MainScreen = ({navigation}) => {

  let propObject = {
    folder: {
      route: 'ListScreen',
      title: 'Medical history',
      subRoute: 'MedicalFile',
    },
    analysis: {
      route: 'ListScreen',
      title: 'Analysis',
      subRoute: 'Analysis',
    },
    referrals: {
      route: 'ListScreen',
      title: 'Referrals',
      subRoute: 'Referrals',
    },
    documents: {
      route: 'Documents',
      title: 'Documents',
    }
  }

  return (
    <View style={screenstyle.screenView}>
      <View style={[wrapper.heroPos, {position: 'relative', right: '30%',}]}>
        <HeroFont text={'Meddocs'} tc={fontColor.w}/>
      </View>
      <View>
      <MainCard />
      </View>
      <View style={[screenstyle.container, wrapper.bw]}>
        <NavCard cardText={'Medical history'} nav={navigation} routeProps={propObject.folder}/>
        <NavCard cardText={'Analysis'} nav={navigation} routeProps={propObject.analysis}/>
        <View style={screenstyle.flexContainer}>
        <NavCard_s cardText={'Documents'} nav={navigation} routeProps={propObject.documents}/>
        <NavCard_s cardText={'Referrals'} nav={navigation} routeProps={propObject.referrals} />
        </View>
      </View>
    </View>
  )
}

const screenstyle = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: iconColor.gbgd
  },
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    marginTop: 20,
    padding: 20,
    flexDirection: 'column',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  }
})

export default MainScreen