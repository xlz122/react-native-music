import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchHeader from './search-header/SearchHeader';
import Banner from '../../components/banner/Banner';

function Find() {
  return (
    <View style={styles.find}>
      <SearchHeader />
      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  find: {
    display: 'flex'
  }
});

export default Find;
