import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {DataContext} from '../../context/DataContext';

const AddForm = () => {
  const {setReward} = useContext(DataContext);
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const onSubmit = () => {
    if (!to && !amount && !message) {
      setError('Please fill input fields.');
    } else {
      setError('');
    }
  };
  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={{padding: 20}}>
        <ScrollView>
          <View style={{paddingVerticalView: 10}}>
            <Text style={{color: 'lightyellow', paddingBottom: 5}}>To</Text>
            <TextInput
              value={to}
              onChangeText={val => {
                setTo(val);
              }}
              style={{
                borderWidth: 1,
                borderColor: 'lightyellow',
                color: 'white',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={{color: 'lightyellow', paddingBottom: 5}}>Amount</Text>
            <TextInput
              value={amount}
              onChangeText={val => {
                setAmount(val);
              }}
              style={{
                borderWidth: 1,
                borderColor: 'lightyellow',
                color: 'white',
              }}
            />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={{color: 'lightyellow', paddingBottom: 5}}>
              Message
            </Text>
            <TextInput
              multiline
              value={message}
              numberOfLines={5}
              onChangeText={val => {
                setMessage(val);
              }}
              style={{
                borderWidth: 1,
                borderColor: 'lightyellow',
                color: 'white',
                textAlignVertical: 'top',
              }}
            />
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
          <View
            style={{width: '80%', alignSelf: 'center', paddingVertical: 10}}>
            <Pressable
              onPress={onSubmit}
              style={{
                backgroundColor: 'white',
                height: 40,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Text style={{color: 'black'}}>Give</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default AddForm;

const styles = StyleSheet.create({});
