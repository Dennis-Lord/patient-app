import { Text, View, StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fontColor, iconColor } from '../../templates/template'
import { MediumFont, MiniFont, SemiLightFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'
import { auth } from '../../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";




export function Authentication () {
    let emailValue = ''
    let passValue = ''

    const [val, setVal] = useState('')
    const [keyVal, setKeyVal] = useState('')

    const handleEmail = (e) => {
        setVal(e)
        emailValue = val.nativeEvent.text
        console.log(emailValue)
    }
    
    const handlePassword = (e) => {
        setKeyVal(e)
        passValue = keyVal.nativeEvent.text
        console.log(passValue)
    }

    const [change, setChange] = useState(false)
    const [mainHeader, setMainHeader] = useState('Create an account')
    const [btnText, setBtnText] = useState('Create account')
    const [question, setQuestion] = useState('Already have an account')

    // handle state values when change state alters
    const handleStates = (c) => {
        if (c === false) {
            setMainHeader('Create an account')
            setBtnText('Create account')
            setChange(true)
        }else {
            setMainHeader('Welcome back')
            setBtnText('Log in')
            setQuestion('Don\'t have an account?')
            setChange(false)
        }
    }

    // function to create user account
    const CreateAccount = () => {
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailValue, passValue).then((credentials) => {
            const user = credentials;
            console.log(user)
            console.log('creation successful')
        }).catch((error) => {
            const errorCode = error.code
            const message = error.message
            console.log(error)
            console.log(errorCode)
            console.log(message)
        })
    }

    // handle user log in
    const LogInUser = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailValue, passValue)
        .then((cred) => {
            const user = cred;
            console.log(user)
            console.log('log in successful')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
  
    // handle sign up / log in session
    const handleAuth = () => {
        if (change === false) {
            CreateAccount()
        } else {
            LogInUser()
        }
    }

    return (
      <View style={screenstyle.screenView}>
        <MediumFont text={mainHeader} tc={fontColor.s}/>
        <View style={screenstyle.lb}/>
        <View style={screenstyle.inputWrapper}>
            <TextInput keyboardType='email-address' placeholder='Email address'
            onChange={e => handleEmail(e)}
            value={val}
            style={screenstyle.txtI}/>
        </View>
        <View style={screenstyle.inputWrapper}>
            <TextInput secureTextEntry={true} keyboardType='hidden-password'
            onChange={e => handlePassword(e)}
            value={keyVal}
            placeholder='Password' style={screenstyle.txtI}/>
        </View>
        <TouchableNativeFeedback onPress={() => handleAuth()}>
            <View style={screenstyle.accBtn}>
                <SemiLightFont text={btnText} tc={fontColor.w}/>
            </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => handleStates(change)}>
            <MiniFont text={question} tc={'gray'}/>
        </TouchableOpacity>
        <View style={screenstyle.lb}/>
        <TouchableNativeFeedback>
            <View style={screenstyle.btn}>
                <OptionsCard mic={fontColor.w} option={'Continue with Google'} iconName={'google'} s={22} o={'b'} tc={'white'}/>
            </View>
        </TouchableNativeFeedback>
      </View>
    )
}

const screenstyle = StyleSheet.create({
    screenView: {
      flex: 1,
      paddingTop: 70,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: iconColor.bgw
    },
    lb: {
        width: '86%',
        height: 1,
        borderRadius: 10,
        backgroundColor: '#000',
        marginVertical: 20,
    },
    accBtn: {
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: iconColor.gbgd,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14
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
    btn: {
        backgroundColor: iconColor.gbgd, 
        borderRadius: 10, 
        width: 300, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Authentication