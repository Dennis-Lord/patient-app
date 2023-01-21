import { StyleSheet, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../templates/template'
import { MediumFont } from './Font-components'

const FilterOption = ({filter}) => {
  return (
    <View style={styles.container}>
      <MediumFont text={filter}/>
    </View>
  )
}

const FilterFileCard = () => {
  return (
    <View style={styles.cardContainer}>
    </View>
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
    }
})

export {FilterOption, FilterFileCard}
