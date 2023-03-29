import { StyleSheet, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { HeroFont, LightFont } from '../../../components/Font-components'
import { FilterFileCard } from '../../../components/List-components'
import { fontColor, iconColor, wrapper } from '../../../templates/template'

const ListScreen = ({navigation, route}) => {
  let [userDoc, setUserDoc] = useState(route.params.docs);

  const {title} = route.params.routeProps
  const {subRoute} = route.params.routeProps

  return (
    <View style={listStyles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={title} tc={fontColor.w}/>
        <View style={listStyles.searchBar}>
          <TextInput style={listStyles.txti} placeholder='search' underlineColorAndroid={'#fff'}/>
        </View>
      </View>
      <View style={[wrapper.bw, listStyles.listWrapper]}>
        <View style={listStyles.listContainer}>
          {
            userDoc === null ?
            <LightFont text={'Error getting records'}/>
            :
            userDoc === [] ?
            <LightFont text={'No records available'}/>
            :
            <FilterFileCard nav={navigation} route={subRoute} data={userDoc}/>
          }
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
