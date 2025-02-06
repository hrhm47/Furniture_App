import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel} from '../../../../assets';
import {styles} from './styles';
import LableInput from '../../../../components/LabelInput';
import {AlphabetValidations} from '../../../../utils/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTime from '../../../../components/DateTime';
import {useNavigation} from '@react-navigation/native';
import CoverImage from '../../../../components/CoverImage';
import {uploadImage} from '../../../../utils/methods/CameraFunctions';
import AppText from '../../../../components/AppText';
import MainButton from '../../../../components/MainButton';
import {Routes} from '../../../../navigation/Routes';

const Edit_BusinessDetails = () => {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState('');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderButton
        title={'Edit Business Details'}
        isDivider={false}
        leftOnPress={() => navigation.goBack()}
      />

      <View>
        <LableInput
          title={'Shop link'}
          PlaceHolder={'link....'}
          // onChangeText={text =>
          //   AlphabetValidations.test(text) && setAccomTitle(text?.trimStart())
          // }
          // value={accomTitle}
          secureTextEntry={null}
        />
        <LableInput
          title={'Located at'}
          PlaceHolder={'Jeopardy Lane, Chicago'}
          // onChangeText={text =>
          //   AlphabetValidations.test(text) && setAccomTitle(text?.trimStart())
          // }
          // value={accomTitle}
          secureTextEntry={null}
        />
        <DateTime
          label={'Launched'}
          mode={'date'}
          selected={selectedYear}
          placeholder={'yyyy'}
          onSelect={date => {
            setSelectedYear(date);
          }}
        />
        <LableInput
          title={'Social page link'}
          PlaceHolder={'www.instagram.com/@urbandots'}
          // onChangeText={text =>
          //   AlphabetValidations.test(text) && setAccomTitle(text?.trimStart())
          // }
          // value={accomTitle}
          secureTextEntry={null}
        />
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Update'}
          buttonColor={colors.black}
          textColor={colors.white}
          onPress={() => {
            navigation.navigate(Routes.EDITCOMPANYPROFILE, {
              showBusinessModalOnUpdate: true,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Edit_BusinessDetails;
