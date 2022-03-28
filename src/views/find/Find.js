import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import SearchHeader from './search-header/SearchHeader';
import Banner from '../../components/banner/Banner';
import Category from './category/Category';

function Find() {
  return (
    <View style={styles.find}>
      <View style={[styles.group]}>
        <LinearGradinet
          colors={['#ececee', '#fff', '#fff']}
        >
          <SearchHeader />
          <Banner />
          <Category />
        </LinearGradinet>
        <View style={styles.line}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  find: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#f6f6f6'
  },
  group: {
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12
  },
  line: {
    height: 0.3,
    marginTop: 13,
    marginBottom: 5,
    backgroundColor: '#cfcfcf'
  }
});

export default Find;
