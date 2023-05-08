import { StyleSheet, View, TextInput, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { pallete, wrapper } from '../../templates/template'
import { HeroFont, LightFont, SemiLightFont } from '../../components/Font-components'
import { fontColor, iconColor } from '../../templates/template'
import { auth } from '../../../firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'

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
            setEmail('')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setResetError({isError: true, errorMessage: errorMessage})
        });
    }

    

  return (
    <View style={styles.screenView}>
        <HeroFont text={'Forgot Password'} tc={pallete.black}/>
      <View style={styles.errorView}>
        {
            resetState.state ? 
            <LightFont text={resetState.message} tc={pallete.black}/>
            :
            resetError.isError ?
            <LightFont text={resetError.errorMessage} tc={pallete.red} />
            :
            <></>
        }
      </View>
      <View style={styles.inputWrapper}>
            <TextInput keyboardType='email-address' placeholder='Enter email'
            onChangeText={value => handleEmail(value)}
            focusable={true}
            maxLength={150}
            value={emailValue}
            style={styles.txtI}/>
        </View>
        <TouchableNativeFeedback onPress={() => ForgotPass(email)}>
            <View style={styles.accBtn}>
                <SemiLightFont text={'Submit'} tc={pallete.white}/>
            </View>
        </TouchableNativeFeedback>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: pallete.tintG
      },
      inputWrapper: {
        width: '90%',
        height: 46,
        backgroundColor: pallete.white,
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
        backgroundColor: pallete.greenB,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14
    },
    errorView: {
        width: '90%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 3
    }
})