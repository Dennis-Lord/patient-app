import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'
import { FilterFileCard, FilterOption } from '../../../components/List-components'

const ListScreen = ({navigation, route}) => {
  // let keyHolder;
  const h_title = route.params.dataObject.title
  const dataFiles = route.params.dataObject.data
  const {sub_route} = route.params.dataObject

  // if(sub_route === 'MedicalFile') {
  //   keyHolder = dataFiles.disease_name
  // }else if (sub_route === 'Analysis') {
  //   keyHolder = dataFiles.analysis_name
  // }else {
  //   keyHolder = dataFiles.referring_hospital
  // }

  console.log(dataFiles)
  return (
    <View style={listStyles.screenView}>
      <HeroFont text={h_title}/>
      <View style={listStyles.filterContainer}>
        <FilterOption filter={"Folders"}/>
        <FilterOption filter={"Folders"}/>
      </View>
      <View style={listStyles.listContainer}>
        {dataFiles.map((d, i) => <FilterFileCard key={i} nav={navigation} route={sub_route} data={d}/>)}
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
