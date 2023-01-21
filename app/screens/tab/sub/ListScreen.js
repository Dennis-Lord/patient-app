import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'
import { FilterFileCard, FilterOption } from '../../../components/List-components'

const ListScreen = () => {
  return (
    <View style={listStyles.screenView}>
      <HeroFont text={"Medical history"}/>
      <View style={listStyles.filterContainer}>
        <FilterOption filter={"Folders"}/>
        <FilterOption filter={"Folders"}/>
      </View>
      <FilterFileCard />
    </View>
  )
}

const listStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        marginTop: 40,
        display: 'flex',
        paddingHorizontal: 20,
        paddingBottom: 40,
      },
      filterContainer: {
        width: "100%",
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
})

export default ListScreen
