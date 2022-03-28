import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function SearchHeader() {
  return (
    <View style={styles.searchHearch}>
      <View style={styles.collapsed}>
        <Image
          style={styles.collapsedIcon}
          source={require('../../../assets/image/icon-collapsed.png')}
          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.search}>
        <Image
          style={styles.searchIcon}
          source={require('../../../assets/image/icon-search.png')}
          resizeMode={'stretch'}
        />
        <Text style={styles.searchText}>晚安 最近很火哦</Text>
      </View>
      <View style={styles.microphone}>
        <Image
          style={styles.microphoneIcon}
          source={require('../../../assets/image/find/icon-microphone.png')}
          resizeMode={'stretch'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchHearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 63
  },
  collapsed: {
    width: 52,
    height: 20
  },
  collapsedIcon: {
    width: 22,
    height: 21,
    marginLeft: 15
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginLeft: 15
  },
  searchText: {
    marginLeft: 2,
    color: '#8f8f8f',
    fontSize: 15
  },
  microphone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 48,
    height: 20
  },
  microphoneIcon: {
    width: 21,
    height: 25,
    marginRight: 13
  }
});

export default SearchHeader;
