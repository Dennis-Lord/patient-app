import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState, setTimeout, useEffect } from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont, LightFont } from '../../components/Font-components'
import { iconColor, fontColor, wrapper } from '../../templates/template'
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../../../firebaseConfig'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore'

// test@gmail.com Test123

// main screen of the application
const MainScreen = ({navigation}) => {
  const [document, setDocument] = useState({})
  const [docError, setDocError] = useState({isError: false, errorMessage: ''})

  const propObject = {
    folder: {
      route: 'ListScreen',
      title: 'Medical history',
      subRoute: 'MedicalFile',
      docs: document != {} ? document.medical_folders : document // document.medical_folders
    },
    analysis: {
      route: 'ListScreen',
      title: 'Analysis',
      subRoute: 'Analysis',
      docs: document != {} ? document.analysis_files : document // document.analysis_files
    },
    referrals: {
      route: 'ListScreen',
      title: 'Referrals',
      subRoute: 'Referrals',
      docs: document != {} ? document.medical_folders : document // document.medical_files.[0].referrals
    },
    documents: {
      route: 'Documents',
      title: 'Documents',
    }
  }

  // get user's medical records
  const getUserDoc = async () => {
    const docRef = doc(db, 'records',  `${cred.uid}`);
    return await getDoc(docRef).then(snapshot => {
      if(snapshot.exists()) {
          const userDoc = snapshot.data()
          setDocument(userDoc);
          console.log('got data')
        }
        else{
          setDocument(undefined)
          setDocError({isError: true, errorMessage: 'No records available...'})
        }
    }).catch(e => {
        setDocument({})
        setDocError({isError: true, errorMessage: 'No internet connection'})
    })
  }

  useEffect(() => {
      onAuthStateChanged(auth, async (cred) => {
        const docRef = doc(db, 'records',  `${cred.uid}`);
        return await getDoc(docRef).then(snapshot => {
          if(snapshot.exists()) {
              const userDoc = snapshot.data()
              setDocument(userDoc);
              console.log('got data')
            }
            else{
              setDocument(undefined)
              setDocError({isError: true, errorMessage: 'No records available...'})
            }
        }).catch(e => {
          console.log(e)
            setDocument({})
            setDocError({isError: true, errorMessage: 'No internet connection'})
        })})
      }, [])

  return (
    <View style={screenstyle.screenView}>
      <View style={[wrapper.heroPos, {position: 'relative',  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%'}]}>
        <HeroFont text={'Meddocs'} tc={fontColor.w}/>
        { 
          document === {} || document === null || document === undefined ?
          <TouchableOpacity>
            <MaterialCommunityIcons name='reload' size={24} color={fontColor.w}/>
          </TouchableOpacity>
          :
          docError.isError && docError.errorMessage == 'No internet connection'?
          <LightFont tc={fontColor.w} text={'No internet connection'}/>
          : 
          <></>
        }
      </View>
      <View>
      <MainCard />
      </View>
      <View style={[screenstyle.container, wrapper.bw]}>
        <NavCard cardText={'Medical history'} nav={navigation} routeProps={propObject.folder}/>
        <NavCard cardText={'Analysis'} nav={navigation} routeProps={propObject.analysis}/>
        <View style={screenstyle.flexContainer}>
        <NavCard_s cardText={'Documents'} nav={navigation} routeProps={propObject.documents}/>
        <NavCard_s cardText={'Referrals'} nav={navigation} routeProps={propObject.referrals} />
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