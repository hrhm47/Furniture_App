import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import MainButton from '../../MainButton';
import {useNavigation} from '@react-navigation/native';
import {Routes, StackNames} from '../../../navigation/Routes';
import AddReviewModal from '../../Modals/AddReviewModal';

const ReceiverMessagesCard = ({
  showTimeNow,
  GroupChat,
  showImageOrNot,
  receiverProfileIcon,
  fromReviewScreen,
  messageType,
}) => {
  const [requestReview, setRequestReview] = useState(false);
  const [seeReview, setSeeReview] = useState(false);
  const [seeServiceReview, setSeeServiceReview] = useState(false);
  const [openServiceReviewModal, setOpenServiceReviewModal] = useState(false);
  const [isReviewCompleted, setIsReviewCompleted] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.topView}>
        {GroupChat && (
          <Image
            source={showImageOrNot ? {} : receiverProfileIcon}
            style={{width: 30, height: 30}}
          />
        )}
        {messageType == 'text' ? (
          <View style={GroupChat && {marginLeft: widthPixel(15)}}>
            <View
              style={[
                styles.mainView,
                GroupChat && {
                  maxWidth: widthPixel(330),
                  // marginLeft: widthPixel(15),
                },
              ]}>
              <AppText
                body={
                  'ReceiverMReceiverMReceive rMRece iverM ReceiverMReceiverM essa ges Card Se n der R ece ive rM e Recei ver Messages Ca rd Se nd er Re ce ive rMe ssa gesC ard Se nder Receive.'
                }
                style={styles.messageText}
              />
            </View>
            {showTimeNow && (
              <AppText body={'11:09 pm'} style={styles.timeText} />
            )}
          </View>
        ) : messageType == 'productReviewRequest' ? (
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
                      // setRequestReview(!requestReview),
                      setSeeReview(!seeReview),
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
                      style={[
                        styles.reviewText,
                        {color: requestReview ? colors.white : colors.black},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            {showTimeNow && (
              <AppText body={'11:09 pm'} style={styles.timeText} />
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
                    style={styles.serviceButtonStyle}
                    onPress={() => [setSeeServiceReview(!seeServiceReview)]}>
                    <AppText
                      body={'Add a Review'}
                      style={[styles.reviewText, {color: colors.white}]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {showTimeNow && (
              <AppText body={'11:09 pm'} style={styles.timeText} />
            )}
          </View>
        )}
      </View>
      {seeReview && (
        <AddReviewModal
          setAddReview={setSeeReview}
          productModal={true}
          productIsReviewd={requestReview}
          isReviewCompleted={false}
          doneButtonRequest={() => {
            setIsReviewCompleted(true);
            setSeeReview(false);
          }}
          requestAgainReviewOnPress={() => {
            // setIsReviewCompleted(false);
          }}
          addReviewOnPress={() => {
            // setSeeReview(false);
            // onBackPress();
          }}
        />
      )}
      {seeServiceReview && (
        <AddReviewModal
          setAddReview={setSeeServiceReview}
          productModal={false}
          productIsReviewd={requestReview}
          isReviewCompleted={false}
          doneButtonRequest={() => {
            setIsReviewCompleted(true);
            setSeeServiceReview(false);
          }}
          requestAgainReviewOnPress={() => {
            // setIsReviewCompleted(false);
          }}
          addReviewOnPress={() => {
            // setSeeReview(false);
            // onBackPress();
          }}
        />
      )}
    </>
  );
};

export default ReceiverMessagesCard;
