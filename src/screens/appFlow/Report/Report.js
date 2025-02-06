import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import HeaderButton from '../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colors, images} from '../../../assets';
import {styles} from './styles';
import MainButton from '../../../components/MainButton';

const howYouCome = [
  {
    id: 1,
    name: 'I just don’t like it',
  },
  {
    id: 2,
    name: 'It’s Spam or fraud',
  },
  {
    id: 3,
    name: 'Sale of Illegal items',
  },
  {
    id: 4,
    name: 'False Information',
  },
];

const Report = () => {
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn ?? false
        ? ''
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  return (
    <>
      <SafeAreaView>
        <HeaderButton
          title={'Report'}
          leftOnPress={() => {
            navigation.goBack();
          }}
        />

        <View>
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
      </SafeAreaView>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Report'}
          buttonColor={selected == '' ? 'transparent' : colors.darkBlack}
          textColor={selected == '' ? colors.darkBlack : colors.white}
          borderColor={colors.darkBlack}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

export default Report;
