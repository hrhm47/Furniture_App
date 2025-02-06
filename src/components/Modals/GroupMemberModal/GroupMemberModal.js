import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';

const GroupMemberModal = ({
  addMembersOnPress,

  leaveGroupOnPress,
  deleteChatOnPress,
}) => {
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        style={styles.innerCardStyle}
        onPress={addMembersOnPress}>
        <AppText
          body={'Add Members'}
          numberOfLines={1}
          style={styles.chatTextStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.innerCardStyle}
        onPress={leaveGroupOnPress}>
        <AppText
          body={'Leave Group'}
          numberOfLines={1}
          style={styles.chatTextStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.innerCardStyle}
        onPress={deleteChatOnPress}>
        <AppText
          body={'Delete Chat'}
          numberOfLines={1}
          style={styles.chatTextStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GroupMemberModal;
