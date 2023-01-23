import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LightFont, MediumFont, SemiBoldFont, SemiFont, SemiLightFont } from './Font-components'
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
        o === "b" ?
        <View style={styles.optionsContainerB}>
            <MaterialCommunityIcons name={iconName} size={s} color="#404040" />
            <View style={styles.br}/>
            <SemiLightFont text={option}/>
        </View>
        :
        <View style={styles.optionsContainer}>
            <MaterialCommunityIcons name={iconName} size={s} color="#404040" />
            <View style={styles.br}/>
            <SemiFont text={option}/>
        </View> 
    )
}

const DownloadCard = () => {
    return ( 
        <View style={styles.downloadContainer}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={'download'} size={24} color="#404040" />
            </View>
            <View style={styles.br} />
            <MediumFont text={'lab_report.pdf'}/>
        </View>
     );
}

const DrugCard = ({icon, name, dose, time, date}) => {
    return ( 
        <View style={styles.downloadContainer}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color="#404040" />
            </View>
            <View style={styles.d_c}>
                <SemiLightFont text={name}/>
                <LightFont text={dose}/>
            </View>
            <View style={styles.dd_c}>
                <LightFont text={date}/>
                <LightFont text={time}/>
            </View>
        </View>
     );
}

const VisitsCard = () => {
    return(
        <View style={styles.visitContainer}>
            <View style={styles.vd_container}>
                <SemiBoldFont text={'23.09'}/>
                <SemiLightFont text={'2023'}/>
            </View>
            <View style={styles.v_card}>
                <MediumFont text={'Fankyenebra Hospital'}/>
                <LightFont text={'Completion of treatment'}/>
                <MediumFont text={'Doctor'}/>
                <LightFont text={'Edna Konadu Donkoh'}/>
            </View>
        </View>
    );
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
        width: '100%',
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
        marginTop: 6
    },
    br: {
        width: 10,
    },
    textAlign: {
        position: 'absolute',
        left: (windowWidth/2.4),
        width: '90%',
    },
    optionsContainer: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
    },
    optionsContainerB: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    downloadContainer: {
        width: '100%',
        height: 64,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center'
    },
    di_container: {
        width: 42,
        height: 42,
        borderRadius: 8,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dd_c: {
        alignItems: 'flex-end',
        height: '100%',
        justifyContent: 'space-between'
    },
    d_c: {
        flex: 1,
        alignItems: 'flex-start',
        height: '100%',
        marginLeft: 8,
    },
    visitContainer: {
        width: '100%',
        height: 160,
        flexDirection:'row',
        alignItems: 'center',
    },
    v_card: {
        width: '78%',
        height: '90%',
        borderRadius: 10,
        backgroundColor: '#707070',
        justifyContent: 'space-between',
        padding: 12,
    },
    vd_container: {
        flex: 1,
        alignItems: 'center',
        marginRight: 8
    }
})

export {MainCard, NavCard, NavCard_s, ProfileCard, OptionsCard, SponsorCard, DownloadCard, DrugCard, VisitsCard}
