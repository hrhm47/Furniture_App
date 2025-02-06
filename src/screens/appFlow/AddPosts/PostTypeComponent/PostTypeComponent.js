import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, images} from '../../../../assets';
import {addPostData} from '../../../../utils/data/JsonData';
import AppText from '../../../../components/AppText';
import {useNavigation} from '@react-navigation/native';

const PostTypeComponent = ({userTyepedThoughts, setUserTypedThoughts}) => {
  const navigation = useNavigation();

  const navigateToMeScreen = routeName => {
    try {
      routeName == 'RFP'
        ? navigation.navigate(routeName, {
            userTyepedThoughts: userTyepedThoughts,
            headingName: 'Add Request For Proposal',
          })
        : navigation.navigate(routeName, {
            userTyepedThoughts: userTyepedThoughts,
          });
    } catch (error) {}
  };

  return (
    <View style={styles.topView}>
      <View style={styles.secondaryView}>
        {addPostData?.map(item => {
          return (
            <TouchableOpacity
              key={item?.key}
              style={styles.cardView}
              onPress={() => navigateToMeScreen(item.routeName)}>
              <Image
                source={item.icon}
                style={styles.iconStyle}
                tintColor={colors.grey}
              />
              <AppText body={item.name} style={styles.textStyle} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PostTypeComponent;
