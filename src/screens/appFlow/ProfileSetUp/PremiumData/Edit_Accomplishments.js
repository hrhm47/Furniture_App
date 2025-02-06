import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
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
import {
  AlphabetValidations,
  AlphaNumericValidations,
} from '../../../../utils/validations';
const Edit_Accomplishments = () => {
  const navigation = useNavigation();
  const AccomplishmentItem = useRoute()?.params;
  const updateButton = AccomplishmentItem?.updateButton;

  // console.log('afg', updateButton);

  const [accomTitle, setAccomTitle] = useState('');
  const [accomDesc, setAccomDesc] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setAccomTitle(
      AccomplishmentItem ? AccomplishmentItem?.AccomplishmentItem?.title : '',
    );
    setAccomDesc(
      AccomplishmentItem
        ? AccomplishmentItem?.AccomplishmentItem?.description
        : '',
    );
    setSelectedDate(AccomplishmentItem ? new Date() : '');
  }, []);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <HeaderButton
          title={`${updateButton ? 'Edit' : 'Add'} Accomplishments`}
          leftOnPress={() => navigation.goBack()}
          rightImage={images.trash}
          rightPress={() => {
            setSelectedDate('');
            setAccomDesc('');
            setAccomTitle('');
            setSelectedDate('');
          }}
        />

        {/* <View style={styles.topView}> */}
        <KeyboardAwareScrollView
          nestedScrollEnabled={true}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.keyboardAwareScrollView,
            {alignItems: 'center', paddingBottom: '5%'},
          ]}>
          <LableInput
            title={'Title'}
            PlaceHolder={'Product Knowledge Expertise'}
            onChangeText={setAccomTitle}
            value={accomTitle}
            secureTextEntry={null}
          />
          <DateTime
            label={'Date'}
            mode={'date'}
            selected={selectedDate}
            placeholder={'dd/mm/yy'}
            onSelect={date => {
              setSelectedDate(date);
            }}
          />
          <LableInput
            title={'Description'}
            PlaceHolder={'Product Knowledge Expertise'}
            multiline={true}
            inputStyle={styles.inputStyle}
            onChangeText={setAccomDesc}
            value={accomDesc}
            secureTextEntry={null}
          />
        </KeyboardAwareScrollView>
        {/* </View> */}
      </AppBackground>
      <View style={styles.bottomBtn}>
        <MainButton
          title={updateButton ? 'Update' : 'Add'}
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

export default Edit_Accomplishments;
