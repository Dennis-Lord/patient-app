import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { pallete, windowWidth } from '../templates/template'
import { LightFont, MediumFont, SemiLightFont, HeroFont, MiniFont } from './Font-components'
import { iconColor } from '../templates/template';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

const FlagComponent = ({flag}) => {
  let tc;
  if (flag === 'in process') {
    tc = pallete.blue
  } else {
    tc = pallete.greenB
  }
  return (
    <View style={styles.flagContainer}>
      <SemiLightFont text={flag} tc={tc}/>
    </View>
  )
}



const FilterFileCard = ({nav, route, data}) => {
  const dataFile = data;
  console.log(dataFile.disease)
  
  return (
    <TouchableOpacity onPress={() => nav.navigate(route, {dataFile})}>
      <View style={styles.cardContainer}>
        <View style={styles.lc}>
          <LightFont text={"Edna Konadu Donkoh"} tc={pallete.black}/>
          <MediumFont text={dataFile.disease}/>
          { 
            dataFile.disease == 'Corona virus' || dataFile.disease == 'Corona Virus'  || dataFile.disease == 'Coronavirus' || dataFile.disease == 'Covid-19'?
            <MaterialIcons name="coronavirus" size={40} color={pallete.greenB} />
          :
          <></>
          }
        </View>
        <View style={styles.rc}>
          <View style={styles.uc}>
            <FlagComponent flag={"completed"}/>
            {/* <TouchableOpacity onPress={()=>handleOptionButton()}>
              <MaterialCommunityIcons name="dots-vertical" size={32} color="black" />
            </TouchableOpacity> */}
          </View>
          <LightFont text={"20.04.2022"}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ReferralCard = ({nav, route, data}) => {
  const dataFile = data;
  
  return (
    <TouchableOpacity onPress={() => nav.navigate(route, {dataFile})}>
      <View style={styles.cardContainer}>
        <View style={styles.lc}>
          <MediumFont text={dataFile.referredTo}/>
          <View style={{height: 10}}/>
          <LightFont text={dataFile.referredFrom}/>
        </View>
        <View style={styles.rc}>
          <View style={styles.uc}>
            <FlagComponent flag={"approved"}/>
          </View>
          <LightFont text={"20.04.2022"}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const AnalysisCard = ({nav, route, data}) => {
  const dataFile = data;
  
  return (
    <TouchableOpacity onPress={() => nav.navigate(route, {dataFile})}>
      <View style={styles.cardContainerB}>
        <View style={styles.lc}>
          <HeroFont text={dataFile.analysisName} tc={pallete.darkG}/>
          <View style={{height: 10}}/>
          { 
            dataFile.analysisName == 'Blood Test' ?
            <Fontisto name="blood-test" size={34} color={pallete.red} />
          :
          <></>
          }
        </View>
        <View style={styles.rc}>
          <View style={styles.uc}>
            <FlagComponent flag={dataFile.result}/>
          </View>
          <LightFont text={dataFile.date}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: (windowWidth/4),
        height: 36,
        backgroundColor: iconColor.bgw,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '100%',
        height: 105,
        borderRadius: 10,
        backgroundColor: pallete.tint,
        padding: 6,
        marginBottom: 12,
        flexDirection: 'row',
    },
    cardContainerB: {
        width: '100%',
        height: 90,
        borderRadius: 10,
        backgroundColor: pallete.tint,
        padding: 6,
        marginBottom: 12,
        flexDirection: 'row',
    },
    flagContainer: {
      width: 102,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      backgroundColor: pallete.tintG,
      borderRadius: 40,
    },
    lc: {
      width: '50%',
      flex: 1,
    },
    rc: {
      width: '50%',
      flex: 1,
      justifyContent:'space-between',
      alignItems: 'flex-end'
    },
    uc: {
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    optContainer: {
      position: 'absolute',
      right: 30,
      top: 10,
    }
})

export { FilterFileCard, ReferralCard, AnalysisCard }
