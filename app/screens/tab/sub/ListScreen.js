import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'
import { FilterFileCard, FilterOption } from '../../../components/List-components'
import { fontColor, iconColor, wrapper } from '../../../templates/template'

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
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={'Medical history'} tc={fontColor.w}/>
      </View>
        <View style={listStyles.filterContainer}>
          <FilterOption filter={"Folders"}/>
          <FilterOption filter={"Folders"}/>
        </View>
      <View style={[wrapper.bw, listStyles.listWrapper]}>
        <View style={listStyles.listContainer}>
          {dataFiles.map((d, i) => <FilterFileCard key={i} nav={navigation} route={sub_route} data={d}/>)}
        </View>
      </View>
    </View>
  )
}

const listStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        paddingTop: 40,
        display: 'flex',
        backgroundColor: iconColor.gbgd,
      },
        listWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10,
      },
      filterContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      },
      listContainer: {
        marginTop: 20,
        flex: 1,
      }
})

export default ListScreen
