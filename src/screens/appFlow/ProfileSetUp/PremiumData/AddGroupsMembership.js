import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel} from '../../../../assets';
import {styles} from './styles';
import LableInput from '../../../../components/LabelInput';
import {
  AlphabetValidations,
} from '../../../../utils/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTime from '../../../../components/DateTime';
import {useNavigation} from '@react-navigation/native';
import CoverImage from '../../../../components/CoverImage';
import {uploadImage} from '../../../../utils/methods/CameraFunctions';
import AppText from '../../../../components/AppText';

const AddGroupsMembership = () => {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState('');
  const [groupYear, setGroupYear] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderButton
        title={'Add Groups & Memberships'}
        isDivider={false}
        leftOnPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.keyboardAwareScrollView,
          {alignItems: 'center', paddingBottom: '5%'},
        ]}>
        <AppText
          body={'Cover Image'}
          style={[
            styles.preferenceText,
            {paddingLeft: 18, marginTop: heightPixel(10)},
          ]}
        />
        <CoverImage
          CoverPic={coverPhoto}
          setCoverPic={setCoverPhoto}
          onPress={() => uploadImage(setCoverPhoto)}
          fromEditingUserProfile={true}
        />

        <LableInput
          title={'Name'}
          PlaceHolder={'Enter group name'}
          onChangeText={text =>
            AlphabetValidations.test(text) && setGroupName(text?.trimStart())
          }
          value={groupName}
          secureTextEntry={null}
        />
        <DateTime
          label={'Year'}
          mode={'date'}
          iconShow={true}
          selected={groupYear}
          year={true}
          placeholder={'yyyy'}
          onSelect={date => {
            setGroupYear(date);
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddGroupsMembership;
