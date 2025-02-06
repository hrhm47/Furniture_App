import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  colors,
  fontFamily,
  heightPixel,
  images,
  widthPixel,
} from '../../assets';
import AppText from '../AppText';
import ReactionTextComponent from '../ReactionTextComponent';

const UserActivityCard = ({
  description,
  image,
  reactionCount,
  daysCount,
  reposted,
  saved,
}) => {
  //   console.log('ractoina ', reactionCount);
  return (
    <View style={styles.userCardView}>
      <View style={styles.innerView}>
        <View style={{marginTop: heightPixel(6)}}>
          <Image source={image} style={styles.imgStyle} />
        </View>
        <View style={styles.textView}>
          <AppText
            body={description}
            numberOfLines={2}
            style={styles.description}
          />
          <View style={styles.reactionView}>
            {reposted || saved ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: widthPixel(5),
                }}>
                {saved && (
                  <>
                    <Image
                      source={images.saveFilled}
                      style={styles.reactionImg}
                      tintColor={colors.pink}
                    />
                  </>
                )}
                <AppText
                  body={reposted ? 'Reposted' : 'Saved'}
                  style={[
                    styles.description,
                    {
                      color: colors.pink,
                      fontFamily: fontFamily.MONTSERRAT_MEDIUM,
                    },
                  ]}
                />
              </View>
            ) : (
              <ReactionTextComponent />
            )}
            <AppText
              body={daysCount + 'd ago'}
              style={[styles.description, {color: colors.grey}]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserActivityCard;
