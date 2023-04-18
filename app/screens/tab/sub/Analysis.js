import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeroFont, MediumFont } from '../../../components/Font-components'
import { AnalysisDetailsCard, InvestigationCard } from '../../../components/Card-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { iconColor, wrapper, fontColor } from '../../../templates/template';


const Analysis = ({route}) => {
  const analysis = route.params.dataFile;
  const location = analysis.ref

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={analysis.analysisName} tc={fontColor.w}/>
      </View>
        <View style={[styles.divWrapper, wrapper.bw]}>
          <View style={styles.headerContainer}>
              <MediumFont text={'Blood test'}/>
              <View style={styles.cardContainer}>
                  <AnalysisDetailsCard label={'Date'} value={analysis.date} icon={'calendar'} option={'a'}/>
                  <AnalysisDetailsCard label={'Result'} value={analysis.result} icon={'check-circle'} option={'a'}/>
              </View>
          </View>
          <View style={styles.headerContainer}>
              <MediumFont text={'Clinic / Laboratory'}/>
              <View style={styles.cardContainer}>
                  <AnalysisDetailsCard label={analysis.lab.name} value={analysis.lab.street} icon={'google-maps'} option={''}/>
              </View>
          </View>
          <View style={styles.wrapper}>
              <MediumFont text={'Analysis Results'}/>
              <TouchableOpacity>
                  <View style={styles.di_container}>
                      <MaterialCommunityIcons name={'download-circle'} size={24} color={fontColor.g} />
                  </View>
              </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <InvestigationCard />
          </ScrollView>
        </View>
    </View>
  )
}

export default Analysis

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: iconColor.gbgd
      },
      headerContainer: {
        width: '100%',
        height: 100,
        marginBottom: 10,
      },
      cardContainer: {
        flexDirection: 'row'
      },
      di_container: {
        width: 34,
        height: 34,
        borderRadius: 8,
        backgroundColor: '#bdfcbb',
        justifyContent: 'center',
        alignItems: 'center',
      },
      wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      divWrapper: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }
})