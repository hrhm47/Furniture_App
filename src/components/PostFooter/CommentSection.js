import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {commentSectionData} from '../../utils/data/JsonData';
import {colors} from '../../assets';
import {timeAgo} from '../../utils/methods/DateTimeFunctions';
const CommentSection = ({
  userName,
  userProfile,
  userId,
  fromView,
  focusedCommentSection,
}) => {
  const [viewAllComments, setViewAllComments] = useState(false);
  const [showMeOnly, setshowMeOnly] = useState(false);
  const [mymessage, setMymessage] = useState('');

  const appendMyMessagesToList = () => {
    if (mymessage !== '' || mymessage?.length !== 0) {
      commentSectionData.push({
        key: '7jA' + Math.random().toString(),
        name: userName,
        profileLink: userProfile,
        message: mymessage,
        messagedDateTime: new Date().getTime(),
      });
      setMymessage('');
    } else {
      Alert.alert('Your message is empty');
    }
  };

  // const input = useRef(null);
  // useEffect(() => {
  //   input.current?.focus();
  // }, [focusedCommentSection]);

  return (
    <View style={[{marginTop: 5, paddingBottom: 10}]}>
      <TouchableOpacity
        onPress={() => {
          setViewAllComments(!viewAllComments);
        }}>
        <AppText
          body={`View all ${commentSectionData?.length} comments`}
          style={styles.viewAllCommentsText}
        />
      </TouchableOpacity>
      {commentSectionData
        .toReversed()
        ?.map((item, index) => {
          return (
            <Pressable
              style={styles.commentMainView}
              key={index}
              onPress={() => setshowMeOnly(!showMeOnly)}>
              <View style={styles.imgView}>
                <Image
                  source={item?.profileLink}
                  style={styles.commentImageStyle}
                />
              </View>
              <View style={styles.commnetView}>
                <View style={styles.commentSectionNamesDate}>
                  <AppText
                    body={item?.name}
                    numberOfLines={1}
                    style={styles.nameTextStyle}
                  />
                  <AppText
                    body={timeAgo(item?.messagedDateTime)}
                    numberOfLines={1}
                    style={styles.dateTimeText}
                  />
                </View>
                <AppText
                  body={item?.message}
                  numberOfLines={viewAllComments || showMeOnly ? undefined : 2}
                  style={styles.messageText}
                  // style={styles.nameTextStyle}
                />
              </View>
            </Pressable>
          );
        })
        .slice(0, viewAllComments ? commentSectionData?.length : 1)}
      <View>
        <View style={styles.inputCommentView}>
          <Image source={userProfile} style={styles.commentImageStyle} />
          <TextInput
            // ref={input}
            placeholder={'Add a comment...'}
            style={styles.inputStyle}
            placeholderTextColor={colors.grey}
            multiline={true}
            scrollEnabled={true}
            selectionColor={colors.pink}
            selectionHandleColor={colors.lightGrey}
            // enablesReturnKeyAutomatically={true}
            onChangeText={setMymessage}
            value={mymessage}
            enterKeyHint="done"
            autoCorrect={true}
            // autoFocus={focusedCommentSection}
          />
          <TouchableOpacity
            onPress={() => {
              appendMyMessagesToList();
            }}>
            <AppText body={'send'} style={[{color: colors.pink}]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentSection;
