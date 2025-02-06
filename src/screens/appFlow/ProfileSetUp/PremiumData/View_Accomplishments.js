import {
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
import AppBackground from '../../../../components/AppBackground';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel, images} from '../../../../assets';
import {useNavigation} from '@react-navigation/native';
import LableInput from '../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../components/MainButton';
import AppText from '../../../../components/AppText';
import AccomplishmentComponent from '../../../../components/AccomplishmentComponent';
import {Routes} from '../../../../navigation/Routes';

export const AccomplishmentData = [
  {
    id: 1,
    title: 'Product Knowledge Expertise',
    dateTime: 'Oct 2021',
    description:
      'Demonstrated extensive product knowledge and expertise, earning recognition from both customers and management as a go-to resource for product information and recommendations.',
    image: images.medal,
  },
  {
    id: 2,
    title: 'Professional Development Initiatives',
    dateTime: 'Oct 2021',
    description:
      'proactively pursued professional development opportunities, knowledge in sales techniques, customer relationship management.',
    image: images.medal,
  },
];

const View_Accomplishments = () => {
  const navigation = useNavigation();

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={'View Accomplishments'}
          leftOnPress={() => navigation.goBack()}
          rightPress={() => {
            navigation.navigate(Routes.EDIT_ACCOMPLISHMENTS);
          }}
          rightBtn={true}
        />

        <FlatList
          data={AccomplishmentData}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return (
              <AccomplishmentComponent
                title={item.title}
                description={item.description}
                dateTime={item.dateTime}
                key={item.id}
                onPress={() => {
                  navigation.navigate(Routes.EDIT_ACCOMPLISHMENTS, {
                    AccomplishmentItem: item,
                    updateButton: true,
                  });
                }}
              />
            );
          }}
        />
      </AppBackground>
      {/* <View style={styles.bottomBtn}>
        <MainButton
          title={'Add'}
          buttonColor={colors.black}
          textColor={colors.white}
          // onPress={() => {
          //   navigation.navigate(Routes.VERIFY_OTP);
          // }}
        />
      </View> */}
    </>
  );
};

export default View_Accomplishments;
