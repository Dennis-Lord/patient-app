import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth } from '../templates/template'
import { LightFont, MediumFont } from './Font-components'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FilterOption = ({filter}) => {
  return (
    <View style={styles.container}>
      <MediumFont text={filter}/>
    </View>
  )
}

const FlagComponent = ({flag}) => {
  return (
    <View style={styles.flagContainer}>
      <LightFont text={flag}/>
    </View>
  )
}



const FilterFileCard = ({nav, route}) => {
  return (
    <TouchableOpacity onPress={() => nav.navigate(route)}>
      <View style={styles.cardContainer}>
        <View style={styles.lc}>
          <LightFont text={"Edna Konadu Donkoh"}/>
          <MediumFont text={"Coronavirus"}/>
        </View>
        <View style={styles.rc}>
          <View style={styles.uc}>
            <FlagComponent flag={"in process"}/>
            <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <LightFont text={"since 20.04.2022"}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    container: {
        width: (windowWidth/4),
        height: 46,
        backgroundColor: 'gray',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '100%',
        height: 105,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#707070',
        padding: 6,
        marginBottom: 12,
        flexDirection: 'row'
    },
    flagContainer: {
      width: 100,
      height: 30,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#707070',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      backgroundColor: '#a8a29e'
    },
    lc: {
      width: '50%',
      flex: 1,
    },
    rc: {
      width: '50%',
      flex: 1,
      justifyContent:'space-between',
      alignItems: 'flex-end'
    },
    uc: {
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
})

export {FilterOption, FilterFileCard}
