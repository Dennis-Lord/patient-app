import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { HeroFont, LightFont, MediumFont, MiniFont, SemiBoldFont, SemiLightFont} from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components';
import { fontColor, iconColor, wrapper, pallete } from '../../templates/template';
import { db, auth } from '../../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SponsorsScreen = () => {
  const [sponsor, setSponsor] = useState({})
  const [loading, setLoading] = useState({s: true ,m: 'loading sponsors...'})

  // get data from firestore
  useEffect(() => {
    try {
      onAuthStateChanged(auth, async (cred) => {
        const docRef = doc(db, 'records',  `${cred.uid}`);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          const userDoc = docSnap.data()
          setSponsor(userDoc.medical_folders[0].patientProfile.sponsor);
          setLoading({s: false, m: ''})
        }else{
          setLoading({e: true, m: 'Sorry no data available'})
        }
      }).then(() => {

      }).catch(e => console.log(e))
    } catch (error) {
      setLoading({e: true, m: 'error loading profile...' + error})
    }
  }, [])

  return (
    <View style={styles.screenView}>
      <View style={styles.header}>
        <HeroFont text={"Sponsors"} tc={fontColor.w}/>
      </View>
      <View style={[styles.sponsorsContainer, wrapper.bw]}>
        {
          loading.s ? 
          <View style={styles.loadStyle}>
            <MediumFont text={loading.m} tc={pallete.black}/>
          </View>
          : 
          <View style={styles.container}>
            <View style={styles.i_w}>
              <MaterialCommunityIcons name={'link'} size={24} color={pallete.darkG} />
            </View>
            <View style={{width: '100%', paddingRight: 4}}>
              <SemiBoldFont text={sponsor.name} tc={fontColor.n}/>
              <View style={{height: 2}}/>
              <MediumFont text={sponsor.acronym} tc={pallete.tintGray}/>
              <View style={{height: 2}}/>
              <MediumFont text={"ID: " + sponsor.id} tc={pallete.tintGray}/>
              <View style={{height: 2}}/>
              <View style={styles.bottom}>
                <SemiLightFont text={sponsor.verification} tc={pallete.greenB}/>
                <MiniFont text={sponsor.expiration} tc={pallete.darkG}/>
              </View>
            </View>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    display: 'flex',
    backgroundColor: pallete.greenB
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  sponsorsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  loadStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    height: '100%',
    width: '100%'
  },
  container: {
    width: '96%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  i_w: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: iconColor.bg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4
  },
  bottom: {
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 20,
    flexDirection: 'row'
  }
}) 

export default SponsorsScreen
