import { StyleSheet, View } from 'react-native'
import React, { useState, setTimeout, useEffect } from 'react'
import { MainCard, NavCard, NavCard_s } from '../../components/Card-components'
import { HeroFont, LightFont } from '../../components/Font-components'
import { iconColor, fontColor, wrapper } from '../../templates/template'
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../../../firebaseConfig'
import { doc, getDoc, collection } from 'firebase/firestore'

// test@gmail.com Test123

// main screen of the application
const MainScreen = ({navigation}) => {
  const [document, setDocument] = useState(null)
  const [docError, setDocError] = useState({isError: false, errorMessage: ''})

  const propObject = {
    folder: {
      route: 'ListScreen',
      title: 'Medical history',
      subRoute: 'MedicalFile',
      docs: document != null ? document.medical_folders : {} // document.medical_folders
    },
    analysis: {
      route: 'ListScreen',
      title: 'Analysis',
      subRoute: 'Analysis',
      docs: document != null ? document.analysis_files : {} // document.analysis_files
    },
    referrals: {
      route: 'ListScreen',
      title: 'Referrals',
      subRoute: 'Referrals',
      docs: document != null ? document.medical_folders : {} // document.medical_files.[0].referrals
    },
    documents: {
      route: 'Documents',
      title: 'Documents',
    }
  }

  // get user's medical records
  useEffect(() => {
    onAuthStateChanged(auth, async (cred) => {
      const docRef = doc(db, 'records',  `${cred.uid}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
          const userDoc = docSnap.data()
          setDocument(userDoc);
          console.log('got data')
        }
        else{
          setDocument([])
          setDocError({docError: true, errorMessage: 'No records available...'})
        }
    }, (error) => {
      setDocError({docError: true, errorMessage: error})
    })
  }, [])

  return (
    <View style={screenstyle.screenView}>
      <View style={[wrapper.heroPos, {position: 'relative', right: '30%',}]}>
        <HeroFont text={'Meddocs'} tc={fontColor.w}/>
        {
          docError.isError ? 
            setTimeout(() => {
              return <LightFont text={docError.errorMessage} tc={fontColor.p}/>
            }, 3000).then(() => setDocError({isError: false, errorMessage: ''}))
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