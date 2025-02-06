import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel, images} from '../../../../assets';
import {useNavigation} from '@react-navigation/native';
import LableInput from '../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../components/MainButton';
import {NumbersValidations} from '../../../../utils/validations';

const YearsInIndustry = () => {
  const navigation = useNavigation();

  const [years, setYears] = useState('');

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={'Years in Industry'}
          leftOnPress={() => navigation.goBack()}
          rightImage={images.trash}
          rightPress={() => {
            setYears('');
          }}
        />

        <View style={styles.topView}>
          {/* <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.keyboardAwareScrollView}> */}
          <LableInput
            title={'Years in industry'}
            PlaceHolder={'20'}
            onChangeText={text =>
              NumbersValidations?.test(text) && setYears(text)
            }
            value={years}
            keyboardType="number-pad"
            secureTextEntry={null}
          />
          {/* </KeyboardAwareScrollView> */}
        </View>
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

export default YearsInIndustry;
