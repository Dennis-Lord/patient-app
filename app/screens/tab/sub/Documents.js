import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeroFont, LightFont, MediumFont, MiniFont } from '../../../components/Font-components'
import { wrapper, iconColor, fontColor } from '../../../templates/template'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as DocumentPicker from 'expo-document-picker';

const Documents = () => {
  const [document, setDocument] = useState(null)
  const [err, setErr] = useState(false)

  const documentPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log(result)
    if (result.mimeType == "application/pdf") {
      setErr(false)
    }else if (result.mimeType == "application/msword"){
      setErr(false)
    }else if (result.mimeType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      setErr(false)
    }else {
      setErr(true)
    }
    setDocument(result)
  }

  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();
  // Create a storage reference from our storage service
  const storageRef = ref(storage);



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
          {
            document != null & err != true ?
            <View style={styles.pdfWrapper}>
              <MaterialCommunityIcons name='file-pdf-box' size={26} color={fontColor.r}/>
              <LightFont text={document.name.slice(0,20)}/>
              {
                document.size <= 999999 ?
                <MiniFont text={ `${document.size.toString().slice(0,2)}` + 'kB'}/>
                :
                <MiniFont text={document.size.toString().slice(0,2) + 'Mb'}/>
              }
            </View>
            :
            err == true ?
            <MediumFont text={'File should have the prefix .doc/.pdf'} tc={fontColor.r}/>
            :
            <></>
          }
            <View style={styles.addBtn}>
              <MediumFont text={'Upload file'} tc={fontColor.p}/>
              <TouchableOpacity style={{width: 32, height: 32, borderRadius: 10, backgroundColor: iconColor.bg, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4}}>
                <AntDesign name="upload" size={24} color={fontColor.p} />
            </TouchableOpacity>
          </View>

          {/* files loaded from cloud storage */}
          <View style={styles.filesWrapper}>

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
    marginVertical: 16
  },
  pdfWrapper: {
    width: '90%',
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: fontColor.p,
    marginBottom: 6
  },
  filesWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
})