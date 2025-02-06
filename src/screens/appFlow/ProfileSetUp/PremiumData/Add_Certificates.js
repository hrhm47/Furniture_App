import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel, images} from '../../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import LableInput from '../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../components/MainButton';
import DateTime from '../../../../components/DateTime';
const Add_Certificates = () => {
  const navigation = useNavigation();
  const CertificatesItem = useRoute()?.params;
  const updateButton = CertificatesItem?.updateButton;
  const experienceCard = CertificatesItem?.experienceCard;

  console.log('CertificatesItem', experienceCard);
  const [certificateTitle, setCertificateTitle] = useState('');
  const [certificateInstitute, setCertificateInstitute] = useState('');
  // const [certificateDate, setCertificateDate] = useState('');
  const [certificateDesc, setCertificateDesc] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [FromselectedDate, setFromSelectedDate] = useState('');

  useEffect(() => {
    setCertificateTitle(
      CertificatesItem ? CertificatesItem?.CertificatesItem?.title : '',
    );
    setCertificateInstitute(
      CertificatesItem ? CertificatesItem?.CertificatesItem?.institueName : '',
    );
    setCertificateDesc(
      CertificatesItem ? CertificatesItem?.CertificatesItem?.description : '',
    );
    updateButton && setSelectedDate(new Date()),
      setFromSelectedDate(new Date());
  }, []);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <HeaderButton
          title={
            experienceCard
              ? 'Edit Experience'
              : `${updateButton ? 'Edit' : 'Add'} Certificates`
          }
          leftOnPress={() => navigation.goBack()}
          rightImage={images.trash}
          rightPress={() => {
            setSelectedDate('');
            setCertificateInstitute('');
            setCertificateTitle('');
            setCertificateDesc('');
            setSelectedDate('');
            setFromSelectedDate('');
          }}
        />
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled
            scrollToOverflowEnabled
            contentContainerStyle={{paddingBottom: heightPixel(100)}}>
            <KeyboardAwareScrollView
              nestedScrollEnabled={true}
              enableOnAndroid={true}
              showsVerticalScrollIndicator={false}
              scrollEnabled
              contentContainerStyle={[{alignItems: 'center'}]}>
              <LableInput
                title={'Title'}
                PlaceHolder={'Product Knowledge Expertise'}
                onChangeText={setCertificateTitle}
                value={certificateTitle}
                secureTextEntry={null}
              />
              <LableInput
                title={'Institute'}
                PlaceHolder={'[Institue Name]'}
                onChangeText={setCertificateInstitute}
                value={certificateInstitute}
                secureTextEntry={null}
              />
              <DateTime
                label={experienceCard ? 'From Date' : 'Date'}
                mode={'date'}
                selected={FromselectedDate}
                placeholder={'dd/mm/yy'}
                onSelect={date => {
                  setFromSelectedDate(date);
                }}
              />
              {experienceCard && (
                <>
                  <DateTime
                    label={'To Date'}
                    mode={'date'}
                    selected={selectedDate}
                    placeholder={'dd/mm/yy'}
                    onSelect={date => {
                      setSelectedDate(date);
                    }}
                  />
                  <LableInput
                    title={'Location'}
                    PlaceHolder={'[New York, America]'}
                    onChangeText={setCertificateInstitute}
                    value={certificateInstitute}
                    secureTextEntry={null}
                  />
                </>
              )}

              <LableInput
                title={'Description'}
                PlaceHolder={'Product Knowledge Expertise'}
                multiline={true}
                inputStyle={styles.inputStyle}
                onChangeText={setCertificateDesc}
                value={certificateDesc}
                secureTextEntry={null}
              />
            </KeyboardAwareScrollView>
          </ScrollView>
        </View>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={updateButton || experienceCard ? 'Update' : 'Add'}
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

export default Add_Certificates;
