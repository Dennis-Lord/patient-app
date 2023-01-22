import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MediumFont, SemiFont } from './Font-components'
import { windowHeight, windowWidth } from '../templates/template'

// icon import
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// card components for main screen

const MainCard = () => {
  return (
    <View style={styles.mainCard}></View>
  )
}

const SponsorCard = () => {
  return (
    <View style={styles.sponsorCard}></View>
  )
}

const NavCard = ({cardText, nav, navigateTo}) => {
    return (
        <TouchableOpacity onPress={() => nav.navigate(navigateTo)}>
            <View style={styles.navCard}>
                <View style={styles.navtextPos}>
                    <MediumFont text={cardText}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const NavCard_s = ({cardText, nav, navigateTo}) => {
    return (
        <TouchableOpacity onPress={() => nav.navigate(navigateTo)}>
            <View style={styles.navCard_s}>
                <View style={styles.navtextPos_s}>
                    <MediumFont text={cardText}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ProfileCard = ({name, value, icon}) => {
    return(
        <View style={styles.profileCardContainer}>
            <MaterialCommunityIcons name={icon} size={24} color="#404040" />
            <View style={styles.br} />
            <MediumFont text={name}/>
            <View style={styles.textAlign}>
                <SemiFont text={value}/>
            </View>
        </View>
    )
}

const OptionsCard = ({iconName, option, o, s}) => {
    return(o === "a" ?
            <View style={styles.optionsContainer}>
            <MaterialCommunityIcons name={iconName} size={s} color="#404040" />
            <View style={styles.br}/>
            <MediumFont text={option}/>
        </View> 
        :
        <View style={styles.optionsContainer}>
            <MaterialCommunityIcons name={iconName} size={s} color="#404040" />
            <View style={styles.br}/>
            <SemiFont text={option}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    mainCard: {
        width: (windowWidth - 30),
        height: 149,
        backgroundColor: '#E8E8E8',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#707070',
    },
    sponsorCard: {
        width: (windowWidth - 30),
        // height: 149,
        height: (windowHeight / 3.9),
        backgroundColor: '#E8E8E8',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#707070',
    },
    navCard: {
        width: 330,
        height: 105,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#707070',
        padding: 6,
        marginBottom: 12,
    },
    navtextPos: {
        width: 160,
        height: 30,
    },
    navCard_s: {
        width: (windowWidth/2.3),
        height: 105,
        borderRadius: 7,
        borderWidth: 2,
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
    profileCardContainer: {
        width: '100%',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    br: {
        width: 10,
    },
    textAlign: {
        position: 'absolute',
        left: (windowWidth/2.4),
        bottom: 0
    },
    optionsContainer: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
    }
})

export {MainCard, NavCard, NavCard_s, ProfileCard, OptionsCard, SponsorCard}
