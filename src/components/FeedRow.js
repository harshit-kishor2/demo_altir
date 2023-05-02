import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssetConst from '../assets';

const FeedRow = ({image, title, subTitle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}>
      <View style={{width: '15%', marginHorizontal: 10}}>
        <Image
          source={image}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
      </View>
      <View style={{width: '80%'}}>
        <Text style={{color: '#000000', fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: '#00000060', fontWeight: 'normal'}}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default FeedRow;

const styles = StyleSheet.create({});
