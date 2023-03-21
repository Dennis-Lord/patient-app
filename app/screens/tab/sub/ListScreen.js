import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { HeroFont } from '../../../components/Font-components'
import { FilterFileCard } from '../../../components/List-components'
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

  // console.log(dataFiles)
  return (
    <View style={listStyles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={h_title} tc={fontColor.w}/>
        <View style={listStyles.searchBar}>
          <TextInput style={listStyles.txti} placeholder='search' underlineColorAndroid={'#fff'}/>
        </View>
      </View>
        {/* <View style={listStyles.filterContainer}>
          <FilterOption filter={"Files"}/>
          <FilterOption filter={"Filter"}/>
        </View> */}
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
        marginTop: 8,
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
      },
      searchBar: {
        width: '90%',
        height:  34,
        backgroundColor: iconColor.bgw,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 8
      },
      txti: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 12,
      }
})

export default ListScreen
