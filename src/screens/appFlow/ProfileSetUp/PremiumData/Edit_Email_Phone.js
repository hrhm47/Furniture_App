import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel, images, widthPixel} from '../../../../assets';
import {useNavigation} from '@react-navigation/native';
import LableInput from '../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../components/MainButton';
import AppText from '../../../../components/AppText';
import CustomPhoneNumberInput from '../../../../components/CustomPhoneInput';
const Edit_Email_Phone = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={'Add Certificates'}
          leftOnPress={() => navigation.goBack()}
          rightImage={images.trash}
          rightPress={() => {
            // console.log('constac ', contactNumber);
            setEmail('');
            setPhoneNumber('');
          }}
        />

        {/* <View style={styles.topView}> */}
        <KeyboardAwareScrollView
          nestedScrollEnabled={true}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: 'center',
          }}>
          <View style={styles.EditCertificatesView}>
            <LableInput
              title={'Email'}
              PlaceHolder={'peter@email.com'}
              onChangeText={text => setEmail(text?.trim())}
              value={email}
              keyboardType="email-address"
              secureTextEntry={null}
            />
            <View style={{}}>
              <AppText
                body={'Contact'}
                style={[
                  styles.preferenceText,
                  {paddingLeft: widthPixel(10), marginBottom: heightPixel(3)},
                ]}
              />
              <CustomPhoneNumberInput
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        {/* </View> */}
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Add'}
          buttonColor={colors.black}
          textColor={colors.white}
          // onPress={() => {
          //   navigation.navigate(Routes.VERIFY_OTP);
          // }}
        />
      </View>
    </>
  );
};

export default Edit_Email_Phone;
