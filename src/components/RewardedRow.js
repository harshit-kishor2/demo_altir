import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssetConst from '../assets';

const RewardedRow = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={AssetConst.PROFILE_PIC} style={styles.image} />
      </View>
      <View style={styles.desc}>
        <Text style={styles.titleText}>$20</Text>
        <Text style={styles.subtitleText}>Rewarded by - John Doe</Text>
      </View>
    </View>
  );
};

export default RewardedRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  desc: {
    width: '80%',
  },
  imageContainer: {
    width: '15%',
    marginHorizontal: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  titleText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#00000060',
    fontWeight: 'normal',
  },
});
