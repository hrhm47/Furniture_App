import {
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import HeaderButton from '../../../../../components/HeaderButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppBackground from '../../../../../components/AppBackground';
import {colors, heightPixel} from '../../../../../assets';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import DateTime from '../../../../../components/DateTime';
import AppText from '../../../../../components/AppText';
import EventListing from './EventListing';
import MainButton from '../../../../../components/MainButton';
import {StackNames} from '../../../../../navigation/Routes';

const EventPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');

  const [addMoreOptions, setAddMoreOptions] = useState([]);
  const [pollDate, setPollDate] = useState('');

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
          keyboardShouldPersistTaps="handled">
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
          <View style={styles.viewStyle}>
            <DateTime
              label={'Date'}
              mode={'date'}
              iconShow={true}
              selected={pollDate}
              placeholder={'--/--/----'}
              onSelect={date => {
                setPollDate(date);
              }}
            />
          </View>
          <View style={styles.viewStyle}>
            <AppText body={'Select Events'} style={styles.optionTextStyle} />
            <View>
              <EventListing />
            </View>
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

export default EventPostScreen;
