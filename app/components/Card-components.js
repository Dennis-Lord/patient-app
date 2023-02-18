import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { LightFont, MediumFont, MiniFont, SemiBoldFont, SemiFont, SemiLightFont } from './Font-components'
import { fontColor, windowHeight, windowWidth } from '../templates/template'
import { iconColor } from '../templates/template'

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

const NavCard = ({cardText, nav, routeProps}) => {
    const r = routeProps.route
    const dataObject = routeProps.r_props

    return (
        <TouchableOpacity onPress={() => nav.navigate(r, {dataObject})}>
            <View style={styles.navCard}>
                <View style={styles.navtextPos}>
                    <MediumFont text={cardText}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const NavCard_s = ({cardText, nav, routeProps}) => {
    const r = routeProps.route
    const dataObject = routeProps.r_props
    return (
        <TouchableOpacity onPress={() => nav.navigate(r, {dataObject})}>
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
            <MaterialCommunityIcons name={icon} size={24} color={iconColor.c} />
            <View style={styles.br} />
            <MediumFont text={name}/>
            <View style={styles.textAlign}>
                <SemiFont text={value}/>
            </View>
        </View>
    )
}

const OptionsCard = ({iconName, option, o, s, tc, mic}) => {
    return(o === "a" ?
            <View style={styles.optionsContainer}>
            <MaterialCommunityIcons name={iconName} size={s} color={iconColor.c} />
            <View style={styles.br}/>
            <MediumFont text={option} tc={tc}/>
        </View> 
        : 
        o === "b" ?
        <View style={styles.optionsContainerB}>
            <MaterialCommunityIcons name={iconName} size={s} color={mic != null ? mic : iconColor.c} />
            <View style={styles.br}/>
            <SemiLightFont text={option} tc={tc}/>
        </View>
        :
        <View style={styles.optionsContainer}>
            <MaterialCommunityIcons name={iconName} size={s} color={mic !== '' || mic !== null ? mic : iconColor.c} />
            <View style={styles.br}/>
            <SemiFont text={option} tc={tc}/>
        </View> 
    )
}

const DownloadCard = () => {
    return ( 
        <View style={styles.downloadContainer}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={'download'} size={24} color={iconColor.c} />
            </View>
            <View style={styles.br} />
            <SemiLightFont text={'lab_report.pdf'}/>
        </View>
     );
}

const DrugCard = ({icon, name, dose, time, date}) => {
    return ( 
        <View style={styles.downloadContainer}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color={iconColor.c} />
            </View>
            <View style={styles.d_c}>
                <SemiLightFont text={name}/>
                <MiniFont text={dose}/>
            </View>
            <View style={styles.dd_c}>
                <MiniFont text={date}/>
                <MiniFont text={time}/>
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
                <MediumFont text={'Fankyenebra Hospital'} tc={fontColor.w}/>
                <LightFont text={'Completion of treatment'} tc={fontColor.w}/>
                <MediumFont text={'Doctor'} tc={fontColor.w}/>
                <LightFont text={'Edna Konadu Donkoh'} tc={fontColor.w}/>
            </View>
        </View>
    );
}

const AnalysisDetailsCard = ({icon, label, value, option}) => {
    return ( option === 'a' ? 
        <View style={styles.ad_Container}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color={iconColor.c} />
            </View>
            <View style={styles.d_c}>
                <LightFont text={label}/>
                <SemiLightFont text={value}/>
            </View>
        </View>
        :
        <View style={styles.ad_Container}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color={iconColor.c} />
            </View>
            <View style={styles.d_c}>
                <SemiLightFont text={label}/>
                <LightFont text={value}/>
            </View>
        </View>
     );
}

const InvestigationCard = ({test, resultObserved, flag, unit, refRange}) => {
    return ( 
        <View style={styles.i_c}>
            <View style={styles.i_c_l}>
                <SemiLightFont text={test}/>
                <LightFont text={'Normal'}/>
            </View>
            <View style={styles.i_c_r}>
                <LightFont text={'10^9L'} tc={'red'}/>
                <LightFont text={'4.0-10.0'}/>
            </View>
            <MaterialCommunityIcons name='arrow-up-circle' size={22} color={'red'}/>
        </View>
    );

}


const styles = StyleSheet.create({
    mainCard: {
        width: (windowWidth - 30),
        height: 149,
        backgroundColor: iconColor.bg,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: iconColor.bgd,
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
        borderRadius: 10,
        borderWidth: 2,
        borderColor: iconColor.bgd,
        padding: 6,
        marginBottom: 12,
        justifyContent: 'center',
    },
    navtextPos: {
        width: 160,
        height: 30,
        position: 'absolute',
        top: 6,
        left: 6
    },
    navCard_s: {
        width: (windowWidth/2.3),
        height: 105,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: iconColor.bgd,
        padding: 6,
        marginTop: 2,
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
        height: 58,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center'
    },
    ad_Container: {
        flexGrow: 1,
        height: 64,
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
        backgroundColor: iconColor.bg,
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
        minHeight: '80%',
        maxHeight: '100%',
        borderRadius: 10,
        backgroundColor: iconColor.gbgd,
        justifyContent: 'space-between',
        padding: 12,
    },
    vd_container: {
        flex: 1,
        alignItems: 'center',
        marginRight: 8
    },
    i_c: {
        width: '100%',
        height: 64,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: 'gray'
    },
    i_c_l: {
        width: '70%',
        height: '100%',
    },
    i_c_r: {
        flex: 1,
    },
    img: {
        width: 94,
        height: 76,
        position: 'absolute',
        right: 2,
    },
    img_s: {
        width: 80,
        height: 80,
        position: 'absolute',
        right: 4,
        zIndex: -1,
        top: 6,
    },

})

export {MainCard, NavCard, NavCard_s, ProfileCard, OptionsCard, SponsorCard, DownloadCard, DrugCard, VisitsCard, AnalysisDetailsCard, InvestigationCard}
