import { StyleSheet, View } from 'react-native'
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
      <View style={listStyles.listContainer}>
      <FilterFileCard />
      </View>
    </View>
  )
}

const listStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        marginTop: 40,
        display: 'flex',
        paddingHorizontal: 20,
      },
      filterContainer: {
        width: "100%",
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      listContainer: {
        marginTop: 26,
        flex: 1,
      }
})

export default ListScreen
