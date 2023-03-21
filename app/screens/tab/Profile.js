import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { HeroFont, SemiFont, MediumFont, LightFont } from '../../components/Font-components'
import { ProfileCard } from '../../components/Card-components'
import { profileObject, fontColor, iconColor, wrapper } from '../../templates/template'

const ProfileScreen = () => {
  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={'Profile'} tc={fontColor.w}/>
      </View>
      <View style={[styles.cWrapper, wrapper.bw]}>
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
          {
            profileObject.map(({n,v, i}) => <ProfileCard key={n} name={n} value={v} icon={i}/>)
          }
          </ScrollView>
        </View>
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
  }
})

export default ProfileScreen;
