import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MediumFont, LightFont, SemiLightFont, SemiFont } from '../../../../components/Font-components'
import { DownloadCard, OptionsCard } from '../../../../components/Card-components'

const FirstRoute = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>    
    <View style={styles.diagnosisContainer}>
      <MediumFont text={"Diagnosis"}/>
      <LightFont text={"Corona virus infection"}/>
    </View>
    <View style={styles.attendantContainer}>
      <View style={styles.img}/>
      <View style={styles.rc}>
        <View style={{flexWrap: 'wrap', width: '100%'}}>
            <SemiLightFont text={"Edna Konadu Donkoh"}/>
            <SemiLightFont text={"Doctor"}/>
        </View>
        <View>
            <OptionsCard iconName={'hospital-building'} s={24} option={'Fankyenebra Hospital'} o={'b'}/>
            <OptionsCard iconName={'phone'} s={24} option={'020 123 1234'} o={'b'}/>
        </View>
      </View>
    </View>

    <View style={styles.downloadWrapper}>
        <MediumFont text={"Download the report"} />
        <DownloadCard />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    marginTop: 8,
  },
    diagnosisContainer: {
        width: '100%',
        marginTop: 12
    },
    img: {
        width: 130,
        height: 140,
        backgroundColor: 'gray',
        borderRadius: 10,
    }, 
    attendantContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        width: '100%',
        height: 146,
        alignItems: 'center'
    },
    rc: {
        marginLeft: 10,
        height: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    downloadWrapper: {
        width: '100%',

    }
})

export default FirstRoute
