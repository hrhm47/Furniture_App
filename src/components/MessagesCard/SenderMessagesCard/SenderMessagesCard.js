import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import MainButton from '../../MainButton';
import AddReviewModal from '../../Modals/AddReviewModal';
import {useNavigation} from '@react-navigation/native';
import {Routes, StackNames} from '../../../navigation/Routes';
import CompanyPageCard from '../../ComapnyPageComponent/CompanyPageCard';
import CompanyPageCardInChat from './CompanyPageCardInChat';

const SenderMessagesCard = ({
  showMessageStatusNow,
  GroupChat,
  showImageOrNot,
  senderProfileIcon,
  fromReviewScreen,
  messageType,
  keyId,
}) => {
  const [requestReview, setRequestReview] = useState(false);
  const [seeReview, setSeeReview] = useState(false);
  const [seeServiceReview, setSeeServiceReview] = useState(false);
  const [openServiceReviewModal, setOpenServiceReviewModal] = useState(false);
  const [isReviewCompleted, setIsReviewCompleted] = useState(false);
  const navigation = useNavigation();

  const onBackPress = () => {
    if (fromReviewScreen) {
      navigation.navigate(StackNames.DISCOVERSTACK, {
        screen: Routes.PEOPLEREVIEWELIST,
      });
    }
    return true;
  };

  return (
    <>
      <View style={styles.topView}>
        {messageType == 'text' ? (
          <View style={GroupChat && {marginRight: widthPixel(15)}}>
            <View
              style={[
                styles.mainView,
                GroupChat && {
                  maxWidth: widthPixel(330),
                },
              ]}>
              <AppText
                body={
                  'Sen derM essa gesCard Sender Se n derM es Sen der Mes sa ges Car d Senders ag esC ard Sender, SenderMes sagesCard Sender SenderM essag esCard Sender'
                }
                style={styles.messageText}
              />
            </View>
          </View>
        ) : messageType == 'productReviewPropose' ? (
          <View style={styles.requestedView}>
            <ImageBackground
              source={images.postImage1}
              style={styles.requestedCoverPhotoStyle}
              borderRadius={10}>
              <View style={styles.bottomView}>
                <View>
                  <TouchableOpacity
                    style={
                      requestReview
                        ? styles.buttonStyle
                        : styles.requestedButtonStyle
                    }
                    onPress={() => [
                      setRequestReview(!requestReview),
                      // setSeeReview(true),
                    ]}>
                    {requestReview && (
                      <Image
                        source={images.tick}
                        style={styles.iconStyle}
                        tintColor={colors.white}
                      />
                    )}
                    <AppText
                      body={requestReview ? 'Reviewed' : 'Add a Review'}
                      style={[styles.reviewText, {color: colors.white}]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            {requestReview && (
              <Pressable onPress={() => setSeeReview(true)}>
                <AppText body={'See Review'} style={styles.seeReviewText} />
              </Pressable>
            )}
          </View>
        ) : (
          <View style={styles.serviceRequestView}>
            <View style={styles.serviceborderView}>
              <View style={styles.servicesInnerView}>
                <View style={styles.serciveImgView}>
                  <Image
                    source={images.services1}
                    style={styles.serviceImgStyle}
                    tintColor={colors.cyanDark}
                  />
                </View>
              </View>
              <View style={styles.servicesTextView}>
                <AppText body={'Interior Design Consultation'} />
                <AppText
                  body={
                    'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal. '
                  }
                  style={styles.description}
                />
                <View style={{marginTop: heightPixel(10)}}>
                  <TouchableOpacity
                    // style={styles.serviceButtonStyle}
                    style={
                      seeServiceReview
                        ? styles.serviceButtonStyle
                        : styles.serviceRequestStyle
                    }
                    onPress={() => [
                      setSeeServiceReview(!seeServiceReview),
                      // setSeeReview(true),
                    ]}>
                    {seeServiceReview && (
                      <Image
                        source={images.tick}
                        style={styles.iconStyle}
                        tintColor={colors.white}
                      />
                    )}
                    <AppText
                      body={seeServiceReview ? 'Reviewed' : 'Requested Review'}
                      style={[
                        styles.reviewText,
                        {
                          color: seeServiceReview
                            ? colors.white
                            : colors.darkBlack,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {seeServiceReview && (
              <Pressable onPress={() => setOpenServiceReviewModal(true)}>
                <AppText body={'See Review'} style={styles.seeReviewText} />
              </Pressable>
            )}
          </View>
        )}
        {showMessageStatusNow && (
          <View style={[styles.messageDeliveredView]}>
            <Image
              source={images.unread}
              style={styles.readUnreadIme}
              tintColor={keyId == 11 && colors.pink}
            />
            <AppText
              body={keyId == 11 ? 'Seen' : 'Delivered'}
              style={[styles.timeText, keyId == 11 && {color: colors.pink}]}
            />
          </View>
        )}
        {keyId == 11 && <CompanyPageCardInChat />}
        {GroupChat && (
          <Image
            source={showImageOrNot ? senderProfileIcon : {}}
            style={{width: 30, height: 30}}
          />
        )}
      </View>
      {seeReview && (
        <AddReviewModal
          setAddReview={setSeeReview}
          productModal={true}
          productIsReviewd={requestReview}
          isReviewCompleted={true}
          doneButtonRequest={() => {
            setIsReviewCompleted(true);
          }}
          requestAgainReviewOnPress={() => {
            setSeeReview(false);
          }}
          addReviewOnPress={() => {
            setSeeReview(false);
            onBackPress();
          }}
        />
      )}
      {openServiceReviewModal && (
        <AddReviewModal
          setAddReview={setOpenServiceReviewModal}
          productModal={false}
          productIsReviewd={requestReview}
          isReviewCompleted={true}
          doneButtonRequest={() => {
            setIsReviewCompleted(true);
          }}
          requestAgainReviewOnPress={() => {
            setOpenServiceReviewModal(false);
          }}
          addReviewOnPress={() => {
            setOpenServiceReviewModal(false);
            onBackPress();
          }}
        />
      )}
    </>
  );
};

export default SenderMessagesCard;
