import {Pressable, Text} from 'react-native';
import React from 'react';

const Tab = ({title, left, right, isActive, onPresss = () => {}}) => {
  return (
    <Pressable
      onPress={onPresss}
      style={{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isActive ? 'white' : 'lightgrey',
        borderTopLeftRadius: left && 20,
        borderTopRightRadius: right && 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: isActive ? '#00000070' : '#000000',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
