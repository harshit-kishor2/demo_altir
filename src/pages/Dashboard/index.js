import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddForm from './AddForm';
import ListView from './ListView';
import Profile from './Profile';
const Dashboard = () => {
  const [bottomClick, setBottomClick] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'lightyellow'}}>
      <Profile />
      <View
        style={{
          flex: 1,
          backgroundColor: bottomClick ? 'black' : 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        {bottomClick ? <AddForm /> : <ListView />}
      </View>
      <View
        style={{
          height: 40,
          width: 60,
          borderRadius: 20,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}>
        <Pressable
          onPress={() => {
            setBottomClick(!bottomClick);
          }}>
          <Ionicons
            name={bottomClick ? 'close' : 'add'}
            size={20}
            color="#fff"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
