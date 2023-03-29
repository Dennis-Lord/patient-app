import { StyleSheet, View, TextInput, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { wrapper } from '../../templates/template'
import { HeroFont, LightFont } from '../../components/Font-components'
import { fontColor } from '../../templates/template'
import { auth, sendPasswordResetEmail } from '../../../firebaseConfig'

const ForgotPassword = ({route}) => {
    const [email, setEmail] = useState(route.params.emailValue)
    const [resetError, setResetError] = useState({isError: false, errorMessage: ''})
    const [resetState, setResetState] = useState({state: false, message: ''})
    
    let emailValue = email

    // set emailValue to equal email entered
    const handleEmail = (e) => {
        setEmail(e)
        try {
            emailValue = email;
        } catch (error) {
            console.log(error)
        }
    }

    const ForgotPass = (email) => {
        // handle forgot password
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setResetState({state: true, message: 'Email sent'})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setResetError({isError: true, errorMessage: errorMessage})
        });
        console.log(email)
    }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {position: 'relative', right: '30%',}]}>
        <HeroFont text={'Forgot Password'} tc={fontColor.w}/>
        {
            resetState.state ? 
            setTimeout(() => {
                <LightFont text={resetState.message} tc={fontColor.p}/>
            }, 3000)
            :
            resetError.isError ?
            setTimeout(() => {
                <LightFont text={resetError.errorMessage} tc={fontColor.r} />
            }, 3000)
            :
            <></>
        }
      </View>
      <View style={styles.inputWrapper}>
            <TextInput keyboardType='email-address' placeholder='Enter email'
            onChangeText={value => handleEmail(value)}
            focusable={true}
            maxLength={150}
            value={val}
            style={styles.txtI}/>
        </View>
        <TouchableNativeFeedback onPress={() => ForgotPass(email)}>
            <View style={styles.accBtn}>
                <SemiLightFont text={btnText} tc={fontColor.w}/>
            </View>
        </TouchableNativeFeedback>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        paddingTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fontColor.w
      },
      inputWrapper: {
        width: '90%',
        height: 46,
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 10,
    },
    txtI: {
        fontSize: 16,
        paddingHorizontal: 20,
        fontWeight: '600',
        width: '100%',
        height: '100%'
    },
    accBtn: {
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: iconColor.gbgd,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14
    }
})