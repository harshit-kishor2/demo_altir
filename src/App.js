import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dashboard} from './pages';
import {DataProvider} from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Dashboard />
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
