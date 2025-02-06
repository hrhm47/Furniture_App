import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import HeaderButton from '../../../../components/HeaderButton';
import {colors, heightPixel, images} from '../../../../assets';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import ProfileModalCard from '../../../../components/Modals/ProfileModalCard/ProfileModalCard';
import ReceiverMessagesCard from '../../../../components/MessagesCard/ReceiverMessagesCard/ReceiverMessagesCard';
import SenderMessagesCard from '../../../../components/MessagesCard/SenderMessagesCard/SenderMessagesCard';
import GroupMemberModal from '../../../../components/Modals/GroupMemberModal/GroupMemberModal';
import {Routes, StackNames} from '../../../../navigation/Routes';
import {useDispatch} from 'react-redux';
import LeaveGroupModal from '../../../../components/Modals/LeaveGroupModal.js/LeaveGroupModal';
import Buttons from '../../../../components/Buttons';
import {styles} from './styles';
import DeleteModal from '../../../../components/Modals/DeleteModal/DeleteModal';
import Toast from 'react-native-toast-message';
import AppBackground from '../../../../components/AppBackground';

const OpenChat = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const paramsData = useRoute()?.params;

  const GroupChat = paramsData?.GroupChat;
  const RequestedChat = paramsData?.RequestedChat;
  const fromReviewScreen = paramsData?.fromReviewScreen;
  const chatUserName = paramsData?.chatUserName;
  const parentRouteNameToGoBack = paramsData?.parentRouteNameToGoBack;
  // console.log('fromReviewScreen', fromReviewScreen);

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [
    groupChatMembersAdditionBlockModal,
    setGroupChatMembersAdditionBlockModal,
  ] = useState(false);
  const [openLeavingGroupModal, setOpenLeavingGroupModal] = useState(false);
  const [chatRequestStatus, setChatRequestStatus] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState('Keyboard Hidden');
  const paddingView = useRef(new Animated.Value(0)).current;

  const myMessages = RequestedChat
    ? [
        {id: 'qwwrc', type: 'text', message: 'abc', act: 'receiver'},
        {id: '1exq', type: 'text', message: 'abc', act: 'receiver'},
        {id: '111sqa', type: 'text', message: 'abc', act: 'receiver'},
        {id: 'i7v87v8', type: 'text', message: 'abc', act: 'receiver'},
        {id: '9877c7', type: 'text', message: 'abc', act: 'receiver'},
      ]
    : [
        {id: 'qwwrc', type: 'text', message: 'abc', act: 'receiver'},
        {id: 'qwwrc', type: 'text', message: 'abc', act: 'sender'},
        {id: 'qwwrc', type: 'text', message: 'abc', act: 'sender'},
        {id: '1exq', type: 'text', message: 'abc', act: 'receiver'},
        {id: '111sqa', type: 'text', message: 'abc', act: 'receiver'},
        {id: '098bb', type: 'text', message: 'abc', act: 'sender'},
        {id: 'nuvuf67', type: 'text', message: 'abc', act: 'receiver'},
        {
          id: '987v',
          type: 'productReviewRequest',
          message: images.postImage2,
          act: 'receiver',
        },
        {
          id: '8789v8v',
          type: 'productReviewPropose',
          message: images.postImage2,
          act: 'sender',
        },
        {id: 'pb2e4d', type: 'text', message: 'abc', act: 'receiver'},
        {
          id: '874cb',
          type: 'serviveReviewRequest',
          message: images.postImage2,
          act: 'receiver',
        },
        {
          id: '67d444',
          type: 'serviceReviewPropose',
          message: images.postImage2,
          act: 'sender',
        },
        {id: 'pb2e4d', type: 'text', message: 'oiuc', act: 'receiver'},
      ];

  const isFocused = useIsFocused();
  const flatListRef = useRef(null);
  const [allowMeToScroll, setAllowMeToScroll] = useState(false);

  useLayoutEffect(() => {
    RequestedChat && RequestedChat && setChatRequestStatus(true);
    flatListRef.current?.scrollToEnd({animated: true});
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    };
  }, [isFocused]);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, [myMessages, fromReviewScreen]);

  function findKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  const onBackPress = () => {
    if (paramsData?.fromReviewScreen) {
      const key = findKeyByValue(StackNames, parentRouteNameToGoBack);
      navigation.navigate(parentRouteNameToGoBack, {
        screen: Routes.PEOPLEREVIEWELIST,
      });
      // navigation.goBack();
      return true; // Prevent default behavior
    }
    return false; // Allow default behavior
  };

  useEffect(() => {
    // Scroll to end when component mounts
    flatListRef.current?.scrollToEnd({animated: true});
    // Add back button event listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    // Cleanup function to remove event listener
    return () => {
      backHandler.remove();
    };
  }, [paramsData, navigation]);

  // const [myPadding, setMyPadding] = useState(
  //   Platform.OS == 'android' ? heightPixel(30) : heightPixel(10),
  // );
  const [userMessage, setUserMessage] = useState('');
  const myPadding = useRef(
    new Animated.Value(
      Platform.OS === 'android' ? heightPixel(30) : heightPixel(10),
    ),
  ).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.timing(myPadding, {
          toValue: heightPixel(110),
          duration: 300, // Duration of the animation
          useNativeDriver: false,
        }).start();
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(myPadding, {
          toValue:
            Platform.OS === 'android' ? heightPixel(30) : heightPixel(10),
          duration: 300, // Duration of the animation
          useNativeDriver: false,
        }).start();
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [myPadding]);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => {
  //       setMyPadding(heightPixel(110));
  //     },
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setMyPadding(
  //         Platform.OS == 'android' ? heightPixel(30) : heightPixel(10),
  //       );
  //     },
  //   );
  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };

  //   // if (Platform.OS === 'android') {
  //   //   const keyboardDidShowListener = Keyboard.addListener(
  //   //     'keyboardDidShow',
  //   //     () => {
  //   //       setKeyboardStatus('Keyboard Shown');
  //   //       Animated.spring(paddingView, {
  //   //         toValue: heightPixel(260),
  //   //         useNativeDriver: false,
  //   //       }).start();
  //   //     },
  //   //   );
  //   //   const keyboardDidHideListener = Keyboard.addListener(
  //   //     'keyboardDidHide',
  //   //     () => {
  //   //       setKeyboardStatus('Keyboard Hidden');
  //   //       Animated.spring(paddingView, {
  //   //         toValue: 0,
  //   //         useNativeDriver: false,
  //   //       }).start();
  //   //     },
  //   //   );

  //   //   // Clean up the event listeners on unmount
  //   //   return () => {
  //   //     keyboardDidShowListener.remove();
  //   //     keyboardDidHideListener.remove();
  //   //   };
  //   // }
  // }, []);

  return (
    <>
      <AppBackground
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <View
          style={{
            // marginTop: paddingView,
            flex: 1,
            backgroundColor: colors.background,
          }}>
          {/* <View style={{flex: 1, backgroundColor: colors.background}}> */}
          <HeaderButton
            title={GroupChat ? '[group-name]' : 'Jocelyn Rosser'}
            leftOnPress={() =>
              fromReviewScreen ? onBackPress() : navigation.goBack()
            }
            companyLogo={images.profile1}
            BorderRadius={true}
            rightImage={images.more}
            rightImageColor={colors.darkBlack}
            rightPress={() => {
              GroupChat
                ? setGroupChatMembersAdditionBlockModal(
                    !groupChatMembersAdditionBlockModal,
                  )
                : setOpenProfileModal(!openProfileModal);
            }}
            GroupChat={GroupChat}
            GroupChatPic={images.profile3}
          />
          <View
            style={[
              {flex: 1},
              chatRequestStatus && {paddingBottom: heightPixel(90)},
            ]}>
            <KeyboardAvoidingView
              style={{flex: 1, backgroundColor: 'transparent'}}
              behavior="height">
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <FlatList
                  ref={flatListRef}
                  data={myMessages}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    // const isLastMessage = index === myMessages.length - 1;
                    // const isSameAsNext =
                    //   !isLastMessage && messagesData[index + 1] === item;
                    // const isSameAsPrevious =
                    //   index > 0 && messagesData[index - 1] === item;

                    // const showImageOrNot = !isSameAsPrevious;
                    // const showMessageStatusNow = !isSameAsNext;

                    return (
                      <View>
                        {item.act === 'receiver' ? (
                          <ReceiverMessagesCard
                            keyId={index}
                            messageType={item.type}
                            GroupChat={GroupChat}
                            showTimeNow={true}
                            showImageOrNot={false}
                            receiverProfileIcon={images.profile1}
                            fromReviewScreen={fromReviewScreen}
                          />
                        ) : (
                          <SenderMessagesCard
                            keyId={index}
                            senderProfileIcon={images.profile3}
                            messageType={item.type}
                            GroupChat={GroupChat}
                            showMessageStatusNow={true}
                            showImageOrNot={true}
                            fromReviewScreen={fromReviewScreen}
                          />
                        )}
                      </View>
                    );
                  }}
                />
              </ScrollView>
              {!chatRequestStatus && (
                <Animated.View
                  style={[
                    styles.inputView,
                    {
                      marginBottom: myPadding,
                    },
                    userMessage.length >= 150 && {
                      height: heightPixel(120),
                    },
                  ]}>
                  <View
                    style={[
                      styles.inputInnerView,
                      userMessage.length >= 150 && {
                        height: heightPixel(120),
                      },
                    ]}>
                    <Image
                      source={images.galleryIcon}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Message..."
                      placeholderTextColor={colors.grey}
                      style={[
                        styles.inputStyle,
                        userMessage.length >= 150 && {
                          height: heightPixel(100),
                        },
                      ]}
                      multiline={true}
                      onChangeText={setUserMessage}
                      value={userMessage}
                    />
                  </View>
                  <Image
                    source={images.sendChat}
                    style={styles.iconStyle}
                    tintColor={colors.pink}
                  />
                </Animated.View>
              )}
            </KeyboardAvoidingView>
          </View>
        </View>
      </AppBackground>
      {chatRequestStatus && (
        <View style={styles.bottomButton}>
          <Buttons
            leftButtonText={'Accept'}
            rightButtonText={'Block'}
            leftButtonBgColor={colors.pink}
            rightButtonBgColor={'transparent'}
            leftButtonTextColor={colors.white}
            rightButtonTextColor={colors.darkBlack}
            leftButtonBorderColor={colors.pink}
            rightButtonBorderColor={colors.darkBlack}
            leftButtonOnPress={() => {
              setChatRequestStatus(false);
              Toast.show({
                type: 'success',
                text1: 'Chat request accepted',
              });
            }}
            rightButtonOnPress={() => {
              Toast.show({
                type: 'error',
                text1: 'Chat request rejected',
                text2: 'User has been blocked',
              });
              setTimeout(() => {
                navigation.goBack();
              }, 1000);
            }}
          />
        </View>
      )}

      {openProfileModal && (
        <ProfileModalCard
          RequestedChat={RequestedChat}
          viewProfileOnPree={() => {
            setOpenProfileModal(false);
            navigation.navigate(Routes.USERPROFILE, {
              removeTabOnReturn: true,
            });
          }}
          onRequestClose={() => {
            setOpenProfileModal(false);
          }}
          ReportOnPress={() => {
            setOpenProfileModal(false);
            navigation.navigate(Routes.REPORT);
          }}
          deleteOnPress={() => {
            setOpenProfileModal(false);
            setOpenDeleteModal(true);
          }}
          BlockOnPress={() => {
            setOpenProfileModal(false);
            Toast.show({
              type: 'error',
              text1: 'User blocked',
            });
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          }}
        />
      )}
      {groupChatMembersAdditionBlockModal && (
        <GroupMemberModal
          addMembersOnPress={() => {
            setGroupChatMembersAdditionBlockModal(false);
            navigation.navigate(Routes.PEOPLEATTENDEELIST, {
              headingName: 'Select Contact',
              createGroupButton: true,
            });
          }}
          leaveGroupOnPress={() => {
            setGroupChatMembersAdditionBlockModal(false);
            setOpenLeavingGroupModal(true);
          }}
        />
      )}
      {openLeavingGroupModal && (
        <LeaveGroupModal
          visible={openLeavingGroupModal}
          leftButtonOnPress={() => {
            setOpenLeavingGroupModal(false);
            Toast.show({
              type: 'error',
              text1: "You've left this group",
            });
            navigation.goBack();
          }}
          rightButtonOnPress={() => {
            setOpenLeavingGroupModal(false);
          }}
        />
      )}

      {openDeleteModal && (
        <DeleteModal
          openDeleteModalFromProfile={openDeleteModal}
          leftButtonOnPress={() => {
            setOpenDeleteModal(false);
            Toast.show({
              type: 'info',
              text1: 'Chat deleted',
            });
          }}
          rightButtonOnPress={() => {
            setOpenDeleteModal(false);
          }}
        />
      )}
    </>
  );
};

export default OpenChat;
