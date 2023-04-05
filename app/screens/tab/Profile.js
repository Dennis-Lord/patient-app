import { StyleSheet, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeroFont, SemiFont, MediumFont, LightFont } from '../../components/Font-components'
import { ProfileCard } from '../../components/Card-components'
import { fontColor, iconColor, wrapper } from '../../templates/template'
import { auth, db } from '../../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const ProfileScreen = () => {
  const user = auth.currentUser;

  const [hospitalProfile, setHospitalProfile] = useState({})
  const [profileData, setProfileData] = useState({})
  const [loading, setLoading] = useState({s: true ,m: 'loading profile...'})

  // get data from firestore
  useEffect(() => {
    onAuthStateChanged(auth, async (cred) => {
      const docRef = doc(db, 'records',  `${cred.uid}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        const userDoc = docSnap.data()
        setHospitalProfile(userDoc.medical_folders[0])
        setProfileData(userDoc.medical_folders[0].patientProfile);
        console.log(profileData)
        setLoading({s: false, m: ''})
      }
    }, (error) => {
      setLoading({e: true, m: 'error loading profile'})
    })
  }, [])


  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={'Profile'} tc={fontColor.w}/>
      </View>
      <View style={[styles.cWrapper, wrapper.bw]}>
        {
          loading.s ?
          <View style={styles.loadStyle}>
            <MediumFont text={loading.m} tc={fontColor.p}/>
          </View>
          :
          <>
            <View style={styles.container}>
              <View style={styles.img}/>
              <View style={styles.subContainer}>
                <MediumFont text={"Provider"}/>
                <SemiFont text={hospitalProfile.hName}/>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <LightFont text={"Date generated:"}/>
              <View style={styles.br} />
              <LightFont text={"02.04.2022"}/>
            </View>
            {/* Display user profile data */}
            <View style={styles.profile}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ProfileCard name={'Name'} value={profileData.name} icon={'human-greeting-proximity'}/>
                <ProfileCard name={'Gender'} value={profileData.gender} icon={'gender-male'}/>
                <ProfileCard name={'Title'} value={profileData.title} icon={'label-variant'}/>
                <ProfileCard name={'Age'} value={profileData.age} icon={'select-group'}/>
                <ProfileCard name={'Type'} value={profileData.bloodType} icon={'blood-bag'}/>
                <ProfileCard name={'Height'} value={`${profileData.bodymeasurements.height.measure} ${profileData.bodymeasurements.height.unit}`} icon={'human-male-height'}/>
                <ProfileCard name={'Weight'} value={`${profileData.bodymeasurements.weight.measure} ${profileData.bodymeasurements.weight.unit}`} icon={'weight'}/>
                <ProfileCard name={'Allergies'} value={profileData.allergy} icon={'allergy'}/>
                <ProfileCard name={'Sponsor(s)'} value={profileData.sponsor.acronym} icon={'help-network'}/>
              </ScrollView>
            </View>
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
  cWrapper: {
    backgroundColor: iconColor.bgw,
    flex: 1,
    paddingHorizontal: 18,
  },
  container: {
    width: '100%',
    height: 146,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: iconColor.bgw
  },
  img: {
    width: '45%',
    height: '100%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  dateContainer: {
    width: '100%',
    height: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
  br: {
    width: 10,
  },
  profile: {
    flex: 1,
  },
  loadStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    height: '100%',
    width: '100%'
  }
})

export default ProfileScreen;
