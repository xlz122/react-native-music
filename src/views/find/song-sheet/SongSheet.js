import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { recommendSongList } from '../../../api/find';
import { bigNumberTransform } from '../../../utils/utils';

function SongSheet() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getRecommendSongList();
  }, []);

  const getRecommendSongList = () => {
    recommendSongList({ limit: 6 })
      .then((res) => {
        if (res.code === 200) {
          setList(res.result);
        }
      })
      .catch(() => ({}));
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity activeOpacity={1}>
      <View style={
        [
          styles.item,
          index === 0 ? styles.firstItem : styles.item
        ]
      }>
        <View style={styles.itemCover}>
          <Image
            style={[styles.coverImage]}
            source={{ uri: item.picUrl }}
            resizeMode={'stretch'}
          />
          <View style={styles.coverTitle}>
            <Image
              style={[styles.playImage]}
              source={require('../../../assets/image/icon-play.png')}
              resizeMode={'stretch'}
            />
            <Text style={styles.coverTitleText}>
              {bigNumberTransform(item.playCount)}
            </Text>
          </View>
        </View>
        <Text
          style={styles.itemText}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>推荐歌单</Text>
        <View style={styles.more}>
          <Text style={styles.moreText}>更多</Text>
          <Image
            style={[styles.moreImage]}
            source={require('../../../assets/image/icon-arrow.png')}
            resizeMode={'stretch'}
          />
        </View>
      </View>
      <SafeAreaView style={styles.list}>
        <FlatList
          horizontal
          initialNumToRender={4}
          showsHorizontalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    marginTop: 12,
    marginBottom: 0
  },
  titleText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  },
  more: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 16,
    borderColor: '#eaeaea',
    borderWidth: 0.6,
    borderRadius: 15
  },
  moreText: {
    color: '#2f2f2f',
    fontSize: 13
  },
  moreImage: {
    width: 10,
    height: 10
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 5
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 104,
    marginRight: 10
  },
  firstItem: {
    marginLeft: 17
  },
  itemCover: {
    position: 'relative',
    width: 105,
    height: 105,
    overflow: 'hidden'
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 28
  },
  coverTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 3,
    right: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8
  },
  playImage: {
    width: 10,
    height: 10
  },
  coverTitleText: {
    marginLeft: 1,
    color: '#fff',
    fontSize: 11
  },
  itemText: {
    marginTop: 2,
    color: '#333',
    fontSize: 12
  }
});

export default SongSheet;
