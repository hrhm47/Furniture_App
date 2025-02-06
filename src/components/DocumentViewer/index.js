import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

import FileViewer from 'react-native-file-viewer';

import AppText from '../AppText';
import RNFS from 'react-native-fs';
import {colors, images} from '../../assets';

const DocumentViewer = ({documentLink}) => {
  const openDocument = async documentLink => {
    // Put your url here -----
    const url = documentLink;
    // -----

    // this will split the whole url. to get the name of document
    const f2 = documentLink.split('/');
    // console.log('spilit document f2', f2);

    // then get the file name with extention.
    const fileName = f2[f2.length - 1];
    // const fileExtention = url.split(".")[3];

    // create a local file path from url
    const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    const options = {
      fromUrl: url,
      toFile: localFile,
    };

    // last step it will download open it with fileviewer.
    RNFS.downloadFile(options)
      .promise.then(res => {
        // console.log('res', options);
        // const fileName = options.fromUrl.split('/');
        // console.log('haasd', fileName[fileName.length - 1].split('.')[0]);
        FileViewer.open(localFile, {
          showAppsSuggestions: true,
          showOpenWithDialog: true,
        });
      })
      .then(() => {
        console.log('document is viewed');
        // success
        // Here you can perform any of your completion tasks
      })
      .catch(error => {
        // error
      });
  };

  return (
    <View style={styles.topView}>
      <View style={styles.documentViewerTop}>
        <View style={styles.documentViewer}>
          <View style={styles.RFPTextView}>
            <AppText body={'Document Viewer'} style={styles.documentTitle} />
            <AppText
              body={'a new furniture shop project to be soon...'}
              style={styles.documentDescripton}
              numberOfLines={2}
            />
          </View>
          <View style={styles.imgView}>
            <Image source={images.RFP} style={styles.imgStyle} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.linkView}
          onPress={() => openDocument(documentLink)}>
          <AppText body={'Learn more '} style={styles.linkText} />
          <Image
            source={images.learnMore}
            style={styles.imgStylee}
            tintColor={colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentViewer;
