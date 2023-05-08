import React, {useState, useEffect} from "react"
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { wrapper, iconColor, fontColor, pallete } from "../../templates/template"
import { HeroFont, MiniFont, MediumFont, LightFont, SemiLightFont } from "../../components/Font-components"
import { MaterialIcons } from '@expo/vector-icons';
import {auth} from '../../../firebaseConfig'
import { deleteUser } from 'firebase/auth'
// import { Asset } from 'expo-asset';
// import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

const DetailsScreen = ({route}) => {
  const [loading, setLoading] = useState({s: true, m: ''})
  const [error, setError] = useState({e: false, m: ''})
  const user = auth.currentUser;
  const userProfile = {
    name: user.displayName,
    email: user.email,
    verified: user.emailVerified,
    photo: user.photoURL
  }

  // const [ready, setReady] = useState(false);
  //   const [image, setImage] = useState(null);

  //   useEffect(() => {
  //       (async () => {
  //       const image = Asset.fromModule(require(''));
  //       await image.downloadAsync();
  //       setImage(image);
  //       setReady(true);
  //       })();
  //   }, []);

  //   const _renderImage = () => (
  //       <View style={fHCStyles.imgWrapper}>
  //       <Image source={{ uri: image.localUri || image.uri }} style={fHCStyles.image} />
  //       </View>
  //   );

  const DeleteAccount = () => {
    deleteUser(user).then(() => {
      return
    }).catch((error) => {
      setError({e: true, m: error.message})
    });
  }

    const {option} = route.params
  
    return (
      
      <View style={styles.screenView}>
        <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={option} tc={pallete.white}/>
        </View>
        <View style={[wrapper.bw, styles.wrapper]}>
          <View style={styles.container}>
            {
              option === 'Privacy policy' ?
              <MiniFont text={'the policy'} />
              : option === 'About us'?
              <MiniFont text={'the about'} />
              : option === 'Help' ?
              <MiniFont text={'the help'} />
              : option === 'Account' ?
              <View style={styles.screen}>
              {
                error.e ? 
                <LightFont text={error.m}/>
                :
                <></>
              }
                <View style={styles.profile} />
                  <MediumFont text={'Name'} tc={fontColor.s}/>
                  <SemiLightFont text={userProfile.name}/>
                  <View style={styles.h}/>
                  <MediumFont text={'Email'} tc={fontColor.s}/>
                <View style={styles.emailWrapper}>
                  <MaterialIcons name={'verified'} size={24} color={pallete.greenB} />
                  <View style={styles.w}/>
                  <SemiLightFont text={userProfile.email}/>
                </View>
                <TouchableOpacity style={{width: 180, height: 38, borderRadius: 10, marginTop: 40}}>
                  <View style={styles.deleteBtn}>
                    <MediumFont text={'Delete account'} tc={pallete.white}/>
                  </View>
                </TouchableOpacity>
              </View>
              :
              <MiniFont text={'the faq'} />
            }
          </View>
        </View>
      </View>
    )
  }
  
const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    display: 'flex',
    backgroundColor: pallete.greenB,
  },
    wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: pallete.white,
    paddingTop: 10,
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: pallete.tint,
    marginBottom: 20,
  },
  deleteBtn: {
    flexGrow: 1,
    backgroundColor: pallete.red,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailWrapper: {
    width: '90%',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row'
  },
  w: {
    width: 14
  },
  h: {
    height: 10
  }
})

export default DetailsScreen
