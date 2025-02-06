import {
  Alert,
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import HeaderButton from '../../../components/HeaderButton';
import {colors, heightPixel, images} from '../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchComponent from '../../../components/SearchComponent';
import {TopTab} from '../../../navigation/stacks/TopTab';
import {styles} from './styles';
import ChatModal from '../../../components/Modals/ChatModal/ChatModal';
import {useDispatch, useSelector} from 'react-redux';
import {setOpenChatModal} from '../../../app/slices/postSlice';
import {Routes} from '../../../navigation/Routes';
import Toast from 'react-native-toast-message';
import AppBackground from '../../../components/AppBackground';

const Messages = () => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState('');
  const [openChatModalState, setOpenChatModalState] = useState(false);
  const dispatch = useDispatch();
  const {openChatModal, selectContactToSendCompanyProfile} = useSelector(
    state => state?.postSlice,
  );
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
        ? navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'none',
            },
          })
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <>
      <AppBackground
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <HeaderButton
          title={'Messages'}
          leftOnPress={() => {
            navigation.goBack();
          }}
          rightImage={images.more}
          rightImageColor={colors.darkBlack}
          rightPress={() => {
            setOpenChatModalState(true);
            dispatch(setOpenChatModal(false));
          }}
          right1stImage={images.user}
          right1stPress={() => navigation.navigate(Routes.REQUESTCHAT)}
          RemainingMessageCount={3}
          isDivider={false}
        />
        <View style={{marginBottom: heightPixel(10)}}>
          <SearchComponent
            placeholder={'Search...'}
            value={inputData}
            onChangeText={setInputData}
          />
        </View>
        <View style={styles.TabView}>
          <TopTab />
        </View>
        {!openChatModal && (
          <TouchableOpacity
            style={styles.addMoreChatView}
            onPress={() => {
              navigation.navigate(Routes.PEOPLEATTENDEELIST, {
                headingName: 'Select Contact',
                createGroupButton: true,
              });
            }}>
            <Image source={images.Follow} style={styles.addMoreImgStyle} />
          </TouchableOpacity>
        )}
      </AppBackground>
      {openChatModalState && (
        <ChatModal
          visible={openChatModalState}
          onRequestClose={() => {
            setOpenChatModalState(false);
            dispatch(setOpenChatModal(false));
          }}
          archiveOnPress={() => {
            setOpenChatModalState(false);
            dispatch(setOpenChatModal(true));
          }}
          markAsUnreadOnPress={() => {
            setOpenChatModalState(false);
            Toast.show({
              type: 'success',
              text1: 'Chat marked as unread',
            });
          }}
        />
      )}
    </>
  );
};

export default Messages;
