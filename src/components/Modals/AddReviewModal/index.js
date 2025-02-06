import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, heightPixel, images} from '../../../assets';
import AppText from '../../AppText';
import {styles} from './styles';
import MainButton from '../../MainButton';
import Buttons from '../../Buttons';
import SmallSizeButton from '../../SmallSizeButton';

const starsData = [1, 2, 3, 4, 5];

const AddReviewModal = ({
  setAddReview,
  productModal,
  setIsReviewCompleted,
  isReviewCompleted,
  addReviewOnPress,
  requestAgainReviewOnPress,
  doneButtonRequest,
}) => {
  const [myFilledStars, setMyFilledStars] = useState(0);

  return (
    <Modal transparent visible={true} animationType="fade">
      <View style={styles.TOPTOPView}>
        <View style={styles.topView}>
          <TouchableOpacity
            style={styles.crossIconVeiw}
            onPress={() => setAddReview(false)}>
            <Image source={images.crossIcons} style={styles.crossIcons} />
          </TouchableOpacity>
          <View
            style={styles.mainView}
            onStartShouldSetResponder={() => Keyboard.dismiss()}>
            {productModal ? (
              <>
                <Image source={images.postImage5} style={styles.imgStyle} />
                <AppText body={'Add a review'} style={styles.reviewText} />
                <TextInput
                  placeholder="add review..."
                  scrollEnabled={true}
                  style={styles.inputStyle}
                  placeholderTextColor={colors.grey}
                  multiline
                />
              </>
            ) : (
              <>
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
                  </View>
                </View>
                <AppText body={'Add a review'} style={styles.reviewText} />
              </>
            )}
            <FlatList
              data={starsData}
              horizontal
              contentContainerStyle={[
                styles.contentContainerStyle,
                productModal && {paddingVertical: heightPixel(20)},
                !productModal && {paddingBottom: heightPixel(20)},
              ]}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (index == 0 && myFilledStars !== 0) {
                        setMyFilledStars(0);
                      } else {
                        setMyFilledStars(item);
                      }
                    }}>
                    <Image
                      source={
                        myFilledStars >= item
                          ? images.StarFilled
                          : images.starUnFilled
                      }
                      style={styles.starsIcon}
                    />
                  </TouchableOpacity>
                );
              }}
            />

            {isReviewCompleted ? (
              <View style={styles.buttonViewStyle}>
                <SmallSizeButton
                  ButtonStyle={styles.button1Style}
                  ButtonText={'Add'}
                  textStyle={{color: colors.white}}
                  ButtonPress={addReviewOnPress}
                />
                <SmallSizeButton
                  ButtonStyle={styles.button2Style}
                  ButtonText={'Request Again'}
                  textStyle={{color: colors.darkBlack}}
                  ButtonPress={requestAgainReviewOnPress}
                />
              </View>
            ) : (
              <View>
                <SmallSizeButton
                  ButtonStyle={styles.buttonStyle}
                  ButtonText={'Done'}
                  textStyle={{color: colors.white}}
                  ButtonPress={doneButtonRequest}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddReviewModal;
