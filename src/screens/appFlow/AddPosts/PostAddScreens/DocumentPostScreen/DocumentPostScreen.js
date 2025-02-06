import {
  Image,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import {colors, heightPixel, images} from '../../../../../assets';
import HeaderButton from '../../../../../components/HeaderButton';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import DocumentPicker from 'react-native-document-picker';
import PdfThumbnail from 'react-native-pdf-thumbnail';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import MainButton from '../../../../../components/MainButton';
import {StackNames} from '../../../../../navigation/Routes';

const DocumentPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [documentPath, setDocumentPath] = useState('');

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );

  const PickDocumentFromFile = async () => {
    try {
      const {uri} = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.docx,
          DocumentPicker.types.doc,
        ],
      });
      setDocumentPath(uri);
      const result = await PdfThumbnail.generate(uri, 0, 100);
      setThumbnail(result.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        setThumbnail(undefined);
      }
    }
  };

  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={
          paramsData?.headingName ? 'Add Request For Proposal' : 'Add Document'
        }
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          contentContainerStyle={{paddingBottom: heightPixel(120)}}>
          <View style={{marginBottom: heightPixel(10)}}>
            <RichInputField
              placeHolder={'Add caption/thoughts...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTypedThoughts}
            />
          </View>
          {thumbnail ? (
            <View style={styles.ImageView}>
              <View>
                <Image
                  source={{uri: thumbnail}}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <TouchableOpacity
                style={styles.crossIconView}
                onPress={() => {
                  setThumbnail('');
                  setDocumentPath('');
                }}>
                <Image
                  source={images.crossIcons}
                  style={styles.crosIconStyle}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ImageView}>
              <TouchableOpacity onPress={() => PickDocumentFromFile()}>
                <Image
                  source={images.add}
                  style={styles.iconStyle}
                  tintColor={colors.imageGrey}
                />
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={
              userTypedThoughts?.length > 0 ? colors.white : colors.grey
            }
            title={'Post'}
            buttonColor={
              userTypedThoughts?.length > 0 ? colors.black : colors.lightGrey
            }
            onPress={
              () =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: StackNames.DISCOVERSTACK,
                    },
                  ],
                })
              // [navigation.navigate(StackNames.DISCOVERSTACK)]
            }
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default DocumentPostScreen;
