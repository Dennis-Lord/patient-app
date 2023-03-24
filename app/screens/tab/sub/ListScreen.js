import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { HeroFont, LightFont } from '../../../components/Font-components'
import { FilterFileCard } from '../../../components/List-components'
import { fontColor, iconColor, wrapper } from '../../../templates/template'
import { auth, db } from '../../../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const ListScreen = ({navigation, route}) => {
  let [userDoc, setUserDoc] = useState('');

  // get user document by user's id
  const getUserDoc = () => {
      return onAuthStateChanged(auth, async (cred) => {
        if (auth.currentUser) {
          const docRef = doc(db, "users", `${cred.uid}`)
          const docSnap = await getDoc(docRef);
  
          if(docSnap.exists()) {
            setUserDoc(docSnap.data());
          }else{
            console.log('no doc snap')
          }
        }else {
          return console.log('err')
        }
      }, (error) => {
        console.log(error)
      })
    }
    getUserDoc();

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
        {/* <View style={listStyles.filterContainer}>
          <FilterOption filter={"Files"}/>
          <FilterOption filter={"Filter"}/>
        </View> */}
      <View style={[wrapper.bw, listStyles.listWrapper]}>
        <View style={listStyles.listContainer}>
          {
            userDoc === '' ?
            <></>
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
