import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SearchHeader from './search-header/SearchHeader';
import Category from './category/Category';

function Mine(props) {
  const jumpLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.mine}>
      <SearchHeader />
      <View style={[styles.group, styles.notLoginGroup]}>
        <View style={styles.notLogin}>
          <Image
            style={styles.notLoginAvatar}
            source={require('../../assets/image/mine/icon-avatar.png')}
            resizeMode={'stretch'}
          />
          <TouchableOpacity onPress={jumpLogin} style={styles.notLoginTitle}>
            <Text style={styles.notLoginText}>立即登录</Text>
            <Image
              style={styles.notLoginIcon}
              source={require('../../assets/image/mine/icon-arrow.png')}
              resizeMode={'stretch'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.group]}>
        <Category />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mine: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#f6f6f6'
  },
  group: {
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 12
  },
  line: {
    height: 0.3,
    marginTop: 13,
    backgroundColor: '#cfcfcf'
  },
  notLoginGroup: {
    marginTop: 39
  },
  notLogin: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75
  },
  notLoginAvatar: {
    position: 'absolute',
    top: -42,
    left: '50%',
    width: 72,
    height: 72,
    marginLeft: -35
  },
  notLoginTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26
  },
  notLoginText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  },
  notLoginIcon: {
    width: 12,
    height: 12,
    marginTop: 3,
    marginLeft: 2
  }
});

export default Mine;
