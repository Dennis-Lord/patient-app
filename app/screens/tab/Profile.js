import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeroFont, SemiFont, MediumFont, LightFont } from '../../components/Font-components'
import { ProfileCard } from '../../components/Card-components'
import { profileObject } from '../../templates/template'

const ProfileScreen = () => {
  return (
    <View style={styles.screenView}>
      <HeroFont text={"Profile"}/>
      <View style={styles.container}>
        <View style={styles.img}/>
        <View style={styles.subContainer}>
          <MediumFont text={"Provider"}/>
          <SemiFont text={"Fankyenebra Hospital"}/>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <LightFont text={"Date generated"}/>
        <View style={styles.br} />
        <LightFont text={"02.04.2022"}/>
      </View>
      <View style={styles.profile}>
        {
          profileObject.map(({n,v, i}) => <ProfileCard key={n} name={n} value={v} icon={i}/>)
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    marginTop: 40,
    display: 'flex',
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    height: 146,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
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
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
  br: {
    width: 10,
  },
  profile: {
    flex: 1,
  }
})

export default ProfileScreen;
