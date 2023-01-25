import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MediumFont } from '../../../../components/Font-components'
import { VisitsCard } from '../../../../components/Card-components'

const ThirdRoute = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>    
      <MediumFont text={'Date'}/>
      <VisitsCard />
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
