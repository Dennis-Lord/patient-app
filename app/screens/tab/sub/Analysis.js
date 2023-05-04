import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeroFont, MediumFont, MiniFont } from '../../../components/Font-components'
import { AnalysisDetailsCard, InvestigationCard, DownloadCard } from '../../../components/Card-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { iconColor, wrapper, fontColor } from '../../../templates/template';


const Analysis = ({route}) => {
  const analysis = route.params.dataFile;
  console.log(analysis)
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
        console.log(e)
      })
    }
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={analysis.analysisName} tc={fontColor.w}/>
      </View>
        <View style={[styles.divWrapper, wrapper.bw]}>
          <View style={styles.headerContainer}>
              <MediumFont text={analysis.analysisName}/>
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
          </View>
          {
              toggle.link != '' ?
              <View style={styles.clip}>
                <View style={styles.cancelWrapper}>
                <MediumFont text={'Copy download link'}/>
                  <TouchableOpacity onPress={() => setToggle({link: '', state: false})}>
                    <MaterialCommunityIcons name="close-circle" size={30} color={fontColor.p} />
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
                    <MaterialCommunityIcons name={'download'} size={24} color={iconColor.c} />
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
      backgroundColor: iconColor.bg,
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
    },
    diagnosisContainer: {
      width: '100%',
      marginTop: 12
    },
})