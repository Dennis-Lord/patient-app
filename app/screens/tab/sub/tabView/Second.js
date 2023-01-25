import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { LightFont, SemiLightFont, MediumFont } from '../../../../components/Font-components'
import { DrugCard } from '../../../../components/Card-components'

const SecondRoute = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 
      <View style={styles.dateFrameContainer}>
        <View style={styles.downloadWrapper}>
          <LightFont text={'begun'}/>
          <SemiLightFont text={'02.04.2022'}/>
        </View>
        <View style={styles.downloadWrapper}>
          <LightFont text={'ended'}/>
          <SemiLightFont text={'02.04.2022'}/>
        </View>
      </View>  
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Recommendations"}/>
        <LightFont text={"Isolation"}/>
        <LightFont text={"Bed rest"}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Medications"}/>
        <DrugCard icon={'bottle-tonic'} name={'Drug name'} date={'02.03.2023'} dose={'10ml'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Start doses"}/>
        <DrugCard icon={'pill'} name={'Johnson & Johnson'} date={'02.03.2023'} dose={'12ml, oral'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Infusions"}/>
        <DrugCard icon={'iv-bag'} name={'Johnson & Johnson'} date={'02.03.2023'} dose={'12ml, iv-bag'} time={'2:20pm'}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    marginTop: 8,
  },
  dateFrameContainer: {
    width: '100%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
diagnosisContainer: {
  width: '100%',
  marginTop: 12
},
})

export default SecondRoute
