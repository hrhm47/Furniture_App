import {
  Alert,
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import Header from '../../../components/Header';
import {styles} from './styles';
import AppText from '../../../components/AppText';
import {colors, heightPixel, widthPixel} from '../../../assets';
import * as Progress from 'react-native-progress';
import {useNavigation, useRoute} from '@react-navigation/native';
import LableInput from '../../../components/LabelInput';
import {Routes, StackNames} from '../../../navigation/Routes';
import {validateFullName} from '../../../utils/validations';

const OnBoarding4 = () => {
  const navigation = useNavigation();
  const {progressValue} = useRoute()?.params;
  // console.log('progressValue', progressValue);
  const [value, setValue] = useState(null);

  const [comapanyName, setCompanyName] = useState('');

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}
        onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <Header title={'BEDNET'} />
        <View
          style={{
            marginTop: heightPixel(10),
            alignSelf: 'center',
          }}>
          <AppText
            body={'What is your company name?'}
            style={[styles.heading]}
          />
          <LableInput
            PlaceHolder={'Company Name'}
            title={'Company Name'}
            onChangeText={setCompanyName}
            value={comapanyName}
            secureTextEntry={null}
          />
        </View>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <Progress.Bar
          progress={comapanyName !== '' ? progressValue + 0.2 : progressValue}
          width={widthPixel(380)}
          color={colors.pink}
          borderColor={colors.grey}
          borderWidth={0}
          style={{backgroundColor: colors.imageGrey}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <AppText
            body={'Skip'}
            onPress={() =>
              navigation.navigate(StackNames.PROFILESTACK, {
                screen: Routes.CREATEPROFILE,
                params: {comapanyName},
              })
            }
            style={{textDecorationLine: 'underline', color: colors.grey}}
          />
          <TouchableOpacity
            onPress={() => {
              if (validateFullName(comapanyName)) {
                navigation.navigate(StackNames.PROFILESTACK, {
                  screen: Routes.CREATEPROFILE,
                  params: {comapanyName},
                });
              }
            }}
            style={styles.rightbtn}>
            <AppText body={'Next'} style={styles.rightBtnText} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OnBoarding4;
