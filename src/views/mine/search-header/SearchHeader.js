import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

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
      <View style={styles.microphone}>
        <Image
          style={styles.microphoneIcon}
          source={require('../../../assets/image/mine/icon-search.png')}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    marginBottom: 6
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
  microphone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 48,
    height: 20
  },
  microphoneIcon: {
    width: 25,
    height: 25,
    marginRight: 16
  }
});

export default SearchHeader;
