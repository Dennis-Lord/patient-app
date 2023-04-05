import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { HeroFont, MediumFont} from '../../components/Font-components'
import { SponsorCard, OptionsCard } from '../../components/Card-components';
import { fontColor, iconColor, wrapper } from '../../templates/template';
import { db, auth } from '../../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const SponsorsScreen = () => {
  const [sponsor, setSponsor] = useState({})
  const [loading, setLoading] = useState({s: true ,m: 'loading sponsors...'})

  // get data from firestore
  useEffect(() => {
    onAuthStateChanged(auth, async (cred) => {
      const docRef = doc(db, 'records',  `${cred.uid}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        const userDoc = docSnap.data()
        setSponsor(userDoc.medical_folders[0].patientProfile.sponsor);
        setLoading({s: false, m: ''})
      }
    }, (error) => {
      setLoading({e: true, m: 'error loading profile' + error})
    })
  }, [])

  return (
    <View style={styles.screenView}>
      <View style={styles.header}>
        <HeroFont text={"Sponsors"} tc={fontColor.w}/>
        <View style={styles.editButton}>
          <TouchableOpacity>
          <OptionsCard iconName={"file-edit"} option={"edit"} s={18} o={'b'} tc={fontColor.w} mic={fontColor.w}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.sponsorsContainer, wrapper.bw]}>
        {
          loading.e ? 
          <></>
          : 
          <>
            <View style={styles.sponsorName}>
              <MediumFont text={sponsor.name}/>
              <MediumFont text={sponsor.acronym}/>
            </View>
            <SponsorCard />
          </>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    display: 'flex',
    backgroundColor: iconColor.gbgd
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
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  sponsorName: {
    display: 'flex',
    marginBottom: 16,
  }
}) 

export default SponsorsScreen
