import {
  Alert,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './styles';
import AppBackground from '../../../components/AppBackground';
import Header from '../../../components/Header';
import AppText from '../../../components/AppText';
import LableInput from '../../../components/LabelInput';
import ProfilePicture from '../../../components/ProfilePicture';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../assets';
import MainButton from '../../../components/MainButton';
import {Routes, StackNames} from '../../../navigation/Routes';
import {
  CommonActions,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CoverImage from '../../../components/CoverImage';
import {uploadImage} from '../../../utils/methods/CameraFunctions';

const PremiumData = [
  {id: 1, title: 'Years in the Industry', route: Routes.YEARSININDUSTRY},
  // {id: 2, title: 'Accomplishments', route: Routes.EDIT_ACCOMPLISHMENTS},
  {id: 2, title: 'Accomplishments', route: Routes.VIEW_ACCOMPLISHMENTS},
  {id: 3, title: 'Email & Phone Display', route: Routes.EDIT_EMAIL_PHONE},
  // {id: 4, title: 'Add Certificate', route: Routes.ADD_CERTIFICATES},
  {id: 4, title: 'Add Certificate', route: Routes.VIEW_CERTIFICATES},
  // {id: 5, title: 'Profile Framing', route: Routes.SUBSCRIPTION},
];

const CreateProfile = () => {
  const navigation = useNavigation();
  const {comapanyName} = useRoute()?.params;
  // console.log("company ", comapanyName)

  const [ProfilePic, setProfilePic] = useState('');
  const [CoverPic, setCoverPic] = useState('');
  const [FullName, setFUllName] = useState('');
  const [ComapnyName, setComapnyName] = useState('');
  const [UserPosition, setUserPosition] = useState('');
  const [comfortPreference, setComfortPreference] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');

  useEffect(() => {
    setComapnyName(comapanyName ? comapanyName : '');
  }, []);

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
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <Header title={'BEDNET'} />
        <KeyboardAwareScrollView
          pinchGestureEnabled={false}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          style={styles.keyboardAwareScrollView}>
          <AppText
            body={'Complete your profile setup.'}
            style={[styles.preferenceText, {marginHorizontal: widthPixel(10)}]}
          />
          <ProfilePicture
            onPress={profilePhoto}
            ProfilePic={ProfilePic}
            setProfilePic={setProfilePic}
          />
          <LableInput
            title={'Full Name'}
            PlaceHolder={'Enter name'}
            value={FullName}
            onChangeText={text => setFUllName(text?.trim())}
            secureTextEntry={null}
          />
          <LableInput
            title={'Company'}
            PlaceHolder={'Company'}
            value={ComapnyName}
            onChangeText={text => setComapnyName(text?.trim())}
            secureTextEntry={null}
          />
          <CoverImage
            onPress={CoverPhoto}
            CoverPic={CoverPic}
            setCoverPic={setCoverPic}
          />
          <LableInput
            title={'Position'}
            PlaceHolder={'Position'}
            value={UserPosition}
            onChangeText={text => setUserPosition(text?.trim())}
            secureTextEntry={null}
          />
          <LableInput
            title={'What is your mattress comfort preference?'}
            PlaceHolder={'Mattress name'}
            value={comfortPreference}
            onChangeText={text => setComfortPreference(text?.trim())}
            secureTextEntry={null}
          />
          <LableInput
            title={'City'}
            PlaceHolder={'City'}
            value={City}
            onChangeText={text => setCity(text?.trim())}
            secureTextEntry={null}
          />
          <LableInput
            title={'Country'}
            PlaceHolder={'Country'}
            value={Country}
            onChangeText={text => setCountry(text?.trim())}
            secureTextEntry={null}
          />
          <AppText
            body={'Premium'}
            style={{
              fontSize: fontSize.HEADING3,
              marginTop: heightPixel(20),
              paddingLeft: widthPixel(10),
            }}
          />

          <View
            style={[
              styles.topView,
              {
                marginBottom: heightPixel(120),
                paddingHorizontal: widthPixel(5),
              },
            ]}>
            {PremiumData?.map((item, index) => {
              return (
                <View style={styles.FlatView} key={item.id}>
                  <AppText
                    body={item.title}
                    style={[styles.preferenceText, {color: colors.black}]}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      item.route === ''
                        ? Alert.alert('Profile Frame Design is Not Available')
                        : navigation.navigate(item.route)
                    }>
                    <Image
                      source={images.addMore}
                      style={{width: 18, height: 18}}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </KeyboardAwareScrollView>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Continue'}
          buttonColor={colors.lightGrey}
          textColor={colors.grey}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: StackNames.BOTTOMTABWITHDRAWER}],
              }),
            );
          }}
        />
      </View>
    </>
  );
};

export default CreateProfile;
