import { StyleSheet, View, TextInput } from 'react-native'
import React, {useDebugValue, useState} from 'react'
import { HeroFont, LightFont } from '../../../components/Font-components'
import { FilterFileCard } from '../../../components/List-components'
import { fontColor, iconColor, wrapper } from '../../../templates/template'

const ListScreen = ({navigation, route}) => {
  const userDoc = route.params.routeProps.docs;
  const [opt, setOpt] = useState('folders')
  const {title} = route.params.routeProps
  const {subRoute} = route.params.routeProps
  let mFolders, mFiles, aFiles, referrals;
  
  if(title == 'Medical history' && userDoc!= {}) {
    // mFolders = userDoc
    mFiles = userDoc[0].medicalFolder.files;
  }else if(title == 'Analysis') {
    aFiles = userDoc;
  }else {
    let refDoc = userDoc[0].medicalFolder.referrals;
    referrals = refDoc;
  }

  return (
    <View style={listStyles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={title} tc={fontColor.w}/>
        <View style={listStyles.searchBar}>
          <TextInput style={listStyles.txti} placeholder='search' underlineColorAndroid={'#fff'}/>
        </View>
      </View>
      {/* button to toggle folder & files states */}
      <View style={[wrapper.bw, listStyles.listWrapper]}>
        <View style={listStyles.listContainer}>
          {
            userDoc == undefined ?
            <LightFont text={'Error getting records'}/>
            :
            userDoc == {} ?
            <LightFont text={'No records available'}/>
            :
            title == 'Medical history' ?
            mFiles.map((files, i) => 
              <FilterFileCard key={i} nav={navigation} route={subRoute} data={files}/>
            ):
            title == 'Analysis' ?
            aFiles.map((files, i) => 
              <FilterFileCard key={i} nav={navigation} route={subRoute} data={files}/>
            )
            :
            referrals.map((referral, i) => 
              <FilterFileCard key={i} nav={navigation} route={subRoute} data={referral}/>
            )
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
