import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { LFb } from '../../../../components/Font-components'
import { VisitsCard } from '../../../../components/Card-components'

const ThirdRoute = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>    
      <LFb text={'Date'}/>
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
