import {Image, Pressable, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../assets';
import AppText from '../AppText';

const PostHeader = ({
  ProfileOnPress,
  ProfileImage,
  ProfileName,
  sponsored_date_time,
  Profile_Follower_Position,
  MoreOnPress,
}) => {
  return (
    <View style={styles.topView}>
      <Pressable onPress={ProfileOnPress} style={styles.profileView}>
        <Image
          source={ProfileImage}
          style={styles.imgStyle}
          resizeMode="contain"
        />
        <View style={styles.profileNameMainView}>
          <View style={styles.profileNameMiddleView}>
            <Text numberOfLines={1} style={styles.ProfileTextStyle}>
              {ProfileName}{' '}
              <Text numberOfLines={1} style={styles.time_sponsorStyle}>
                {`. ${sponsored_date_time}`}
              </Text>
            </Text>
          </View>
          <AppText
            body={Profile_Follower_Position}
            style={styles.follower_Position}
          />
        </View>
      </Pressable>
      <TouchableOpacity onPress={MoreOnPress} style={styles.moreView}>
        <Image
          source={images.more}
          style={styles.moreImgStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
