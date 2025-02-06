import {
  Alert,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import Header from '../../../components/Header';
import {styles} from './styles';
import AppText from '../../../components/AppText';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import * as Progress from 'react-native-progress';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import Toast from 'react-native-toast-message';

const howYouCome = [
  {
    id: 1,
    name: 'Administration',
  },
  {
    id: 2,
    name: 'Customer Service',
  },
  {
    id: 3,
    name: 'Executive Leadership',
  },
  {
    id: 4,
    name: 'Financing and Accounting',
  },
  {
    id: 5,
    name: 'Human Resources',
  },
  {
    id: 6,
    name: 'Industry Service',
  },
  {
    id: 7,
    name: 'Learning and Development',
  },
  {
    id: 8,
    name: 'Logistics and Distribution',
  },
  {
    id: 9,
    name: 'Loss Prevention',
  },
];

const OnBoarding3 = () => {
  const navigation = useNavigation();
  const {progressValue} = useRoute()?.params;
  // console.log('progressValue', progressValue);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(true);
  const [progressData, setProgressData] = useState(0.6);

  const [selected, setSelected] = useState('');

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <Header title={'BEDNET'} />
        <View style={styles.topView}>
          <AppText
            body={'What is your current department?'}
            style={[styles.heading, {marginLeft: widthPixel(15)}]}
          />

          <ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.keyboardAwareScrollView,
              {paddingBottom: '35%'},
            ]}>
            {howYouCome?.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSelected(item.name)}
                  style={styles.onboarding2Listing}>
                  <Image
                    source={
                      selected == item.name
                        ? images.radioConfirm
                        : images.radioSelect
                    }
                    style={styles.icon}
                  />
                  <Text style={styles.headerText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <Progress.Bar
          progress={selected !== '' ? progressValue + 0.3 : progressValue}
          width={widthPixel(380)}
          color={colors.pink}
          borderColor={colors.grey}
          borderWidth={0}
          style={{backgroundColor: colors.imageGrey}}
        />
        <TouchableOpacity
          onPress={() => {
            if (selected === '') {
              Toast.show({
                type: 'error',
                text1: 'Select your current department',
              });
            } else {
              navigation.navigate(Routes.ONBOARDING4, {
                progressValue:
                  selected !== '' ? progressValue + 0.3 : progressValue,
              });
            }
          }}
          style={styles.rightbtn}>
          <AppText body={'Next'} style={styles.rightBtnText} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OnBoarding3;
