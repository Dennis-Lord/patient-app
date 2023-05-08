import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeroFont, LightFont, MediumFont, MiniFont } from '../../../components/Font-components'
import { wrapper, iconColor, fontColor, pallete } from '../../../templates/template'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { storage, db, auth } from '../../../../firebaseConfig';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { updateDoc, doc, arrayUnion, getDoc } from 'firebase/firestore';
// import * as FileSystem from 'expo-file-system';

const Documents = () => {
  const [document, setDocument] = useState(null)
  const [filesList, setFilesList] = useState()
  const [err, setErr] = useState(false)
  const [toggle, setToggle] = useState({
    link: '',
    state: false
  })

  const documentPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
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
    if (document == null) {
      return
    }else {
      const res = await fetch(document.uri);
      const f = await res.blob()
      const fileRef = ref(storage, 'docs/' + document.name)
      uploadBytes(fileRef, f, {name: document.name}).then(() => {
        const metaData = {name: document.name, size: document.size};
        const initials = doc(db, 'records', auth.currentUser.uid)
        updateDoc(initials, {
          "documents": arrayUnion(metaData)
        }).then(() => {
          setDocument('success')
        })
      }, (err) => {
        console.log(err)
      })
    }
  }

  useEffect( () => {
    const docRef = doc(db, 'records',  `${auth.currentUser.uid}`);
    getDoc(docRef).then(snapshot => {
      if(snapshot.exists()) {
        const userDoc = snapshot.data().documents
        setFilesList(userDoc)
      }
    }).catch(e => {
      setFilesList('error')
    })
  }, [])

  const getList = async () => {
    const docRef = doc(db, 'records',  `${auth.currentUser.uid}`);
    await getDoc(docRef).then(snapshot => {
      if(snapshot.exists()) {
          const userDoc = snapshot.data().documents
          setFilesList(userDoc)
          console.log(userDoc)
      }
    }).catch(e => {
      setFilesList('error')
    })
  }

  // const downloadFile = async(fileName) => {
  //   const name = fileName
  //   const fileRef = ref(storage, `docs/${fileName}`)
  //   const b = getDownloadURL(fileRef).then(async (url) => {

  //     const downloadResumable = FileSystem.createDownloadResumable(
  //       url,
  //       FileSystem.documentDirectory + fileName
  //     );;

  //     const { uri } = await downloadResumable.downloadAsync();
  //     console.log('Finished downloading to ', uri);
  //     const p = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync()
  //     console.log(p)
  //     if(p.granted) {
  //       await FileSystem.copyAsync({
  //         from: uri,
  //         to: p.directoryUri,
  //       });
  //     }
      
  //   }).catch(e => console.log('err: '+ e))
  // }

  const toggleLink = async (fileName) => {
    const fileRef = ref(storage, `docs/${fileName}`)
    if (toggle.state === false) {
    await getDownloadURL(fileRef).then((url) => {
        setToggle({
          link: url,
          state: true
        })
      }).catch((e) => {
        const err = e;
      })
    }
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={'Documents'} tc={fontColor.w}/>
        </View>
        <View style={[styles.wrapper, wrapper.bw]}>
          <View style={styles.addBtn}>
            <MediumFont text={'Add file'} tc={pallete.black}/>
            <TouchableOpacity style={{width: 34, height: 34, borderRadius: 7, backgroundColor: pallete.gray, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}} onPress={() => documentPicker()}>
              <MaterialCommunityIcons name='file-plus-outline' size={24} color={fontColor.w}/>
            </TouchableOpacity>
          </View>
          <View style={styles.pdfContainer}>
            {
              document != null && document != {type: 'cancel'} && document != 'success' && err != true ?
                <View style={styles.pdfWrapper}>
                  <MaterialCommunityIcons name='file-pdf-box' size={50} color={pallete.red}/>
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
              <MediumFont text={'File should have the postfix .doc/.pdf'} tc={pallete.red}/>
              :
              document == 'success' ?
              <MediumFont text={'File uploaded successfully'} tc={pallete.black}/>
              :
              <MediumFont text={'Select a file to upload...'} tc={pallete.black}/>
            }
          </View>

          <View style={{width: '100%', paddingHorizontal: 10, alignItems: 'flex-end'}}>
            { document == null ?
              <></>
              :
              <View style={styles.addBtn}>
              <MediumFont text={'Upload file'} tc={pallete.black}/>
              <TouchableOpacity onPress={() => uploadFile()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <AntDesign name="upload" size={24} color={pallete.black} />
              </TouchableOpacity>
            </View>
            }
          </View>

          <View style={styles.addBtn}>
              <MediumFont text={'Refresh'} tc={pallete.black}/>
              <TouchableOpacity onPress={() => getList()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <MaterialCommunityIcons name="refresh" size={24} color={pallete.black} />
              </TouchableOpacity>
            </View>
            {
              toggle.link != '' ?
              <View style={styles.clip}>
                <View style={styles.cancelWrapper}>
                <MediumFont text={'Copy download link'}/>
                  <TouchableOpacity onPress={() => setToggle({link: '', state: false})}>
                    <MaterialCommunityIcons name="close-circle" size={30} color={pallete.black} />
                  </TouchableOpacity>
                </View>
                <TextInput style={styles.linkWrapper} value={toggle.link}/>
              </View>
              :
              <></>
            }
          <View style={styles.filesWrapper}>
              {
                filesList === undefined || filesList == [] ?
                <MediumFont text={"😓 Files haven't been backed up"} tc={pallete.black}/>
                :
                filesList == 'error' ?
                <MediumFont text={"😓 Error getting files."} tc={pallete.black}/>
                :
                <FlatList
                  data={filesList}
                  renderItem={({item}) =>
                  <View style={styles.pdfWrapperb}>
                     <MaterialCommunityIcons name='file-pdf-box' size={50} color={pallete.red}/>
                     <View style={{justifyContent: 'space-evenly', marginLeft: 10}}>
                       <LightFont text={item.name + '...'} tc={pallete.black}/>
                         {
                           item.size <= 999999 ?
                           <MiniFont text={item.size + 'kB'} tc={pallete.black}/>
                           :
                           <MiniFont text={item.size + 'Mb'} tc={pallete.black}/>
                         }
                     </View>
                     <TouchableOpacity onPress={() => toggleLink(item.name)} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: fontColor.w, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                       <AntDesign name="download" size={24} color={pallete.black} />
                     </TouchableOpacity>
                   </View>
                }
                  />
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
    backgroundColor: pallete.greenB
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  pdfContainer: {
    width: '100%',
    height: 100,
    backgroundColor: pallete.tint,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pdfWrapper: {
    width: '90%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'flex-start',
    backgroundColor: pallete.white,
    borderRadius: 10,
    alignItems: 'center'
  },
  pdfWrapperb: {
    width: '98%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'space-between',
    backgroundColor: pallete.tint,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5
  },
  filesWrapper: {
    height: 100,
    justifyContent: 'center',
    flexGrow: 1
  },
  clip: {
    width: 344,
    height: 100,
    borderRadius: 8,
    backgroundColor: fontColor.w,
    zIndex: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: pallete.tint,
    top: 200
  },
  cancelWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  linkWrapper: {
    width: '98%',
    height: 32,
    paddingHorizontal: 10,
    fontSize: 24,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius:6
  }
})