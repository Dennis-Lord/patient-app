import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeroFont, MediumFont} from '../../components/Font-components'
import { SponsorCard, OptionsCard } from '../../components/Card-components';
import { fontColor, iconColor, wrapper } from '../../templates/template';


const SponsorsScreen = () => {
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
