import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeroFont, MediumFont} from '../../components/Font-components'
import { SponsorCard, OptionsCard } from '../../components/Card-components';


const SponsorsScreen = () => {
  return (
    <View style={styles.screenView}>
      <View style={styles.header}>
        <HeroFont text={"Sponsors"}/>
        <View style={styles.editButton}>
          <OptionsCard iconName={"file-edit"} option={"Edit"}/>
        </View>
      </View>
      <View style={styles.sponsorsContainer}>
        <View style={styles.sponsorName}>
          <MediumFont text={"National Health Insurance Scheme"}/>
          <MediumFont text={"NHIS card"}/>
        </View>
        <SponsorCard />
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
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sponsorsContainer: {
    flex: 1,
    marginTop: 30,

  },
  sponsorName: {
    display: 'flex',
    marginBottom: 16,
  }
}) 

export default SponsorsScreen
