import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from 'react-native-actions-sheet';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../assets';
import AppText from '../AppText';
import {useDispatch, useSelector} from 'react-redux';
import {setOpenBottomSheet} from '../../app/slices/postSlice';
import {companyBottomModalData} from '../../utils/data/JsonData';

const PostBottomSheet = () => {
  const refCategorySheet = useRef();

  return (
    <View style={styles.topView}>
      <ActionSheet
        ref={refCategorySheet}
        useBottomSafeAreaPadding={true}
        headerAlwaysVisible={true}
        animated={true}
        closable={true}
        closeOnPressBack={true}
        closeOnTouchBackdrop={true}>
        <FlatList
          data={companyBottomModalData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.itemStyle}
                onPress={() => Alert.alert(item.name)}>
                <View style={styles.bottomMiddleView}>
                  <Image
                    source={item?.icon}
                    style={styles.imgStyle}
                    tintColor={colors.black}
                  />
                  <AppText body={item?.name} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ActionSheet>
    </View>
  );
};

registerSheet('PostBottomSheet', PostBottomSheet);
export default PostBottomSheet;
