import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import AssetConst from '../../assets';
import {DataContext} from '../../context/DataContext';

const Profile = () => {
  const {user} = useContext(DataContext);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={AssetConst.PROFILE_PIC} style={styles.image}></Image>
      </View>
      <View style={{width: '80%'}}>
        <Text style={styles.boldText}>{user.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>
            Given <Text style={styles.boldText}>${user.given}</Text>
          </Text>
          <Text> / </Text>
          <Text>
            Recieved <Text style={styles.boldText}>${user.recieved}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'lightyellow',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '20%',
    marginRight: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
