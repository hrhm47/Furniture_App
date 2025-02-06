import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import {colors, images, widthPixel} from '../../../../../assets';
import HeaderButton from '../../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LableInput from '../../../../../components/LabelInput';
import AppText from '../../../../../components/AppText';
import {styles} from './styles';
import Toast from 'react-native-toast-message';
import {Routes, StackNames} from '../../../../../navigation/Routes';
import DeleteModal from '../../../../../components/Modals/DeleteModal/DeleteModal';

const mySettingsData = [
  {
    key: 'oiuyvfy ',
    name: 'Reset Password',
    Lefticon: images.key,
    Righticon: images.next,
    RouteName: Routes.RESETPASSWORD,
  },
  {
    key: 'auasd',
    name: 'Delete Account',
    Lefticon: images.none,
    Righticon: '',
    RouteName: Routes.TERMSANDCONDITIONS,
  },
];

const AccountPreferences = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userContact, setUserContact] = useState('');

  const [checkIcon, setCheckIcon] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const deleteMyAccount = () => {
    setOpenDeleteModal(false);
    Toast.show({
      type: 'success',
      text1: 'Account deleted',
    });
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: StackNames.ATUHSTACK,
          },
        ],
      });
    }, 1000);
  };

  const changeMyLoginCredentials = type => {
    if (type == 'email') {
      Toast.show({
        type: 'success',
        text1: 'Your email has been updated',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Your contact has been updated',
      });
    }
  };

  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Account Preferences'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={true}
      />
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView contentContainerStyle={styles.mainView}>
          <View>
            <LableInput
              title={'Email'}
              PlaceHolder={'txdynamics@example.com'}
              secureTextEntry={null}
              onChangeText={setUserEmail}
              value={userEmail}
            />
            <View style={styles.changeView}>
              <AppText
                body={'Change Email'}
                style={styles.changeText}
                onPress={() => changeMyLoginCredentials('email')}
              />
            </View>
            <LableInput
              title={'Contact Number'}
              PlaceHolder={'+17 | 1234567890'}
              secureTextEntry={null}
              onChangeText={setUserContact}
              value={userContact}
            />
            <View style={styles.changeView}>
              <AppText
                body={'Change Number'}
                style={styles.changeText}
                onPress={() => changeMyLoginCredentials('')}
              />
            </View>
            <View style={styles.changeView}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: widthPixel(10),
                }}
                onPress={() => setCheckIcon(!checkIcon)}>
                <Image
                  source={checkIcon ? images.selectConfirm : images.selectIcon}
                  style={styles.iconStyle}
                  tintColor={checkIcon ? colors.pink : colors.imageGrey}
                />
                <AppText
                  body={'Use to reset Password'}
                  style={styles.resetPasswordText}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.changeView}>
              <AppText body={'Reset Password'} />
            </View>
            <View style={styles.topView}>
              <View style={{}}>
                {mySettingsData?.map(item => {
                  return (
                    <TouchableOpacity
                      style={styles.cardView}
                      onPress={() => {
                        if (item?.Righticon !== '') {
                          navigation.navigate(item.RouteName);
                        } else {
                          setOpenDeleteModal(true);
                        }
                      }}>
                      <View style={styles.innerStyle}>
                        <Image
                          source={item?.Lefticon}
                          style={styles.iconStyle}
                        />

                        <AppText body={item?.name} />
                      </View>
                      {item?.Righticon && (
                        <View>
                          <Image
                            source={item?.Righticon}
                            style={styles.iconStyle}
                            tintColor={colors.grey}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      {openDeleteModal && (
        <DeleteModal
          title="Delete Account"
          description="Do you really want to delete this account?"
          openDeleteModalFromProfile={openDeleteModal}
          leftButtonOnPress={() => deleteMyAccount()}
          rightButtonOnPress={() => {
            setOpenDeleteModal(false);
          }}
        />
      )}
    </AppBackground>
  );
};

export default AccountPreferences;
