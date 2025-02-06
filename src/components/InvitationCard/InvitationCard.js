import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import SmallSizeButton from '../SmallSizeButton';

const InvitationCard = ({
  profilePic,
  userName,
  userPosition,
  userMessage,
  userSendInvitationTime,
  ConnectionAcceptButton,
  ConnectionRejectionButton,
  userProfileOnPress,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.mainView}>
        <TouchableOpacity
          style={styles.profileView}
          onPress={userProfileOnPress}>
          <Image source={images.profile1} style={styles.profileImg} />
        </TouchableOpacity>
        <View style={styles.rightSideView}>
          <View style={styles.nameDayView}>
            <AppText
              body={'Name Name'}
              numberOfLines={2}
              style={{width: widthPixel(260)}}
            />
            <AppText body={'1d ago'} style={styles.timeText} />
          </View>
          <AppText body={'[position-here]'} style={styles.positionText} />
          <AppText
            body={
              'Arcu posuere non arcu est sed eu. Hendrerit a porttitor purus malesuada enim risus massa.'
            }
            numberOfLines={2}
            style={styles.messageText}
          />
          <View style={styles.buttonView}>
            <SmallSizeButton
              ButtonText={'Connect'}
              ButtonStyle={styles.buttonStyle}
              ButtonPress={ConnectionAcceptButton}
            />
            <SmallSizeButton
              ButtonText={'Reject'}
              textStyle={{color: colors.grey}}
              ButtonStyle={styles.rejectButtonStyle}
              ButtonPress={ConnectionRejectionButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvitationCard;
