import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeroFont, MediumFont } from '../../../components/Font-components'
import { AnalysisDetailsCard, InvestigationCard } from '../../../components/Card-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Analysis = () => {
  return (
    <View style={styles.screenView}>
        <HeroFont text={'FBC / CBC'}/>
        <View  style={{height: 30}}/>
        <View style={styles.headerContainer}>
            <MediumFont text={'Blood test'}/>
            <View style={styles.cardContainer}>
                <AnalysisDetailsCard label={'Date'} value={'23.09.2022'} icon={'calendar'} option={'a'}/>
                <AnalysisDetailsCard label={'Result'} value={'Normal'} icon={'check-circle'} option={'a'}/>
            </View>
        </View>
        <View style={styles.headerContainer}>
            <MediumFont text={'Clinic / Laboratory'}/>
            <View style={styles.cardContainer}>
                <AnalysisDetailsCard label={'Fankyenebra Hospital'} value={'Santasi, next to Fankyenebra school'} icon={'google-maps'} option={''}/>
            </View>
        </View>
        <View style={styles.wrapper}>
            <MediumFont text={'Analysis Results'}/>
            <TouchableOpacity>
                <View style={styles.di_container}>
                    <MaterialCommunityIcons name={'download-circle'} size={24} color="#404040" />
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <InvestigationCard />
        </ScrollView>
    </View>
  )
}

export default Analysis

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,
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
      }
})