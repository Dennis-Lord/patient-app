import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeroFont, LightFont, MediumFont, MiniFont } from '../../../components/Font-components'
import { wrapper, iconColor, fontColor } from '../../../templates/template'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { storage, db, auth } from '../../../../firebaseConfig';
import {ref,list, uploadBytes, getDownloadURL, getMetadata} from 'firebase/storage'
import { updateDoc, doc, arrayUnion, getDoc } from 'firebase/firestore';

const Documents = () => {
  const [document, setDocument] = useState(null)
  const [filesList, setFilesList] = useState()
  const [err, setErr] = useState(false)

  const documentPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log(result)
    if (result.mimeType == "application/pdf") {
      setErr(false)
      setDocument(result)
    }else if (result.mimeType == "application/msword"){
      setErr(false)
      setDocument(result)
    }else if (result.mimeType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      setErr(false)
      setDocument(result)
    }else if (result.type == 'cancel' ) {
      setErr(false)
    }else {
      setErr(true)
    }
  }

  const uploadFile = async () => {
    const res = await fetch(document.uri);
    const f = await res.blob()
    const fileRef = ref(storage, 'docs/' + document.name)
    uploadBytes(fileRef, f, {name: document.name}).then(() => {
      const metaData = {name: document.name, size: document.size};
      const initials = doc(db, 'records', auth.currentUser.uid)
      updateDoc(initials, {
        "medical_folders.documents": arrayUnion(metaData)
      })
    }, (err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    const filesRef = ref(storage, 'docs/')
    const l = list(filesRef, {maxResults: 10})
    const docRef = doc(db, 'records',  `${auth.currentUser.uid}`);
    const newList = [];

    getDoc(docRef).then(snapshot => {
      if(snapshot.exists()) {
          const userDoc = snapshot.data()
          userDoc.medical_folders.documents.map((d) => {
              let a = {
                name: d.name,
                size: d.size,
              }
              newList.push(a)
            })
            setFilesList(newList)
        }
        else{
          setFilesList({})
        }
    }).catch(e => {
      setFilesList('error')
    })
  }, [])

  const getList = async () => {
    const filesRef = ref(storage, 'docs/')
    const docRef = doc(db, 'records',  `${auth.currentUser.uid}`);
    const newList = [];

    getDoc(docRef).then(snapshot => {
      if(snapshot.exists()) {
          const userDoc = snapshot.data()
          userDoc.medical_folders.documents.map((d) => {
              let a = {
                name: d.name,
                size: d.size,
              }
              newList.push(a)
            })
            setFilesList(newList)
        }
        else{
          setFilesList({})
        }
    }).catch(e => {
      setFilesList('error')
    })
  }

  const downloadFile = async(fileName) => {
    const fileRef = ref(storage, `docs/${fileName}`)
    await getDownloadURL(fileRef)
      .then((url) => {
      // This can be downloaded directly:
      // console.log(url)
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = 'blob';
      // xhr.onload = (event) => {
      //   const blob = xhr.response;
      // };
      // xhr.open('GET', url);
      // xhr.send();
    })
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={'Documents'} tc={fontColor.w}/>
        </View>
        <View style={[styles.wrapper, wrapper.bw]}>
          <View style={styles.addBtn}>
            <MediumFont text={'Add file'} tc={fontColor.p}/>
            <TouchableOpacity style={{width: 36, height: 36, borderRadius: 10, backgroundColor: iconColor.gbgd, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}} onPress={() => documentPicker()}>
              <MaterialCommunityIcons name='file-plus-outline' size={28} color={fontColor.w}/>
            </TouchableOpacity>
          </View>
          <View style={styles.pdfContainer}>
            {
              document != null && document != {type: 'cancel'} && err != true ?
                <View style={styles.pdfWrapper}>
                  <MaterialCommunityIcons name='file-pdf-box' size={50} color={fontColor.r}/>
                  <View style={{justifyContent: 'space-evenly', marginLeft: 10}}>
                    <LightFont text={document.name.slice(0,25)}/>
                      {
                        document.size <= 999999 ?
                        <MiniFont text={document.size.toString().slice(0,2) + 'kB'}/>
                        :
                        <MiniFont text={document.size.toString().slice(0,1) + 'Mb'}/>
                      }
                  </View>
                </View>
              
              :
              err == true ?
              <MediumFont text={'File should have the postfix .doc/.pdf'} tc={fontColor.r}/>
              :
              <MediumFont text={'Select a file to upload...'} tc={fontColor.p}/>
            }
          </View>

          <View style={{width: '100%', paddingHorizontal: 10, alignItems: 'flex-end'}}>
            <View style={styles.addBtn}>
              <MediumFont text={'Upload file'} tc={fontColor.p}/>
              <TouchableOpacity onPress={() => uploadFile()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <AntDesign name="upload" size={24} color={fontColor.p} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.addBtn}>
              <MediumFont text={'Refresh'} tc={fontColor.p}/>
              <TouchableOpacity onPress={() => getList()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <MaterialCommunityIcons name="refresh" size={24} color={fontColor.p} />
              </TouchableOpacity>
            </View>
          <View style={styles.filesWrapper}>
            {  
              <ScrollView style={{width: '100%', height: '100%', paddingVertical: 10, paddingHorizontal: 5}} showsVerticalScrollIndicator={false}>
              {
                filesList != undefined ?
                filesList.map((file, i) =>
                  <View style={styles.pdfWrapperb} key={i}>
                    <MaterialCommunityIcons name='file-pdf-box' size={50} color={fontColor.r}/>
                    <View style={{justifyContent: 'space-evenly', marginLeft: 10}}>
                      <LightFont text={`${file.name.slice(0, 20)}...`} tc={fontColor.p}/>
                        {
                          file.size <= 999999 ?
                          <MiniFont text={file.size + 'kB'} tc={fontColor.p}/>
                          :
                          <MiniFont text={file.size + 'Mb'} tc={fontColor.p}/>
                        }
                    </View>
                    <TouchableOpacity onPress={() => downloadFile(file.name)} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: fontColor.w, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                      <AntDesign name="download" size={24} color={fontColor.p} />
                    </TouchableOpacity>
                  </View>
                )
                :
                filesList === 'error' ?
                <MediumFont text={"Error getting files"} tc={fontColor.p}/>
                :
                <></>
              }
              </ScrollView>
            }
          </View>
        </View>
    </View>
  )
}

export default Documents

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: iconColor.gbgd
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  addBtn: {
    width: 130,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'flex-end'
  },
  pdfContainer: {
    width: '100%',
    height: 120,
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pdfWrapper: {
    width: '90%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  pdfWrapperb: {
    width: '98%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'space-between',
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5
  },
  filesWrapper: {
    height: 100,
    justifyContent: 'center',
    flexGrow: 1
  }
})