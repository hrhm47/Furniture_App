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
import HeaderButton from '../../../../../components/HeaderButton';
import AppBackground from '../../../../../components/AppBackground';
import {colors, heightPixel, images} from '../../../../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AppText from '../../../../../components/AppText';
import {uploadImage} from '../../../../../utils/methods/CameraFunctions';
import MainButton from '../../../../../components/MainButton';
import CustomDropDown from '../../../../../components/CustomDropDown/CustomDropDown';
import {StackNames} from '../../../../../navigation/Routes';

const dropDownArray = [
  {
    key: '3rwefw',
    name: 'Project Launch',
  },
  {
    key: 'ivyb',
    name: 'Certification',
  },
  {
    key: '776vtyn',
    name: 'Achievement',
  },
];

const CelebrationPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [celebrationPhoto, setCelebrationPhoto] = useState('');
  const [userTypedThoughts, setUserTypedThoughts] = useState('');
  const [openDropDownModal, setOpenDropDownModal] = useState(false);

  const [seletedCelebrations, setSelectedCelebration] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );
  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Add Media'}
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
          <View style={{}}>
            <AppText
              body={'Select Purpose'}
              style={{marginBottom: heightPixel(15)}}
            />
            <View
              style={
                openDropDownModal && {
                  top: heightPixel(40),
                  marginBottom: heightPixel(10),
                  position: 'absolute',
                  zIndex: 100,
                }
              }>
              <CustomDropDown
                dropDownArray={dropDownArray}
                selectedServices={seletedCelebrations}
                setSelectedServices={setSelectedCelebration}
                setOpenDropDownModal={setOpenDropDownModal}
                openDropDownModal={openDropDownModal}
                multiSelction={false}
                lastHeadingTitle={
                  seletedCelebrations?.length >= 1
                    ? seletedCelebrations[0]?.name
                    : 'Select...'
                }
              />
            </View>
          </View>
          {!openDropDownModal && (
            <>
              {celebrationPhoto ? (
                <View style={styles.ImageView}>
                  <Image
                    source={{uri: celebrationPhoto}}
                    style={styles.imageStyle}
                    borderRadius={10}
                    resizeMethod="auto"
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    style={styles.crossIconView}
                    onPress={() => setCelebrationPhoto('')}>
                    <Image
                      source={images.crossIcons}
                      style={styles.crosIconStyle}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.ImageView}>
                  <TouchableOpacity
                    onPress={() => uploadImage(setCelebrationPhoto)}>
                    <Image
                      source={images.add}
                      style={styles.iconStyle}
                      tintColor={colors.imageGrey}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </>
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

export default CelebrationPostScreen;
