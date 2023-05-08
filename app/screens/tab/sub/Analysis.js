import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { HeroFont, MediumFont, MiniFont, LFb } from '../../../components/Font-components'
import { AnalysisDetailsCard, InvestigationCard } from '../../../components/Card-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { iconColor, wrapper, fontColor, pallete } from '../../../templates/template';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebaseConfig';


const Analysis = ({route}) => {
  const analysis = route.params.dataFile;
  const location = analysis.ref

  const [toggle, setToggle] = useState({
    link: '',
    state: false
  })

  const toggleLink = async (fileName) => {
    const fileRef = ref(storage, `docs/${fileName}`)
    if (toggle.state === false) {
    await getDownloadURL(fileRef).then((url) => {
        setToggle({
          link: url,
          state: true
        })
      }).catch((e) => {
        const err = e
      })
    }
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={analysis.analysisName} tc={pallete.white}/>
      </View>
        <View style={[styles.divWrapper, wrapper.bw]}>
          <View style={styles.headerContainer}>
              <MediumFont text={analysis.analysisName}/>
              <View style={styles.cardContainer}>
                  <AnalysisDetailsCard color={pallete.blue} label={'Date'} value={analysis.date} icon={'calendar'} option={'a'}/>
                  <AnalysisDetailsCard color={pallete.greenB} label={'Result'} value={analysis.result} icon={'check-circle'} option={'a'}/>
              </View>
          </View>
          <View style={styles.headerContainer}>
              <MediumFont text={'Clinic / Laboratory'}/>
              <View style={styles.cardContainer}>
                  <AnalysisDetailsCard color={pallete.blue} label={analysis.lab.name} value={analysis.lab.street} icon={'google-maps'} option={''}/>
              </View>
          </View>
          <View style={styles.wrapper}>
              <MediumFont text={'Analysis Results'}/>
          </View>
          {
              toggle.link != '' ?
              <View style={styles.clip}>
                <View style={styles.cancelWrapper}>
                <MediumFont text={'Copy download link'}/>
                  <TouchableOpacity onPress={() => setToggle({link: '', state: false})}>
                    <MaterialCommunityIcons name="close-circle" size={30} color={pallete.black} />
                  </TouchableOpacity>
                </View>
                <TextInput style={styles.linkWrapper} value={toggle.link}/>
              </View>
              :
              <></>
            }
          <ScrollView showsVerticalScrollIndicator={false}>
              <InvestigationCard />
          </ScrollView>
          <View style={styles.diagnosisContainer}>
            <MediumFont text={"Result file"}/>
            <View style={styles.downloadContainer}>
            <TouchableOpacity onPress={() => toggleLink(location)}>
                <View style={styles.di_container}>
                    <MaterialCommunityIcons name={'download'} size={24} color={pallete.darkG} />
                </View>
            </TouchableOpacity>
            <View style={styles.br} />
            <LFb text={location}/>
          </View>
            <MiniFont text={'Download laboratory analysis file format'} />
          </View>
        </View>
    </View>
  )
}

export default Analysis

const styles = StyleSheet.create({
  screenView: {
      flex: 1,
      backgroundColor: pallete.greenB
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
      backgroundColor: pallete.tint,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    divWrapper: {
      backgroundColor: pallete.white,
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    downloadContainer: {
      width: '100%',
      MaxHeight: 58,
      borderRadius: 10,
      padding: 8,
      flexDirection: 'row',
      marginVertical: 4,
      alignItems: 'center'
    },
    br: {
      width: 10,
    },
    diagnosisContainer: {
      width: '100%',
      marginTop: 12
    },
})