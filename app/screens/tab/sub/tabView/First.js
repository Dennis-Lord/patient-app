import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MediumFont, LightFont, SemiLightFont, LFb } from '../../../../components/Font-components'
import { OptionsCard } from '../../../../components/Card-components'
import { iconColor } from '../../../../templates/template'

const FirstRoute = ({fileData}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>  
      {/* Diagnosis header */}
    <View style={styles.diagnosisContainer}>
      <MediumFont text={"Diagnosis"}/>
      <LightFont text={fileData.diagnosis}/>
    </View>
    <View style={styles.attendantContainer}>
      <View style={styles.img}/>
      <View style={styles.rc}>
        {/* Attending physisian profile */}
        <View style={{flexWrap: 'wrap', width: '100%'}}>
            <LightFont text={fileData.practisioner.name}/>
            <SemiLightFont text={fileData.practisioner.title}/>
        </View>
        <View>
            <OptionsCard iconName={'hospital-building'} s={24} option={'Fankyenebra Hospital'} o={'b'} mic={iconColor.gbgd} />
            <OptionsCard iconName={'phone'} s={24} option={'020 123 1234'} o={'b'} mic={iconColor.gbgd}/>
        </View>
      </View>
    </View>
    <View style={styles.diagnosisContainer}>
      <MediumFont text={"Complaints"}/>
      <LightFont text={fileData.complaints}/>
    </View>
    <View style={styles.diagnosisContainer}>
      <MediumFont text={"Examinations"}/>
      <LightFont text={fileData.examinations.bodypart}/>
      <LightFont text={fileData.examinations.result}/>
    </View>
    {/* Nurses notes */}
    <View style={styles.downloadWrapper}>
        <MediumFont text={"Nurses Notes"} />
        <LightFont text={fileData.practisioner.notes.notes}/>
        <LFb text={fileData.practisioner.notes.notesDate}/>
        <LFb text={fileData.practisioner.notes.time}/>
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
