import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppBackground from '../../../components/AppBackground';
import HeaderButton from '../../../components/HeaderButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../components/InputField/RichInputField';
import {colors, heightPixel} from '../../../assets';
import {styles} from './styles';
import PostTypeComponent from './PostTypeComponent/PostTypeComponent';
import MainButton from '../../../components/MainButton';

const AddPosts = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;

  const [userPostType, setUserPostType] = useState('');
  const [userTyepedThoughts, setUserTypedThoughts] = useState('');
  console.log('removeTabOnReturn', removeTabOnReturn);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn
        ? ''
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Add Post'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          contentContainerStyle={{paddingBottom: heightPixel(120)}}>
          <View>
            <RichInputField
              placeHolder={'Add caption/thoughts...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTyepedThoughts}
            />
          </View>
          <View>
            <PostTypeComponent
              userTyepedThoughts={userTyepedThoughts}
              setUserTypedThoughts={setUserTypedThoughts}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={
              userTyepedThoughts?.length > 0 ? colors.white : colors.grey
            }
            title={'Post'}
            buttonColor={
              userTyepedThoughts?.length > 0 ? colors.black : colors.lightGrey
            }
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default AddPosts;
