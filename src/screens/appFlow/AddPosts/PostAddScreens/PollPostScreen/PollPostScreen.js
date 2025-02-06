import {
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import {colors, heightPixel, images} from '../../../../../assets';
import HeaderButton from '../../../../../components/HeaderButton';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import AppText from '../../../../../components/AppText';
import InputField from '../../../../../components/InputField';
import MainButton from '../../../../../components/MainButton';
import SmallSizeButton from '../../../../../components/SmallSizeButton';
import {StackNames} from '../../../../../navigation/Routes';

const PollPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');

  const [addMoreOptions, setAddMoreOptions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );

  const removeOption = indexToRemove => {
    setAddMoreOptions(prev =>
      prev.filter((item, index) => index !== indexToRemove),
    );
  };
  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Add Poll'}
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom:
              addMoreOptions?.length > 0 ? heightPixel(160) : heightPixel(120),
          }}>
          <View style={{marginBottom: heightPixel(10)}}>
            <RichInputField
              placeHolder={'Add caption/thoughts...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTypedThoughts}
            />
          </View>
          <View style={styles.pollQuestionsInputView}>
            <AppText body={'Your question'} style={styles.QuestionTitle} />
            <InputField
              placeHolder={"what's your question"}
              secureTextEntry={null}
            />
          </View>
          <View style={styles.pollQuestionsInputView}>
            <AppText body={'Option 1'} style={styles.optionTextStyle} />
            <InputField
              placeHolder={'write your option 1'}
              secureTextEntry={null}
            />
          </View>
          <View style={styles.pollQuestionsInputView}>
            <AppText body={'Option 2'} style={styles.optionTextStyle} />
            <InputField
              placeHolder={'write your option 2'}
              secureTextEntry={null}
            />
          </View>
          {addMoreOptions
            ?.map((item, index) => {
              return (
                <View style={styles.pollQuestionsInputView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText
                      body={`Option ${index + 3}`}
                      style={styles.optionTextStyle}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        removeOption(index);
                      }}>
                      <AppText body={'Remove'} style={styles.removeTextStyle} />
                    </TouchableOpacity>
                  </View>
                  <InputField
                    placeHolder={`write your option ${index + 3}`}
                    secureTextEntry={null}
                  />
                </View>
              );
            })
            .slice(0, 2)}

          {addMoreOptions.length < 2 && (
            <View style={styles.pollQuestionsInputView}>
              <SmallSizeButton
                buttonImageAvailable={true}
                buttonImage={images.add}
                ButtonText={'Add'}
                ButtonPress={() => (
                  console.log(addMoreOptions),
                  setAddMoreOptions(prev => [...prev, 1])
                )}
              />
            </View>
          )}
          <View style={styles.pollQuestionsInputView}>
            <AppText
              body={'Note: You can add up to 4 options.'}
              style={[styles.optionTextStyle, {color: colors.grey}]}
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
            onPress={
              () =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: StackNames.DISCOVERSTACK,
                    },
                  ],
                })
              // [navigation.navigate(StackNames.DISCOVERSTACK)]
            }
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default PollPostScreen;
