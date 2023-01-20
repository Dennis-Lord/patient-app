import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MediumFont } from './Font-components'

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
              <MediumFont text={'Medical history'}/>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        width: 330,
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
    },
    navtextPos: {
        width: 160,
        height: 30,
    },
    navCard_s: {
        width: '50%',
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
