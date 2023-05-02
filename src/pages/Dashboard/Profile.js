import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import AssetConst from '../../assets';
import {DataContext} from '../../context/DataContext';

const Profile = () => {
  const {user} = useContext(DataContext);
  return (
    <View
      style={{
        height: 120,
        backgroundColor: 'lightyellow',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{width: '20%', marginRight: 10}}>
        <Image
          source={AssetConst.PROFILE_PIC}
          style={{height: 80, width: 80, borderRadius: 40}}></Image>
      </View>
      <View style={{width: '80%'}}>
        <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>
            Given <Text style={{fontWeight: 'bold'}}>${user.given}</Text>
          </Text>
          <Text> / </Text>
          <Text>
            Recieved <Text style={{fontWeight: 'bold'}}>${user.recieved}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
