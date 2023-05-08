import { StyleSheet, View, TextInput, Text } from 'react-native'
import React, {useDebugValue, useState} from 'react'
import { HeroFont, LightFont } from '../../../components/Font-components'
import { FilterFileCard, ReferralCard, AnalysisCard } from '../../../components/List-components'
import { pallete, iconColor,wrapper } from '../../../templates/template'

const ListScreen = ({navigation, route}) => {
  let userDoc = route.params.routeProps.docs == undefined ? undefined : route.params.routeProps.docs;
  const title = route.params.routeProps.title
  const subRoute = route.params.routeProps.subRoute
  let mFiles, aFiles, referrals;
  
  if(title == 'Medical history' && userDoc != undefined && userDoc != {}) {
    // mFolders = userDoc
    mFiles = userDoc[0].medicalFolder.files;
  }else if(title == 'Analysis' && userDoc != undefined && userDoc != {}) {
    aFiles = userDoc;
  }else if(title == 'Referrals' && userDoc != undefined && userDoc != {}) {
    let refDoc = userDoc[0].medicalFolder.referrals;
    referrals = refDoc;
  }

  return (
    <View style={listStyles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={title} tc={pallete.white}/>
        <View style={listStyles.searchBar}>
          <TextInput style={listStyles.txti} placeholder='search' underlineColorAndroid={'#fff'}/>
        </View>
      </View>
      {/* button to toggle folder & files states */}
      <View style={[wrapper.bw, listStyles.listWrapper]}>
        <View style={listStyles.listContainer}>
          {
            userDoc === {} || userDoc === null ?
            <LightFont text={'Error getting records'}/>
            :
            userDoc === undefined ?
            <LightFont text={'No records available'}/>
            :
            title == 'Medical history' && userDoc !== undefined?
            mFiles.map((files, i) => 
              <FilterFileCard key={i} nav={navigation} route={subRoute} data={files}/>
            ):
            title == 'Analysis' && userDoc !== undefined?
            aFiles.map((files, i) => 
              <AnalysisCard key={i} nav={navigation} route={subRoute} data={files}/>
            )
            :
            title == 'Referrals' && userDoc != undefined ?
            referrals.map((referral, i) => 
              <ReferralCard key={i} nav={navigation} route={subRoute} data={referral}/>
            )
            :
            <LightFont text={'Error'}/>
          }
        </View>
      </View>
    </View>
  )
}

const listStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        display: 'flex',
        backgroundColor: pallete.greenB,
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
