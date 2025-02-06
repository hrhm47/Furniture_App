import {
  Alert,
  FlatList,
  Image,
  Platform,
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

import Accordion from 'react-native-collapsible/Accordion';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Progress from 'react-native-progress';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import Toast from 'react-native-toast-message';

const howYouCome = [
  {
    id: 1,
    name: 'Refferral',
  },
  {
    id: 2,
    name: 'Email',
  },
  {
    id: 3,
    name: 'Social Media',
  },
  {
    id: 4,
    name: 'Company Directive',
  },
];

const OnBoarding2 = () => {
  const navigation = useNavigation();
  const {progressValue} = useRoute()?.params;
  // console.log('progressValue', progressValue);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(true);
  const [progressData, setProgressData] = useState(progressValue);

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
            body={'How did you get caught in the bednet?'}
            style={[styles.heading, {marginLeft: widthPixel(15)}]}
          />

          <FlatList
            data={howYouCome}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={styles.keyboardAwareScrollView}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
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
            }}
          />
        </View>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <Progress.Bar
          progress={selected?.length > 0 ? progressValue + 0.2 : progressValue}
          width={widthPixel(380)}
          color={colors.pink}
          borderColor={colors.grey}
          borderWidth={0}
          style={{backgroundColor: colors.imageGrey}}
        />
        <TouchableOpacity
          onPress={() => {
            if (selected?.length <= 0) {
              Toast.show({
                type: 'error',
                text1: 'Please tell us how you know about us?',
              });
              // Alert.alert('Please tell us how you know about us? ');
            } else {
              navigation.navigate(Routes.ONBOARDING3, {
                progressValue:
                  selected?.length > 0 ? progressValue + 0.2 : progressValue,
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

export default OnBoarding2;
