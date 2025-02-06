import {
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import HeaderButton from '../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import {colors, heightPixel} from '../../../../assets';
import SearchComponent from '../../../../components/SearchComponent';
import {styles} from './styles';
import SquareButtons from '../../../../components/SquareButtons';
import NetworkCardComponent from '../../../../components/NetworkCards';
import CompanyPageComponent from '../../../../components/ComapnyPageComponent';

const NetworkingList = () => {
  const navigation = useNavigation();

  const [inputData, setInputData] = useState('');
  const [focusedButton, setFocusedButton] = useState('Connections');

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);
  return (
    <AppBackground
      onStartShouldSetResponder={() => Keyboard.dismiss()}
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <View style={styles.topView}>
        <HeaderButton
          title={'My Networks'}
          leftOnPress={() => navigation.goBack()}
          leftBtnTextStyle={{color: colors.black}}
          leftIconColor={colors.black}
          isDivider={false}
        />

        <SearchComponent
          placeholder={'Search...'}
          value={inputData}
          onChangeText={setInputData}
          //   style={{backgroundColor:colors.offWhite}}
        />
        <View
          style={{
            alignSelf: 'center',
            marginBottom: heightPixel(15),
            // backgroundColor: colors?.offWhite,
          }}>
          <SquareButtons
            btn1Text="Connections"
            btn2Text="Pages"
            ButtonTextColorBtn1={
              focusedButton == 'Connections' ? colors.white : colors.grey
            }
            ButtonTextColorBtn2={
              focusedButton == 'Pages' ? colors.white : colors.grey
            }
            bdColorBtn1={
              focusedButton == 'Connections' ? colors.pink : colors.lightGrey
            }
            bdColorBtn2={
              focusedButton == 'Pages' ? colors.pink : colors.lightGrey
            }
            bgColorBtn1={
              focusedButton == 'Connections' ? colors.pink : colors.lightGrey
            }
            bgColorBtn2={
              focusedButton == 'Pages' ? colors.pink : colors.lightGrey
            }
            RigtButtonOnPress={() => setFocusedButton('Pages')}
            leftButtonOnPress={() => setFocusedButton('Connections')}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '90%'}}>
          {focusedButton == 'Connections' ? (
            <NetworkCardComponent
              removeTabOnReturn={true}
              // heading={'Total Connections (06)'}
              UsersData={[1, 2, 3, 4, 5]}
              removed={true}
            />
          ) : (
            <CompanyPageComponent
              removeTabOnReturn={true}
              // heading={'Recommended Pages'}
              comapniesData={[1, 2, 3, 4, 5, 6, 7, 8]}
              removed={true}
            />
          )}
        </ScrollView>
      </View>
    </AppBackground>
  );
};

export default NetworkingList;
