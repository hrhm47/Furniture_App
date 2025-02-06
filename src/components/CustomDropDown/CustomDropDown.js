import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import {colors, heightPixel, images} from '../../assets';
import {styles} from './styles';

const CustomDropDown = ({
  dropDownArray,
  selectedServices,
  setSelectedServices,
  setOpenDropDownModal,
  openDropDownModal,
  lastHeadingTitle,
  multiSelction = true,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const addServiceToList = selectedList => {
    try {
      const selectedProductsSet = new Set(
        selectedServices.map(item => item.key),
      );
      const newSelectedProducts = new Set(selectedProductsSet);

      if (selectedProductsSet.has(selectedList.key)) {
        newSelectedProducts.delete(selectedList.key);
      } else {
        newSelectedProducts.add(selectedList.key);
      }

      const updatedSelectedProducts = Array.from(newSelectedProducts).map(key =>
        dropDownArray.find(item => item.key === key),
      );

      setSelectedServices(updatedSelectedProducts);
    } catch (error) {
      console.error('Error updating selected products:', error);
    }
  };

  return (
    <View style={styles.topView}>
      <View style={styles.secondaryView}>
        <AppText
          body={lastHeadingTitle}
          style={[
            styles.textStyle,
            {
              color:
                selectedServices?.length >= 1 ? colors.darkBlack : colors.grey,
            },
          ]}
        />
        <TouchableOpacity
          onPress={() => [
            setIsClicked(!isClicked),
            setOpenDropDownModal(!openDropDownModal),
          ]}>
          <Image
            source={images.downArrow}
            style={styles.dropDownIcon}
            tintColor={isClicked ? colors.grey : colors.darkBlack}
          />
        </TouchableOpacity>
      </View>
      {openDropDownModal && (
        <View style={styles.flatListView}>
          <View style={styles.flatListInnerView}>
            <AppText
              body={'Select...'}
              style={[styles.textStyle, {color: colors.grey}]}
            />
          </View>
          <FlatList
            data={dropDownArray}
            keyExtractor={item => item.key.toString()} // Use keyExtractor for the unique key
            renderItem={({item}) => {
              const isSelected = selectedServices.some(
                selectedItem => selectedItem.key === item.key,
              );
              return (
                <TouchableOpacity
                  disabled={multiSelction}
                  style={styles.flatListInnerView}
                  onPress={() => [
                    setSelectedServices([item]),
                    setOpenDropDownModal(false),
                  ]}>
                  {multiSelction && (
                    <TouchableOpacity onPress={() => addServiceToList(item)}>
                      <Image
                        source={
                          isSelected ? images.selectConfirm : images.selectIcon
                        }
                        style={styles.iconStyle}
                        tintColor={isSelected ? colors.pink : colors.grey}
                      />
                    </TouchableOpacity>
                  )}
                  <AppText
                    body={item.name}
                    style={styles.textStyle}
                    numberOfLines={2}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;
