import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import UserActivityCard from './UserActivityCard';
import Buttons from '../Buttons';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import ViewAllButton from '../ViewAllButton';
import SmallSizeButton from '../SmallSizeButton';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';

const buttonsData = [
  {
    key: '1231',
    name: 'Posts',
    selected: true,
  },
  {
    key: '87ub8yu',
    name: 'Reposts',
    selected: false,
  },
  {
    key: '2fff',
    name: 'Saved',
    selected: false,
  },
  {
    key: '12rgss',
    name: 'Reacted',
    selected: false,
  },
];

const postedData = {
  Posts: [
    {
      key: '12422',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage1,
      reactionCount: 122,
      postDate: '1',
    },
    {
      key: '987hh',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage2,
      reactionCount: 433,
      postDate: '1',
    },
  ],
  Reposts: [
    {
      key: 'w32',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage1,
      reposted: true,
      postDate: '2',
    },
    {
      key: 'nnn',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage2,
      reposted: true,
      postDate: '5',
    },
  ],
  Saved: [
    {
      key: '1dq2',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage1,
      saved: true,
      postDate: '6',
    },
    {
      key: '09nn',
      description:
        'Ornare consequat in praesent risus rhoncus. Nunc vivamus venenatis diam.',
      image: images.postImage2,
      saved: true,
      postDate: '1',
    },
  ],
  Reacted: [
    {
      key: '2q43',
      image: images.postImage1,
      reactionType: images.likeFilled,
    },
    {
      key: 'o8bb',
      image: images.postImage2,
      reactionType: images.love,
    },
    {
      key: '2rcx',
      image: images.postImage4,
      reactionType: images.likeFilled,
    },
    {
      key: '098bb',
      image: images.postImage3,
      reactionType: images.insight,
    },
    {
      key: '111sw',
      image: images.postImage6,
      reactionType: images.funny,
    },
    {
      key: 'se5w',
      image: images.postImage5,
      reactionType: images.insight,
    },
    {
      key: '0sd00',
      image: images.postImage7,
      reactionType: images.likeFilled,
    },
    {
      key: '87v9v',
      image: images.postImage3,
      reactionType: images.love,
    },
  ],
};

const UserActivityStatus = ({
  heading,
  viewAllButtonPress,
  postsData,
  postButtonAvailable,
  postButtonOnPress,
  removeTabOnReturn = false,
}) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState('Posts');

  const selectButton = item => {
    setSelectedId(item?.name);
  };
  const data = [1, 2];
  return (
    <View style={styles.topView}>
      <View style={styles.bussinesDetials}>
        <AppText body={heading} style={styles.bussinessHeading} />
        {postButtonAvailable && (
          <SmallSizeButton
            buttonImage={images.add}
            buttonImageAvailable={true}
            ButtonText={'Post'}
            ButtonStyle={styles.postButtonStyle}
            ButtonPress={postButtonOnPress}
          />
        )}
      </View>
      <View style={{}}>
        <View style={styles.buttonsView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {buttonsData?.map(item => {
              return (
                <Buttons
                  key={item?.key}
                  jointButton={false}
                  mainButtonText={item?.name}
                  mainButtonTextColor={
                    item?.name === selectedId ? colors.white : colors.grey
                  }
                  mainButtonBgColor={
                    item?.name === selectedId ? colors.pink : colors.lightGrey
                  }
                  mainButtonBorderColor={
                    item?.name === selectedId ? colors.pink : colors.lightGrey
                  }
                  mainButtonStyle={styles.buttonStyles}
                  mainButtonOnPress={() => selectButton(item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={
            selectedId === 'Reacted' && {
              flexDirection: 'row',
              width: widthPixel(390),
              flexWrap: 'wrap',
              columnGap: widthPixel(5),
              rowGap: heightPixel(15),
              paddingVertical: heightPixel(15),
            }
          }>
          {postedData[selectedId]?.map((item, index) => {
            return selectedId === 'Reacted' ? (
              <>
                <View
                  key={item?.key + Math.random()}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={item?.image}
                    style={styles.reactedImg}
                    resizeMode="cover"
                  />
                  <View style={styles.reactionImgView}>
                    <Image
                      source={item?.reactionType}
                      style={styles.reactionImg}
                    />
                  </View>
                </View>
              </>
            ) : (
              <UserActivityCard
                key={item?.key}
                image={item?.image}
                description={item?.description}
                reactionCount={item?.reactionCount}
                daysCount={item?.postDate}
                reposted={item?.reposted}
                saved={item?.saved}
              />
            );
          })}
        </View>
      </View>
      <ViewAllButton
        isBorder={selectedId === 'Reacted' ? true : false}
        viewAllButtonPress={() => {
          if (selectedId === 'Reposts') {
            navigation.navigate(Routes.USERPOSTPAGE, {
              headingName: 'RePosts',
              removeTabOnReturn: true,
            });
          } else if (selectedId === 'Posts') {
            navigation.navigate(Routes.USERPOSTPAGE, {
              headingName: 'Posts',
              removeTabOnReturn: true,
            });
          }
        }}
      />
    </View>
  );
};

export default UserActivityStatus;
