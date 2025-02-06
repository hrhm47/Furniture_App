import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, fontSize, images} from '../../../assets';

const data = [
  {
    key: '2eas',
    name: 'Shop Link',
    icon: images.global,
    details: 'http://www.urbandots.com',
  },
  {
    key: '89a',
    name: 'Social page link',
    icon: images.linkFilled,
    details: 'www.instagram.com/@urbandots',
  },
  {
    key: '2oawoi',
    name: 'Located at',
    icon: images.map,
    details: 'Jeopardy Lane, Chicago',
  },
  {
    key: 'ouq3je',
    name: 'Laucnhed',
    icon: images.calendar,
    details: 'since 1995',
  },
];

const BussinessModal = ({
  setShowBusinessModal,
  heading,
  showEditButton = false,
  editBussinessDetails,
}) => {
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => {
        setShowBusinessModal(false);
      }}>
      <Pressable style={styles.topView}>
        <View style={styles.bussinesDetials}>
          <View style={styles.middleView}>
            <AppText body={heading} style={styles.bussinessHeading} />
            {showEditButton && (
              <TouchableOpacity onPress={editBussinessDetails}>
                <Image
                  source={images.edit}
                  style={{width: 20, height: 20}}
                  tintColor={colors.grey}
                />
              </TouchableOpacity>
            )}
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View
                  style={styles.cardInnerView}
                  onStartShouldSetResponder={() => {
                    setShowBusinessModal(false);
                  }}>
                  <View style={styles.imgeview}>
                    <Image source={item.icon} style={styles.cardImageStyle} />
                  </View>
                  <View style={styles.innerCardStyle}>
                    <AppText
                      body={item.name}
                      numberOfLines={1}
                      style={[
                        styles.bussinessHeading,
                        {fontSize: fontSize.BODY1_bold},
                      ]}
                    />
                    <AppText
                      body={item.details}
                      numberOfLines={1}
                      style={styles.detailsSubheadingText}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default BussinessModal;
