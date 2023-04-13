import { View, StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fontColor, iconColor } from '../../templates/template'
import { HeroFont, MediumFont, MiniFont, SemiLightFont } from '../../components/Font-components'
import { OptionsCard } from '../../components/Card-components'
import { auth, db } from '../../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'

 function Authentication ({navigation}) {
    
    const [val, setVal] = useState('')
    const [keyVal, setKeyVal] = useState('')
    const [change, setChange] = useState(
        {
            state: false,
            header: 'Create an account',
            buttonText: 'Create account',
            question: 'Already have an account'
        }
    )
    const [authError, setAuthError] = useState({e: false, message: ''})
    
    let emailValue = val
    let passValue = keyVal

    // set emailValue to equal email entered
    const handleEmail = (e) => {
        setVal(e)
        try {
            emailValue = val;
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
        if (c.state === false) {
            setChange({
                state: true,
                header: 'Welcome back',
                buttonText: 'Log in',
                question: 'Don\'t have an account?'
            })
            setVal('')
            setKeyVal('')
            setAuthError({e: false, message: ''})
        }else {
            setChange({    
                state: false,
                header: 'Create an account',
                buttonText: 'Create account',
                question: 'Already have an account'
            })
            setAuthError({e: false, message: ''})
        }
    }

    //  create account with email & password
    const CreateAccount = () => {
        const tempData = {
            "hName": "Fankyenebra Hospital",
            "hLocation": {
                "country": "Ghana",
                "postal": "P.O.BOX KS 7162",
                "street": "Near Fankyenebra Basic School"
            },
            "hContact": ["0559120703", "0249744563"],
            "hEmail": "fankyenebrapower.hospital@yahoo.com",
            "hWebsite": "fankyenebrahospital.com",
            "patientProfile": {
                "dateGenerated": "02.02.2022",
                "name": "Anonymous User",
                "gender": "Male",
                "title": "Mr",
                "age": 25,
                "bloodType": "O",
                "sponsor": {
                    "name": "National Health Insurance Scheme",
                    "acronym": "NHIS",
                    "id": 76756567,
                    "verification": "verified",
                    "expiration": "05.06.2025"
                },
                "bodymeasurements": {
                    "weight": {
                        "dateRecorded": "22.04.2022",
                        "measure": 22,
                        "unit": "kg"
                    },
                    "height": {
                        "dateRecorded": "22.04.2022",
                        "measure": 164,
                        "unit": "cm"
                    }
                },
                "allergy": "Beans"
            },
            "medicalFolder": {
                "files": [
                    {
                        "disease": "",
                        "diagnosisDate": "",
                        "treatementStarted": "",
                        "treatementEnded": "",
                        "flag": "",
                        "practisioner": {
                            "name": "",
                            "title": "",
                            "notes": {
                                "notesDate": "",
                                "time": "",
                                "notes": ""
                            }
                        },
                        "diagnosis": "",
                        "complaints": "",
                        "examinations": {
                            "bodypart": "", 
                            "result": ""
                            },
                        "recommendations": [""],
                        "drugsAdministered": {
                            "startDoses": {
                                "date": "",
                                "time": "",
                                "drugName": "",
                                "route": "",
                                "dosage": ""
                            },
                            "infusions": {
                                "date": "", 
                                "time": "", 
                                "drugName": ""
                            },
                            "drugs": {
                                "drug": "",
                                "ofType": "",
                                "route": "",
                                "dose": ""
                            }
                        },
                        "fourHourChart": {
                            "date": "",
                            "temperature": {
                                "unit": "",
                                "measure": [
                                    {
                                        "time": "",
                                        "value": 0.0
                                    }
                                ]
                            },
                            "pulserate": {
                                "unit": "",
                                "measure": [
                                    {
                                        "time": "",
                                        "value": 0.0
                                    }
                                ]
                            },
                            "respirations": {
                                "measure": [
                                    {
                                        "time": "",
                                        "value": 0.0
                                    }
                                ]
                            }
                        },
                    }
                ],
                "analysisFiles": [
                    {
                        "analysisName": "",
                        "date": "",
                        "result": "Normal",
                        "lab": {
                            "name": "",
                            "street": ""
                        },
                        "ref": ""
                    }
                ],
                "referrals": [
                    {
                        "referredFrom": "Fankyenebra Hospital",
                        "referredTo": "Komfo Anokye Teaching Hopital",
                        "patient": {
                            "name": "",
                            "age": "",
                            "sex": ""
                        },
                        "nameOfDoctor": "",
                        "summary": "",
                        "diagnosis": "",
                        "investigationsAndManagement": "",
                        "durationOfManagement": "",
                        "reason": "",
                        "signatureAndStamp": ""
                    }
                ]
            }
        }
        createUserWithEmailAndPassword(auth, emailValue, passValue)
        .then((cred) => {
            setVal('')
            setKeyVal('')
            return setDoc(doc(db, "records", `${cred.user.uid}`), {
                account: {
                    name: `${cred.user.displayName}`,
                    email: `${cred.user.email}`,
                },
                medical_folders: [tempData],
                analysis_files: [],
                user_settings: {}
            })
        }).catch((err) => {
            const error = err;
            setAuthError({e: true, message: error.message.slice(9)})
        })
    }

    // handle user log in
    const LogInUser = () => {
        signInWithEmailAndPassword(auth, emailValue, passValue)
        .then((cred) => {
            return
        })
        .catch((err) => {
            const error = err;
            setAuthError({e: true, message: error.message.slice(9)})
        });
    }
  
    // handle sign up / log in session
    const handleAuth = () => {
        if (change.state === false) {
            CreateAccount()
        } else {
            LogInUser()
        }
    }

    return (
      <View style={screenstyle.screenView}>
        <HeroFont text={change.header} tc={fontColor.s}/>
        <View style={screenstyle.errorView}>
        {
            authError.e ? 
            <SemiLightFont tc={fontColor.r} text={authError.message}/>
            :
            <></>
        }
        </View>
        <View style={screenstyle.lb}/>
        <View style={screenstyle.inputWrapper}>
            <TextInput keyboardType='email-address' placeholder='Email address'
            onChangeText={value => handleEmail(value)}
            focusable={true}
            maxLength={150}
            value={val}
            autoCapitalize='none'
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
                <SemiLightFont text={change.buttonText} tc={fontColor.w}/>
            </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => handleStates(change)}>
            <MiniFont text={change.question} tc={fontColor.s}/>
        </TouchableOpacity>
        <View style={{height: 8}}/>
        <TouchableOpacity onPress={() => navigation.navigate('forgotPass', {emailValue})}>
            <MiniFont text={'Forgot password?'} tc={fontColor.p}/>
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
      backgroundColor: fontColor.w
    },
    lb: {
        width: '86%',
        height: 2,
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
    },
    errorView: {
        width: '90%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Authentication