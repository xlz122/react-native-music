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
      <TouchableOpacity
        onPress={jumpLogin}
        style={[styles.group, styles.notLoginGroup]}
      >
        <View style={styles.notLogin}>
          <Image
            style={styles.notLoginAvatar}
            source={require('../../assets/image/mine/icon-avatar.png')}
            resizeMode={'stretch'}
          />
          <View style={styles.notLoginTitle}>
            <Text style={styles.notLoginText}>立即登录</Text>
            <Image
              style={styles.notLoginIcon}
              source={require('../../assets/image/mine/icon-arrow.png')}
              resizeMode={'stretch'}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.group]}>
        <Category />
        <View style={styles.line}></View>
      </View>
      <View style={[styles.group, styles.linkMusic]}>
        <Image
          style={styles.likeMusicIcon}
          source={require('../../assets/image/mine/icon-link-music-default.png')}
          resizeMode={'stretch'}
        />
        <View style={styles.linkMusicTitle}>
          <Text style={styles.linkMusicTitleText}>我喜欢的音乐</Text>
          <Text style={styles.linkMusicTitleNum}>0首</Text>
        </View>
        <View style={styles.linkMusicXinDong}>
          <Image
            style={styles.linkMusicXinDongIcon}
            source={require('../../assets/image/mine/icon-xindong.png')}
            resizeMode={'stretch'}
          />
          <Text style={styles.linkMusicXinDongText}>心动模式</Text>
        </View>
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
    height: 0.18,
    marginTop: 13,
    backgroundColor: '#eee'
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
  },
  linkMusic: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 83,
    paddingTop: 10,
    marginTop: 30.5
  },
  likeMusicIcon: {
    width: 50,
    height: 50,
    marginLeft: 15
  },
  linkMusicTitle: {
    flex: 1,
    marginLeft: 10
  },
  linkMusicTitleText: {
    color: '#333',
    fontSize: 15
  },
  linkMusicTitleNum: {
    color: '#ccc',
    fontSize: 11.5
  },
  linkMusicXinDong: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7.2,
    paddingRight: 7.2,
    marginRight: 15,
    borderColor: '#e2e2e2',
    borderWidth: 0.6,
    borderRadius: 12
  },
  linkMusicXinDongIcon: {
    width: 16,
    height: 16
  },
  linkMusicXinDongText: {
    marginLeft: 2,
    color: '#333',
    fontSize: 11
  }
});

export default Mine;
