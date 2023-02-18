import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LightFont, SemiLightFont, MediumFont, MiniFont } from '../../../../components/Font-components'
import { DrugCard, InvestigationCard } from '../../../../components/Card-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { iconColor, inv_data } from '../../../../templates/template';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

const SecondRoute = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 
      <View style={styles.dateFrameContainer}>
        <View style={styles.downloadWrapper}>
          <LightFont text={'begun'}/>
          <SemiLightFont text={'02.04.2022'}/>
        </View>
        <View style={styles.downloadWrapper}>
          <LightFont text={'ended'}/>
          <SemiLightFont text={'02.04.2022'}/>
        </View>
      </View>  
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Recommendations"}/>
        <LightFont text={"Isolation"}/>
        <LightFont text={"Bed rest"}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Medications"}/>
        <DrugCard icon={'bottle-tonic'} name={'Drug name'} date={'02.03.2023'} dose={'10ml'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Start doses"}/>
        <DrugCard icon={'pill'} name={'Johnson & Johnson'} date={'02.03.2023'} dose={'12ml, oral'} time={'2:20pm'}/>
      </View>
      <View style={styles.diagnosisContainer}>
        <MediumFont text={"Infusions"}/>
        <DrugCard icon={'iv-bag'} name={'Johnson & Johnson'} date={'02.03.2023'} dose={'12ml, iv-bag'} time={'2:20pm'}/>
      </View>
      <MediumFont text={"Medical analysis"}/>
      <Transitioning.View 
      ref={ref}
      transition={transition}
      style={styles.container}
      >
        {
          inv_data.map(({n}, index) => {
            return (
              <View style={styles.collapsible}>
                <View style={styles.c_t}>
                  <View>
                    <SemiLightFont text={'Blood test'}/>
                    <MiniFont text={'23.04.2021'}/>
                  </View>
                  <TouchableOpacity onPress={() => {
                    ref.current.animateNextTransition();
                    setCurrentIndex(index === currentIndex ? null : index);
                  }}>
                    <MaterialCommunityIcons name={index === currentIndex ? 'chevron-up-circle' : 'chevron-down-circle'} size={28} color={iconColor.bgd}/>
                  </TouchableOpacity>
                </View>
                {index === currentIndex && (n.map((n) => <InvestigationCard test={n}/>))}
              </View>
            )
          })
        }
      </Transitioning.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    marginTop: 8,
  },
  dateFrameContainer: {
    width: '100%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
diagnosisContainer: {
  width: '100%',
  marginTop: 12
},
collapsible: {
  width: '100%',
  padding: 8,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: iconColor.c,
  marginVertical: 10,
},
c_t: {
  borderBottomWidth: 2,
  borderColor: iconColor.c,
  paddingBottom: 8,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: 10,
}
})

export default SecondRoute
