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
        <Image
          style={[styles.itemImage]}
          source={{ uri: item.picUrl }}
          resizeMode={'stretch'}
        />
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
  itemImage: {
    width: 105,
    height: 105,
    borderRadius: 28
  },
  itemText: {
    marginTop: 2,
    color: '#333',
    fontSize: 12
  }
});

export default SongSheet;
