import {
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import HeaderButton from '../../../../../components/HeaderButton';
import {colors, fontSize, heightPixel} from '../../../../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import AppText from '../../../../../components/AppText';
import InputField from '../../../../../components/InputField';
import MainButton from '../../../../../components/MainButton';
import {Routes, StackNames} from '../../../../../navigation/Routes';

const ArticlePostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );
  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Article'}
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          contentContainerStyle={{
            paddingBottom: heightPixel(120),
          }}>
          <View style={styles.pollQuestionsInputView}>
            <AppText body={'Title'} style={styles.optionTextStyle} />
            <InputField
              placeHolder={'add title...'}
              secureTextEntry={null}
              style={{backgroundColor: colors.white}}
            />
          </View>
          <View style={styles.pollQuestionsInputView}>
            <View style={{flexDirection: 'row'}}>
              <AppText body={'Tags '} style={styles.optionTextStyle} />
              <AppText
                body={'(separated by comma)'}
                style={[
                  styles.optionTextStyle,
                  {fontSize: fontSize.BODY3_medium, color: colors.grey},
                ]}
              />
            </View>
            <InputField
              placeHolder={'add tags...'}
              secureTextEntry={null}
              style={{backgroundColor: colors.white}}
            />
          </View>
          <View style={styles.pollQuestionsInputView}>
            <AppText
              body={'Add article (up to 500 characters)'}
              style={styles.optionTextStyle}
            />
            <RichInputField
              placeHolder={'Add article...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTypedThoughts}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.bottomBtn}>
          <MainButton
            textColor={
              userTypedThoughts?.length > 0 ? colors.white : colors.grey
            }
            title={'Post'}
            buttonColor={
              userTypedThoughts?.length > 0 ? colors.black : colors.lightGrey
            }
            onPress={() => [
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: StackNames.DISCOVERSTACK,
                  },
                ],
              }),
              // navigation.goBack(),
              // navigation.navigate(StackNames.DISCOVERSTACK),
            ]}
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default ArticlePostScreen;
