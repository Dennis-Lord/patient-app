import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { LFb } from '../../../../components/Font-components'
import { VisitsCard } from '../../../../components/Card-components'
import { pallete } from '../../../../templates/template'

// displays the date you visited the hospital
const ThirdRoute = ({fileData}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>    
      <LFb text={'Date'} tc={pallete.black}/>
      <VisitsCard data={fileData}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    marginTop: 8,
  },
})

export default ThirdRoute
