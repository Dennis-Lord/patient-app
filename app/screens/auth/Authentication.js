import { View, StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fontColor, iconColor } from '../../templates/template'
import { MediumFont, MiniFont, SemiLightFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'
import { auth, db } from '../../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'

export function Authentication ({navigation}) {
    
    const [val, setVal] = useState('')
    const [keyVal, setKeyVal] = useState('')
    const [change, setChange] = useState(false)
    const [mainHeader, setMainHeader] = useState('Create an account')
    const [btnText, setBtnText] = useState('Create account')
    const [question, setQuestion] = useState('Already have an account?')
    
    let emailValue = val
    let passValue = keyVal

    // set emailValue to equal email entered
    const handleEmail = (e) => {
        setVal(e)
        try {
            emailValue = val
            console.log(emailValue)
        } catch (error) {
            console.log(error)
        }
    }
    
    // set passValue to equal password entered
    const handlePassword = (e) => {
        setKeyVal(e)
        try {
            passValue = keyVal.nativeEvent.text
            console.log(passValue)
        } catch (error) {
            console.log(error)
        }
    }

    

    // handle state values when change state alters
    const handleStates = (c) => {
        if (c === false) {
            setChange(true)
            setMainHeader('Welcome back')
            setVal('')
            setKeyVal('')
            setBtnText('Log in')
            setQuestion('Don\'t have an account?')
        }else {
            setChange(false)
            setMainHeader('Create an account')
            setBtnText('Create account')
            setQuestion('Already have an account?')
        }
    }

    //  create account with email & password
    const CreateAccount = () => {
        createUserWithEmailAndPassword(auth, emailValue, passValue)
        .then((cred) => {
            setVal('')
            setKeyVal('')
            return setDoc(doc(db, "users", `${cred.user.uid}`), {
                test: 'success'
            })
        }).catch((err) => console.log(err))
    }

    // handle user log in
    const LogInUser = () => {
        signInWithEmailAndPassword(auth, emailValue, passValue)
        .then((cred) => {
            const user = cred;
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
            onChangeText={value => handleEmail(value)}
            focusable={true}
            maxLength={150}
            value={val}
            style={screenstyle.txtI}/>
        </View>
        <View style={screenstyle.inputWrapper}>
            <TextInput secureTextEntry={true} keyboardType='hidden-password'
            onChange={e => handlePassword(e)}
            value={keyVal}
            maxLength={150}
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