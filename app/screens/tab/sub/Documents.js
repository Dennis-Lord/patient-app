import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeroFont, LightFont, MediumFont, MiniFont } from '../../../components/Font-components'
import { wrapper, iconColor, fontColor } from '../../../templates/template'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { storage, db, auth } from '../../../../firebaseConfig';
import {ref,list, uploadBytes, getDownloadURL, getMetadata} from 'firebase/storage'
import { updateDoc, doc } from 'firebase/firestore';

const Documents = () => {
  const [document, setDocument] = useState(null)
  const [filesList, setFilesList] = useState({
    l: null,
    e: false
  })
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
        medical_folders: arrayUnion(metaData)
      })
    }, (err) => {
      console.log(err)
    })
  }

  const getList = async () => {
    const filesRef = ref(storage, 'docs/')
    const l = await list(filesRef, {maxResults: 10})
    const newList = [];

    // const docRef = doc(db, 'records',  `${auth.currentUser.uid}`);
    // await getDoc(docRef).then(snapshot => {
    //   if(snapshot.exists()) {
    //       const userDoc = snapshot.data()
    //       userDoc.medicalFolders.documents.map((d) => {
    //         const fileUrl = getDownloadURL(ref(storage, 'docs/' + d.name))
    //         const a = {
    //           name: d.name,
    //           size: d.size,
    //           url: fileUrl
    //         }
    //         newList.push(a)
    //       })
          
    //       setFilesList({
    //         l:newList,
    //         e: false
    //       })
    //     }
    //     else{
    //       setFilesList({
    //         l: {},
    //         e: false
    //       })
    //     }
    // }).catch(e => {
    //   setFilesList({
    //     e: true
    //   })
    // })
    
    // l.items.forEach((item) => {
    //   console.log(item)
    //   const url = getMetadata(ref(storage, 'docs/' + item._location.path_.slice(4)))
    //   console.log(url)
    // })
  }

  const downloadFile = async(url) => {
    const fileRef = ref(storage, `docs/${url}`)

    await getDownloadURL(fileRef)
      .then((url) => {
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
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
                  <MaterialCommunityIcons name='file-pdf-box' size={26} color={fontColor.r}/>
                  <LightFont text={document.name.slice(0,20)}/>
                    {
                      document.size <= 999999 ?
                      <MiniFont text={ `${document.size.toString().slice(0,2)}...` + 'kB'}/>
                      :
                      <MiniFont text={document.size.toString().slice(0,1) + 'Mb'}/>
                    }
                </View>
              
              :
              err == true ?
              <MediumFont text={'File should have the postfix .doc/.pdf'} tc={fontColor.r}/>
              :
              <MediumFont text={'Select a file to upload...'} tc={fontColor.p}/>
            }
          </View>
            <View style={styles.addBtn}>
              <MediumFont text={'Upload file'} tc={fontColor.p}/>
              <TouchableOpacity onPress={() => uploadFile()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <AntDesign name="upload" size={24} color={fontColor.p} />
            </TouchableOpacity>
          </View>

          <View style={styles.filesWrapper}>
            <TouchableOpacity onPress={() => getList()} style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
              <AntDesign name="download" size={24} color={fontColor.p} />
            </TouchableOpacity>

          {/* files loaded from cloud storage */}
          {
            filesList.l != null  && filesList.l != {} ?
            filesList.l.forEach((file) => {
              console.log(file);
              <View style={styles.pdfWrapper}>
                <MaterialCommunityIcons name='file-pdf-box' size={26} color={fontColor.r}/>
                <LightFont text={file.name} tc={fontColor.p}/>
                  <TouchableOpacity onPress={() => downloadFile(file.url)}  style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                    <AntDesign name="download" size={24} color={fontColor.p} />
                  </TouchableOpacity>
              </View>
            })
            :
            filesList.l == {} ?
            <MediumFont text={"No documents available"} tc={fontColor.p}/>
            :
            filesList.e ?
            <MediumFont text={"Error getting files"} tc={fontColor.p}/>
            :
            <></>
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
    width: '100%',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
    alignItems: 'baseline'
  },
  pdfContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pdfWrapper: {
    width: '90%',
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: fontColor.p,
    marginBottom: 6,
    alignItems: 'baseline'
  },
  filesWrapper: {
  }
})