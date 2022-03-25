import React from 'react';
import { View, StyleSheet } from 'react-native';
import Banner from '../../components/banner/Banner';

function Find() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchHearch}></View>
      <Banner></Banner>
    </View>
  );
}

const styles = StyleSheet.create({
  searchHearch: {
    height: 63
  }
});

export default Find;
