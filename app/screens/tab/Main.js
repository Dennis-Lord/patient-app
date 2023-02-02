import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont } from '../../components/Font-components'
import h_db from '../../templates/dbTemplate'
import { iconColor, fontColor, wrapper } from '../../templates/template'

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
      <View style={[wrapper.heroPos, {position: 'relative', right: '30%',}]}>
        <HeroFont text={'Meddocs'} tc={fontColor.w}/>
      </View>
      <View>
      <MainCard />
      </View>
      <View style={[screenstyle.container, wrapper.bw]}>
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