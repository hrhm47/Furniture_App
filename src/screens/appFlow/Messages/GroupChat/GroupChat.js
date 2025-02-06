import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import {colors, images, widthPixel} from '../../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setOpenChatModal} from '../../../../app/slices/postSlice';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import MainButton from '../../../../components/MainButton';
import GroupChatMessageCard from '../../../../components/MessagesCard/GroupChatMessageCard';

const GroupChat = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState([]);
  const dispatch = useDispatch();
  const {openChatModal} = useSelector(state => state?.postSlice);
  const isFocused = useIsFocused();

  const paramsData = useRoute()?.params;
  // console.log('OpenChatFromReviewList,', paramsData?.OpenChatFromReviewList);
  // console.log('ReviewListData,', paramsData?.ReviewListData);

  useEffect(() => {
    dispatch(setOpenChatModal(false));
  }, [isFocused]);

  useLayoutEffect(() => {
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
  }, []);

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
                {openChatModal && (
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
                )}
                <GroupChatMessageCard
                  swipeLeftEnabled={openChatModal}
                  onPress={() => {
                    navigation.navigate(Routes.OPENCHAT, {
                      GroupChat: true,
                    });
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      {openChatModal && (
        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
          <MainButton
            buttonColor={
              selectedIndex.length <= 0 ? colors.lightGrey : colors.darkBlack
            }
            title={'Done'}
            textColor={selectedIndex.length <= 0 ? colors.grey : colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default GroupChat;
