import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea',
    title: '每日推荐',
    icon: require('../../../assets/image/find/icon-recommend.png')
  },
  {
    id: '3ac68afc',
    title: '私人FM',
    icon: require('../../../assets/image/find/icon-fm.png')
  },
  {
    id: '58694a0f',
    title: '歌单',
    icon: require('../../../assets/image/find/icon-song-sheet.png')
  },
  {
    id: '3ad53abb',
    title: '排行榜',
    icon: require('../../../assets/image/find/icon-toplist.png')
  },
  {
    id: 'fbd91aa9',
    title: '直播',
    icon: require('../../../assets/image/find/icon-live.png')
  },
  {
    id: '58697f63',
    title: '数字专辑',
    icon: require('../../../assets/image/find/icon-album.png')
  },
  {
    id: '145571e2',
    title: '专注冥想',
    icon: require('../../../assets/image/find/icon-absorbed.png')
  },
  {
    id: '3ac69d72c',
    title: '歌房',
    icon: require('../../../assets/image/find/icon-song-room.png')
  },
  {
    id: 'fbd91aaf',
    title: '游戏专区',
    icon: require('../../../assets/image/find/icon-game.png')
  }
];

function Category() {
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
          source={item.icon}
          resizeMode={'stretch'}
        />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        horizontal
        initialNumToRender={6}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 14
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 19
  },
  firstItem: {
    marginLeft: 17
  },
  itemImage: {
    width: 46,
    height: 46
  },
  itemText: {
    marginTop: 3,
    color: '#333',
    fontSize: 12
  }
});

export default Category;
