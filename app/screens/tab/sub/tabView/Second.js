import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LightFont, SemiLightFont, MediumFont, MiniFont } from '../../../../components/Font-components'
import { DownloadCard, DrugCard } from '../../../../components/Card-components'
import { Ionicons } from '@expo/vector-icons';
import { fontColor, iconColor, pallete } from '../../../../templates/template';


const SecondRoute = ({fileData}) => {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 
      <View style={styles.dateFrameContainer}>
        <View style={styles.downloadWrapper}>
          <LightFont text={'begun'}/>
          <SemiLightFont text={fileData.treatementStarted}/>
        </View>
        <View style={styles.downloadWrapper}>
          <LightFont text={'ended'}/>
          <SemiLightFont text={fileData.treatementEnded}/>
        </View>
      </View>  
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Recommendations"}/>
        {
          fileData.recommendations.map((r, i) => 
          <LightFont key={i} text={r}/>
          )
        }
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Medications"}/>
        <DrugCard icon={'bottle-tonic'} color={pallete.orange} name={fileData.drugsAdministered.drugs.drug} date={'02.03.2023'} dose={'10ml'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Start doses"}/>
        <DrugCard icon={'pill'} color={pallete.blue} name={fileData.drugsAdministered.startDoses.drugName} date={'02.03.2023'} dose={'12ml, oral'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Infusions"}/>
        <DrugCard icon={'iv-bag'} color={pallete.red} name={fileData.drugsAdministered.infusions.drugName} date={'02.03.2023'} dose={'12ml, iv-bag'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Medical analysis"}/>
        <DownloadCard fileUrl={fileData.fileUrl}/>
        <MiniFont text={'Download laboratory analysis file'} />
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
collapsible: {
  width: '100%',
  padding: 8,
  marginVertical: 10,
},
c_t: {
  borderBottomWidth: 1,
  borderColor: iconColor.c,
  paddingBottom: 8,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: 10,
}
})

export default SecondRoute
