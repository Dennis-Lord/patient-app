import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MediumFont } from './Font-components'
import { windowWidth } from '../templates/template'

// card components for main screen

const MainCard = () => {
  return (
    <View style={styles.mainCard}></View>
  )
}

const NavCard = ({cardText}) => {
    return (
      <View style={styles.navCard}>
          <View style={styles.navtextPos}>
              <MediumFont text={cardText}/>
          </View>
      </View>
    )
}

const NavCard_s = ({cardText}) => {
    return (
      <View style={styles.navCard_s}>
          <View style={styles.navtextPos_s}>
              <MediumFont text={cardText}/>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        width: (windowWidth - 30),
        height: 149,
        backgroundColor: '#E8E8E8',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#707070',
    },
    navCard: {
        width: 330,
        height: 105,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#707070',
        padding: 6,
        marginBottom: 12,
    },
    navtextPos: {
        width: 160,
        height: 30,
    },
    navCard_s: {
        width: '47%',
        height: 105,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#707070',
        padding: 6,
    },
    navtextPos_s: {
        position: 'absolute',
        width: 160,
        height: 30,
        bottom: 6,
        left: 6
    },
})

export {MainCard, NavCard, NavCard_s}
