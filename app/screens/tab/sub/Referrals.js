import { View, StyleSheet, ScrollView} from 'react-native'
import * as React from 'react';
import { HeroFont, MediumFont, SemiFont, SemiLightFont } from '../../../components/Font-components'
import { iconColor, wrapper, fontColor } from '../../../templates/template';

const Referrals = ({navigation}) => {
    return (
      <View style={styles.screenView}>
        <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={'Fankyenbra Hospital'} tc={fontColor.w}/>
        </View>
        <View style={[styles.wrapper, wrapper.bw]}>
          <View style={styles.subH}>
            <MediumFont text={'Referral form'}/>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>  
          <View style={styles.details}>
            <SemiLightFont text={'To'}/>
            <View style={styles.br} />
            <SemiFont text={''}/>
          </View>
          <View style={styles.details}>
            <SemiLightFont text={'Name of patient'}/>
            <View style={styles.br} />
            <SemiFont text={''}/>
          </View>
          <View style={styles.details}>
            <SemiLightFont text={'Age'}/>
            <View style={styles.br} />
            <SemiFont text={''}/>
          </View>
          <View style={styles.details}>
            <SemiLightFont text={'Sex'}/>
            <View style={styles.br} />
            <SemiFont text={''}/>
          </View>
          <View style={styles.details}>
            <SemiLightFont text={'Name of doctor'}/>
            <View style={styles.br} />
            <SemiFont text={''}/>
          </View>
          <View style={styles.details_}>
            <SemiLightFont text={'Clinical summary of history'}/>
            <View style={styles.textArea}>
                <SemiFont text={''}/>
            </View>
          </View>
          <View style={styles.details_}>
            <SemiLightFont text={'Referring diagnosis'}/>
            <View style={styles.textArea}>
                <SemiFont text={''}/>
            </View>
          </View>
          <View style={styles.details_}>
            <SemiLightFont text={'Investigations and management'}/>
            <View style={styles.textArea}>
                <SemiFont text={''}/>
            </View>
          </View>
          <View style={styles.details_}>
            <SemiLightFont text={'Duration of management'}/>
            <View style={styles.textArea}>
                <SemiFont text={''}/>
            </View>
          </View>
          <View style={styles.details_}>
            <SemiLightFont text={'Specific reason for referral'}/>
            <View style={styles.textArea}>
                <SemiFont text={''}/>
            </View>
          </View>
          <View>
            <SemiLightFont text={'Signature & stamp'}/>
          </View>
          </ScrollView>
          </View>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    screenView: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: iconColor.gbgd
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 20,
    },
    subH: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 16,
    },
    details: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 6,
        flexWrap: 'wrap'
    },
    details_: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: 6,
        flexWrap: 'wrap',
    },
    br: {
        width: 20,
    },
    textArea: {
        width: '100%',
        minHeight: 80,
        paddingVertical: 10,
    }
  });

export default Referrals;