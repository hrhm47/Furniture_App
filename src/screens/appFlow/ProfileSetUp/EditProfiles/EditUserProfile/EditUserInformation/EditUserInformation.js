import {
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
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../../../../components/AppText';
import {styles} from './styles';
import ProfilePicture from '../../../../../../components/ProfilePicture';
import {uploadImage} from '../../../../../../utils/methods/CameraFunctions';
import CoverImage from '../../../../../../components/CoverImage';
import AppBackground from '../../../../../../components/AppBackground';
import {colors, heightPixel} from '../../../../../../assets';
import LableInput from '../../../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomPhoneNumberInput from '../../../../../../components/CustomPhoneInput';
import DateTime from '../../../../../../components/DateTime';
import MainButton from '../../../../../../components/MainButton';

const EditUserInformation = () => {
  const navigation = useNavigation();
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

  return (
    <>
      <AppBackground
        style={{
          backgroundColor: colors.background,
          atpaddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={'Edit Profile'}
          isDivider={false}
          leftOnPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          contentContainerStyle={{paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <KeyboardAwareScrollView
              pinchGestureEnabled={false}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="always"
              showsVerticalScrollIndicator={false}
              style={styles.keyboardAwareScrollView}>
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
                PlaceHolder={'Full Name'}
                title={'Full Name'}
                secureTextEntry={null}
              />
              <LableInput
                PlaceHolder={'Position'}
                title={'Position'}
                secureTextEntry={null}
              />
              <LableInput
                title={'City'}
                PlaceHolder={'City'}
                secureTextEntry={null}
              />
              <LableInput
                title={'Country'}
                PlaceHolder={'Country'}
                secureTextEntry={null}
              />

              <DateTime
                label="Years in industry"
                mode="date"
                placeholder={'mm/yyyy'}
                currentDate={new Date()}
                selected={selectYears}
                onSelect={date => {
                  setSelectYears(new Date(date));
                }}
              />
              <LableInput
                title={'Email'}
                PlaceHolder={'email'}
                secureTextEntry={null}
              />
              <View style={{marginVertical: heightPixel(5)}}>
                <AppText
                  body={'Phone Number'}
                  style={[styles.textStyle, {marginBottom: heightPixel(8)}]}
                />
                <CustomPhoneNumberInput
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                />
              </View>
              <View
                style={{
                  marginVertical: heightPixel(5),
                  marginBottom: heightPixel(80),
                }}>
                <AppText
                  body={'About'}
                  style={[styles.textStyle, {marginBottom: heightPixel(8)}]}
                />
                <TextInput
                  placeholder="About"
                  placeholderTextColor={colors.imageGrey}
                  keyboardAppearance="default"
                  scrollEnabled={true}
                  multiline={true}
                  style={styles.aboutInput}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        </ScrollView>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Update'}
          buttonColor={colors.darkBlack}
          textColor={colors.white}
          onPress={() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: StackNames.BOTTOMTAB}],
            // });
          }}
        />
      </View>
    </>
  );
};

export default EditUserInformation;
