import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont } from '../../components/Font-components'
import h_db from '../../templates/dbTemplate'

const MainScreen = ({navigation}) => {
  const {medical_files} = h_db.medical_folder;
  const {analysis_files} = h_db.medical_folder;
  const {referrals} = h_db.medical_folder;
  

  const routeprops = {
    route: 'ListScreen',
    r_props: {
      title: 'Medical history',
      sub_route: 'MedicalFile',
      data: medical_files,
    },
  }
  const routeprops_a = {
    route: 'ListScreen',
    r_props: {
      title: 'Analysis',
      sub_route: 'Analysis',
      data: analysis_files,
    },
  }
  const routeprops_b = {
    route: 'ListScreen',
    r_props: {
      title: 'Referrals',
      sub_route: 'Referrals',
      data: referrals,
    },
  }
  const routeprops_c = {
    route: 'Documents',
    r_props: {
      title: 'Documents',
      sub_route: 'Documents',
      data: ['a', 'b', 'c'],
    },
  }
  return (
    <View style={screenstyle.screenView}>
      <View style={screenstyle.heroPos}>
        <HeroFont text={'Meddocs'}/>
      </View>
      <View>
      <MainCard />
      </View>
      <View style={screenstyle.container}>
        <NavCard cardText={'Medical history'} nav={navigation} routeProps={routeprops}/>
        <NavCard cardText={'Analysis'} nav={navigation} routeProps={routeprops_a}/>
        <View style={screenstyle.flexContainer}>
        <NavCard_s cardText={'Documents'} nav={navigation} routeProps={routeprops_c}/>
        <NavCard_s cardText={'Referrals'} nav={navigation} routeProps={routeprops_b} />
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