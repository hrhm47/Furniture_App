import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, heightPixel, images, widthPixel} from '../../assets';

const GroupChatMessageCard = ({
  onLongPress,
  swipeLeftEnabled,
  onPress,
  UserName,
  groupChatProfile1,
  groupChatProfile2,
  recentMessage,
  recentMessageStatus,
  messageTime,
  remaningMessage,
}) => {
  const widthObject = {
    topViewWIdth: swipeLeftEnabled ? widthPixel(350) : widthPixel(390),
    messageViewWidth: swipeLeftEnabled ? widthPixel(290) : widthPixel(330),
    descriptionStyle: swipeLeftEnabled ? widthPixel(280) : widthPixel(290),
    righsideView: swipeLeftEnabled ? widthPixel(280) : widthPixel(330),
  };
  return (
    <TouchableOpacity
      style={styles.topView(widthObject?.topViewWIdth)}
      onLongPress={onLongPress}
      onPress={onPress}>
      <View style={styles.mainView}>
        <View style={styles.profile2ImgView}>
          <Image source={images.profile1} style={styles.profileImg2Style} />
          <Image
            source={images.profile1}
            style={[
              styles.profileImg2Style,
              {
                position: 'absolute',
                top: heightPixel(9),
                right: widthPixel(1),
              },
            ]}
          />
        </View>
        <View style={{}}>
          <View style={styles.nameMessageView(widthObject.messageViewWidth)}>
            <AppText
              body={'Name'}
              style={styles.titleStyle}
              numberOfLines={1}
            />
            <AppText
              body={'1w ago'}
              style={styles.timeStyle}
              numberOfLines={1}
            />
          </View>
          <View style={styles.rightSideView(widthObject.righsideView)}>
            <AppText
              body={
                'Lectus sed facilisi feugiat convallis ut at. Aliquam vitae in faucibus congue. Lectus sed facilisi feugiat convallis ut at. Aliquam vitae in faucibus congue.'
              }
              style={styles.descriptionStyle(widthObject?.descriptionStyle)}
              numberOfLines={2}
            />

            {!swipeLeftEnabled && (
              <AppText body={'12'} style={styles.RemainingText} />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: heightPixel(5),
              paddingLeft: widthPixel(5),
            }}>
            <Image
              source={images.unread}
              style={styles.readUnReadImgStyle}
              tintColor={colors.grey}
            />
            <AppText body={'Delivered'} style={styles.timeStyle} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupChatMessageCard;
