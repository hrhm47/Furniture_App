import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderButton from '../../../../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, heightPixel, images} from '../../../../../../assets';
import {styles} from './styles';
import AppText from '../../../../../../components/AppText';
import CoverImage from '../../../../../../components/CoverImage';
import {uploadImage} from '../../../../../../utils/methods/CameraFunctions';
import ProfilePicture from '../../../../../../components/ProfilePicture';
import AppBackground from '../../../../../../components/AppBackground';
import LableInput from '../../../../../../components/LabelInput';
import MainButton from '../../../../../../components/MainButton';
import {Routes} from '../../../../../../navigation/Routes';

const EditCompanyInformation = () => {
  const navigation = useNavigation();
  const ParamsFromProfile = useRoute()?.params;

  const [ProfilePic, setProfilePic] = useState('');
  const [CoverPic, setCoverPic] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectYears, setSelectYears] = useState(new Date());

  const profilePhoto = () => {
    uploadImage(setProfilePic);
  };

  const CoverPhoto = () => {
    uploadImage(setCoverPic);
  };

  //   console.log('focusOnOverView ', ParamsFromProfile?.focusOnOverView);
  //   console.log('creatingCompanyPage ', ParamsFromProfile?.creatingCompanyPage);

  return (
    <>
      <AppBackground
        style={{
          backgroundColor: colors.background,
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={'Company Details'}
          leftOnPress={() => navigation.goBack()}
          isDivider={false}
        />
        <ScrollView
          contentContainerStyle={{paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          <KeyboardAwareScrollView
            scrollsToTop={true}
            pinchGestureEnabled={false}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={styles.keyboardAwareScrollView}>
            <View style={styles.topView}>
              <View style={{marginTop: heightPixel(5)}}>
                <AppText body={'Profile Image'} style={styles.textStyle} />
                <ProfilePicture
                  onPress={profilePhoto}
                  ProfilePic={ProfilePic}
                  setProfilePic={setProfilePic}
                  fromEditingUserProfile={true}
                />
              </View>
              <View style={{marginTop: heightPixel(5)}}>
                <AppText body={'Cover Image'} style={styles.textStyle} />
                <CoverImage
                  onPress={CoverPhoto}
                  CoverPic={CoverPic}
                  setCoverPic={setCoverPic}
                  fromEditingUserProfile={true}
                />
              </View>
              <LableInput
                PlaceHolder={'Company Name'}
                title={'Company Name'}
                secureTextEntry={null}
              />
              <LableInput
                PlaceHolder={'add subtitle...'}
                title={'Subtitle'}
                secureTextEntry={null}
              />
              <View
                style={{
                  marginVertical: heightPixel(5),
                  marginBottom: heightPixel(80),
                }}>
                <View style={styles.diamondOverViewButton}>
                  <AppText
                    body={'Overview'}
                    style={[styles.textStyle, {marginBottom: heightPixel(8)}]}
                  />
                  <Image source={images.diamond} style={styles.diamondStyle} />
                </View>
                <TextInput
                  editable={true}
                  placeholder="Company Overview"
                  placeholderTextColor={colors.imageGrey}
                  keyboardAppearance="default"
                  scrollEnabled={true}
                  multiline={true}
                  style={styles.aboutInput}
                  autoFocus={ParamsFromProfile?.focusOnOverView ? true : false}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={ParamsFromProfile?.creatingCompanyPage ? 'Add' : 'Update'}
          buttonColor={colors.darkBlack}
          textColor={colors.white}
          onPress={() => {
            ParamsFromProfile?.creatingCompanyPage
              ? navigation.navigate(Routes.EDITCOMPANYPROFILE)
              : navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

export default EditCompanyInformation;
