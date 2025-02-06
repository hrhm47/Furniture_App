import {
  BackHandler,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import IndividualMessageCard from '../../../../components/MessagesCard/IndividualMessageCard';
import {colors, images, widthPixel} from '../../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  setOpenChatModal,
  setSelectContactToSendCompanyProfile,
} from '../../../../app/slices/postSlice';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {Routes, StackNames} from '../../../../navigation/Routes';
import MainButton from '../../../../components/MainButton';
import Toast from 'react-native-toast-message';

const IndividualChat = () => {
  const navigation = useNavigation();
  const [swipeLeftEnabled, setSwipeLeftEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const dispatch = useDispatch();
  const {openChatModal, selectContactToSendCompanyProfile} = useSelector(
    state => state?.postSlice,
  );

  const isFocused = useIsFocused();

  const paramsData = useRoute()?.params;
  const parentRouteNameToGoBack = paramsData?.parentRouteNameToGoBack;
  // console.log('parentRouteNameToGoBack', parentRouteNameToGoBack);
  // console.log('OpenChatFromReviewList,', paramsData?.OpenChatFromReviewList);
  // console.log('ReviewListData,', navigation.getParent().getState(), );

  // const onBackPress = () => {
  //   if (paramsData?.OpenChatFromReviewList) {
  //     navigation.navigate(StackNames.DISCOVERSTACK, {
  //       screen: Routes.PEOPLEREVIEWELIST,
  //     });
  //   } else {
  //     navigation.goBack();
  //   }
  // };
  useLayoutEffect(() => {
    // if (paramsData?.OpenChatFromReviewList) {
    //   navigation.navigate(Routes.OPENCHAT, {
    //     GroupChat: false,
    //     fromReviewScreen: true,
    //     chatUserName: 2,
    //     parentRouteNameToGoBack: parentRouteNameToGoBack,
    //   });
    // }

    // BackHandler.addEventListener('hardwareBackPress', onBackPress);

    dispatch(setOpenChatModal(false));
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      [
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: 'none',
          },
        }),
        // BackHandler.removeEventListener('hardwareBackPress', onBackPress),
        // paramsData?.OpenChatFromReviewList &&
        //   navigation.navigate(Routes.OPENCHAT, {
        //     GroupChat: false,
        //     fromReviewScreen: false,
        //     chatUserName: 2,
        //   }),
      ];
    };
  }, [isFocused]);

  return (
    <View
      style={styles.topView}
      onStartShouldSetResponder={() => {
        dispatch(setOpenChatModal(false));
        setSelectedIndex([]);
      }}>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 10,
                }}>
                {openChatModal ??
                  (selectContactToSendCompanyProfile && (
                    <TouchableOpacity
                      onPress={() => {
                        // console.log('head', openChatModal);
                        selectedIndex?.includes(item)
                          ? setSelectedIndex([
                              ...selectedIndex.filter(id => item !== id),
                            ])
                          : setSelectedIndex([...selectedIndex, item]);
                      }}>
                      <Image
                        source={
                          selectedIndex?.includes(item)
                            ? images.selectConfirm
                            : images.selectIcon
                        }
                        style={styles.iconStyle}
                        tintColor={
                          selectedIndex?.includes(item)
                            ? colors.darkBlack
                            : colors.grey
                        }
                      />
                    </TouchableOpacity>
                  ))}
                <IndividualMessageCard
                  swipeLeftEnabled={
                    openChatModal ?? selectContactToSendCompanyProfile
                  }
                  onPress={() => {
                    navigation.navigate(Routes.OPENCHAT, {
                      GroupChat: false,
                    });
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      {openChatModal ??
        (selectContactToSendCompanyProfile && (
          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
            <MainButton
              buttonColor={
                selectedIndex.length <= 0 ? colors.lightGrey : colors.darkBlack
              }
              title={selectContactToSendCompanyProfile ? 'Send' : 'Done'}
              textColor={selectedIndex.length <= 0 ? colors.grey : colors.white}
              onPress={() => {
                dispatch(setOpenChatModal(false));
                dispatch(setSelectContactToSendCompanyProfile(false));
                setSelectedIndex([]);
                selectContactToSendCompanyProfile
                  ? navigation.navigate(Routes.OPENCHAT, {
                      GroupChat: false,
                      chatUserName: 2,
                    })
                  : Toast.show({
                      type: 'success',
                      text1: `${
                        selectedIndex.length == 1 ? 'Chat' : 'Chats'
                      } has been archived`,
                    });
              }}
            />
          </View>
        ))}
    </View>
  );
};

export default IndividualChat;
