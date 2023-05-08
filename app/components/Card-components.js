import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { LightFont, MediumFont, MiniFont, SemiBoldFont, SemiFont, SemiLightFont, LFb, HeroFont } from './Font-components'
import { iconColor, fontColor, windowWidth, pallete } from '../templates/template'
import { storage } from '../../firebaseConfig'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ref, getDownloadURL } from 'firebase/storage'
import { Ionicons, Fontisto } from '@expo/vector-icons';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

// card components for main screen

const MainCard = () => {
  return (
    <View style={styles.mainCard}></View>
  )
}

const NavCard = ({cardText, nav, routeProps}) => {
    const r = routeProps.route

    return (
        <TouchableOpacity style={{height: '24%'}} onPress={() => nav.navigate(r, {routeProps})}>
            <View style={styles.navCard}>
                <View style={styles.navtextPos}>
                    <MediumFont text={cardText} tc={pallete.black}/>
                </View>
                {
                    cardText == 'Medical history' ?
                    <Ionicons name="folder-outline" size={80} color={pallete.greenB} />
                    :
                    <Fontisto name="test-tube" size={60} color={pallete.greenB} />
                }
            </View>
        </TouchableOpacity>
    )
}

const NavCard_s = ({cardText, nav, routeProps}) => {
    const r = routeProps.route
    return (
        <TouchableOpacity style={{flexGrow: 1, height: '84%'}} onPress={() => nav.navigate(r, {routeProps})}>
            <View style={styles.navCard_s}>
                <View style={styles.navtextPos_s}>
                    <MediumFont text={cardText}/>
                </View>
            {
                    cardText == 'Documents' ?
                    <Ionicons name="document-attach-outline" size={50} color={pallete.greenB} />
                    :
                    <MaterialCommunityIcons name="file-document-edit-outline" size={50} color={pallete.greenB} />
                }
            </View>
        </TouchableOpacity>
    )
}

const ProfileCard = ({name, value, icon}) => {
    return(
        <View style={styles.profileCardContainer}>
            <MaterialCommunityIcons name={icon} size={24} color={pallete.darkG} />
            <View style={styles.br} />
            <MediumFont text={name} tc={pallete.darkG}/>
            <View style={styles.textAlign}>
                <LFb text={value}/>
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

const DownloadCard = (fileUrl) => {
    const downloadRef = ref(storage, 'docs/' + fileUrl)

    const downloadFile = async () => {
        await getDownloadURL(downloadRef)
        .then((url) => {
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
        const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        })
    }

    return ( 
        <View style={styles.downloadContainer}>
            <TouchableOpacity onPress={() => downloadFile()}>
                <View style={styles.di_container}>
                    <MaterialCommunityIcons name={'download'} size={24} color={iconColor.c} />
                </View>
            </TouchableOpacity>
            <View style={styles.br} />
            <LFb text={'lab_report.pdf'}/>
        </View>
     );
}

const DrugCard = ({icon, name, dose, time, date, color}) => {
    return ( 
        <View style={styles.downloadContainer}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={22} color={color} />
            </View>
            <View style={styles.d_c}>
                <LightFont text={name}/>
                <MiniFont text={dose}/>
            </View>
            <View style={styles.dd_c}>
                <MiniFont text={date}/>
                <MiniFont text={time}/>
            </View>
        </View>
     );
}

const VisitsCard = ({data}) => {
    return(
        <View style={styles.visitContainer}>
            <View style={styles.vd_container}>
                <SemiBoldFont text={'23.09'} tc={pallete.black}/>
                <SemiLightFont text={'2023'} tc={pallete.tintGray}/>
            </View>
            <View style={styles.v_card}>
                {/* <SemiLightFont text={'Fankyenebra Hospital'} tc={fontColor.w}/> */}
                <MediumFont text={'Completion of treatment'} tc={pallete.white}/>
                <MiniFont text={data.practisioner.title} tc={pallete.white}/>
                <LightFont text={data.practisioner.name} tc={pallete.white}/>
            </View>
        </View>
    );
}

const AnalysisDetailsCard = ({icon, label, value, option, color}) => {
    return ( option === 'a' ? 
        <View style={styles.ad_Container}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color={color} />
            </View>
            <View style={styles.d_c}>
                <LightFont text={label}/>
                <SemiLightFont text={value}/>
            </View>
        </View>
        :
        <View style={styles.ad_Container}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={icon} size={24} color={color} />
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

const FourHourChart = ({chart}) => {
    const {temperature} = chart.fourHourChart
    const {pulserate} = chart.fourHourChart
    const {respirations} = chart.fourHourChart

    return (
        <View style={fHCStyles.wrapper}>
            <SemiBoldFont text={'Four Hour Chart'} tc={pallete.tintGray}/>
            <View style={{height: 6}}/>
            <MediumFont text={'Temperature'} tc={pallete.darkG}/>
            <View style={fHCStyles.container}>
                <View style={fHCStyles.imgWrapper}>
                    <Ionicons name="md-thermometer" size={24} color={pallete.red} />
                </View>
                <View style={{marginRight: 4,}}>
                {
                    temperature.measure.map((rate, i) => 
                        <HeroFont key={i} text={rate.value} tc={pallete.black}/>
                    )
                }
                </View>
                <MiniFont text={temperature.unit}/>
            </View>
            <MediumFont text={'Pulserate'} tc={pallete.darkG}/>
            <View style={fHCStyles.container}>
                <View style={fHCStyles.imgWrapper}>
                    <Ionicons name="pulse-sharp" size={24} color={pallete.greenB} />
                </View>
                <View style={{marginRight: 4,}}>
                {
                    pulserate.measure.map((rate, i) => 
                        <HeroFont key={i} text={rate.value} tc={pallete.black}/>
                    )
                }
                </View>
                <MiniFont text={pulserate.unit}/>
            </View>
            <MediumFont text={'Respirations'} tc={pallete.darkG}/>
            <View style={fHCStyles.container}>
                <View style={fHCStyles.imgWrapper}>
                    <MaterialCommunityIcons name="lungs" size={24} color={pallete.blue} />
                </View>
                <View style={{marginRight: 4,}}>
                {
                    respirations.measure.map((rate, i) => 
                        <HeroFont key={i} text={rate.value} tc={pallete.black}/>
                    )
                }
                </View>
                <MiniFont text={respirations.unit}/>
            </View>
            <LightFont text={chart.fourHourChart.date}/>
        </View>
    )
}


const styles = StyleSheet.create({
    mainCard: {
        width: '100%',
        height: 136,
        backgroundColor: pallete.greenB,
        borderRadius: 10,
        marginBottom: 16
    },
    navCard: {
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: pallete.tint,
        padding: 8,
        marginBottom: 10,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 30,
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
        height: '55%',
        borderRadius: 10,
        backgroundColor: pallete.tint,
        padding: 6,
        marginTop: 2,
    },
    navtextPos_s: {
        position: 'absolute',
        width: 160,
        height: 30,
        bottom: 6,
        left: 10
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
        MaxHeight: 58,
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 4,
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
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: pallete.tint,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dd_c: {
        alignItems: 'flex-end',
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
        height: 120,
        flexDirection:'row',
        alignItems: 'center',
    },
    v_card: {
        width: '78%',
        minHeight: '80%',
        maxHeight: '100%',
        borderRadius: 10,
        backgroundColor: pallete.greenB,
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

const fHCStyles = StyleSheet.create({
    wrapper: {
        width: '90%',
        height: '80%',
        borderRadius: 14,
        backgroundColor: pallete.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        zIndex: 2,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 20,
        borderColor: pallete.tint,
        borderBottomWidth: 7,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1
    },
    container: {
        width: '100%',
        marginHorizontal: 8,
        flexDirection: 'row',
        height: 70,
        marginVertical: 10
    },
    imgWrapper: {
        width: 42,
        height: 42,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        overflow: 'hidden',
        backgroundColor: "#e5e5e5"
    },
})

export {MainCard, NavCard, NavCard_s, ProfileCard, OptionsCard, DownloadCard, DrugCard, VisitsCard, AnalysisDetailsCard, InvestigationCard, FourHourChart}
