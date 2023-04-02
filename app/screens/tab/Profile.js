import { StyleSheet, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { HeroFont, SemiFont, MediumFont, LightFont } from '../../components/Font-components'
import { ProfileCard } from '../../components/Card-components'
import { fontColor, iconColor, wrapper } from '../../templates/template'
import { getAuth } from 'firebase/auth'
import { auth, db } from '../../../firebaseConfig'
import { doc, getDoc, getDocFromCache } from 'firebase/firestore'

const ProfileScreen = () => {
  const user = auth.currentUser;

  const [cacheState, setCacheState] = useState({s:null, error: null});
  const [profileData, setProfileData] = useState({})
  const [loading, setLoading] = useState({s: true ,m: 'loading profile...'})

  // get data from firestore
  const requestDocument = () => {
    const snappedDoc = getDoc(docRef);
    if(snappedDoc.exists()) {
        setLoading({e: false, m: ''})
      return setProfileData(snappedDoc.data());
    }else {
      setLoading({e: true, m: 'could not get profile'})
    }
  }

  // get data from cache
  
  if (user !== null) {
    const docRef = doc(db, "records", `${user.uid}`)

    try{
      const docSnap = getDocFromCache(docRef);
      return setProfileData(docSnap.data())
    }catch(e) {
      setCacheState({s: false, error: e})
    }
    
    if (cacheState.s == true) {
      return requestDocument()
    } 
  }


  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={'Profile'} tc={fontColor.w}/>
      </View>
      <View style={[styles.cWrapper, wrapper.bw]}>
        {
          loading.e ?
          <View style={styles.loadStyle}>
            <MediumFont text={ loading.m} tc={fontColor.w}/>
          </View>
          :
          <>
            <View style={styles.container}>
              <View style={styles.img}/>
              <View style={styles.subContainer}>
                <MediumFont text={"Provider"}/>
                <SemiFont text={"Fankyenebra Hospital"}/>
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
                <ProfileCard name={'Name'} value={''} icon={'human-greeting-proximity'}/>
                <ProfileCard name={'Gender'} value={''} icon={'gender-male'}/>
                <ProfileCard name={'Title'} value={''} icon={'label-variant'}/>
                <ProfileCard name={'Age'} value={''} icon={'select-group'}/>
                <ProfileCard name={'Type'} value={''} icon={'blood-bag'}/>
                <ProfileCard name={'Height'} value={''} icon={'human-male-height'}/>
                <ProfileCard name={'Weight'} value={''} icon={'weight'}/>
                <ProfileCard name={'Allergies'} value={''} icon={'allergy'}/>
                <ProfileCard name={'Sponsor(s)'} value={''} icon={'help-network'}/>
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
    backgroundColor: fontColor.p,
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    height: '100%',
    width: '100%'
  }
})

export default ProfileScreen;
