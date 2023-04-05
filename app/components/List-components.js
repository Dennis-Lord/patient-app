import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { fontColor, windowWidth } from '../templates/template'
import { LightFont, MediumFont, SemiLightFont } from './Font-components'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { iconColor } from '../templates/template';
import { OptionsCard } from './Card-components';

const FlagComponent = ({flag}) => {
  let tc;
  if (flag === 'in process') {
    tc = fontColor.b
  } else {
    tc = fontColor.gd
  }
  return (
    <View style={styles.flagContainer}>
      <SemiLightFont text={flag} tc={tc}/>
    </View>
  )
}



const FilterFileCard = ({nav, route, data}) => {
  const [press, setpress] = useState(null)

  const dataFile = data;

  const handleOptionButton = () => {
    if(press === null) {
       setpress('show')
    }else{
      setpress(null)
    }
  }
  
  return (<>
    <TouchableOpacity onPress={() => nav.navigate(route, {dataFile})}>
      <View style={styles.cardContainer}>
        <View style={styles.lc}>
          <LightFont text={"Edna Konadu Donkoh"}/>
          <MediumFont text={"Coronavirus"}/>
        </View>
        <View style={styles.rc}>
          <View style={styles.uc}>
            <FlagComponent flag={"completed"}/>
            <TouchableOpacity onPress={()=>handleOptionButton()}>
              <MaterialCommunityIcons name="dots-vertical" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <LightFont text={"since 20.04.2022"}/>
        </View>
      </View>
    </TouchableOpacity>
    {
      press === 'show' ? <View style={styles.optContainer}>
          <MoreOptions />
        </View> : <></>
    }
      </>
  )
}

const MoreOptions = () => {
  return(
    <View style={styles.moreOptContainer}>
      <TouchableOpacity>  
        <OptionsCard  iconName={'download'} option={'Download'} s={24} tc={fontColor.p} mic={iconColor.gbgd}/>
      </TouchableOpacity>
      <TouchableOpacity>  
        <OptionsCard  iconName={'share'} option={'Share'} s={24}  tc={fontColor.p} mic={iconColor.gbgd}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: (windowWidth/4),
        height: 36,
        backgroundColor: iconColor.bgw,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '100%',
        height: 105,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: iconColor.bgd,
        padding: 6,
        marginBottom: 12,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    flagContainer: {
      width: 102,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
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
    },
    moreOptContainer: {
      width: 160,
      height: 80,
      borderRadius: 14,
      backgroundColor: fontColor.w,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      borderWidth: 2,
      borderColor: iconColor.bg,
    },
    optContainer: {
      position: 'absolute',
      right: 30,
      top: 10,
    }
})

export { FilterFileCard, MoreOptions}
