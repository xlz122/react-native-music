import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const DATA = [
  {
    title: '最近播放',
    icon: require('../../../assets/image/mine/icon-lately.png')
  },
  {
    title: '本地/下载',
    icon: require('../../../assets/image/mine/icon-file.png')
  },
  {
    title: '云盘',
    icon: require('../../../assets/image/mine/icon-cloud-disk.png'),
    iconStyle: {
      height: 23.5
    }
  },
  {
    id: '3ad53abb',
    title: '已购',
    icon: require('../../../assets/image/mine/icon-purchased.png'),
    iconStyle: {
      width: 25.5,
      height: 27
    }
  },
  {
    title: '我的好友',
    icon: require('../../../assets/image/mine/icon-friend.png'),
    iconStyle: {
      width: 27,
      height: 25
    }
  },
  {
    title: '收藏和赞',
    icon: require('../../../assets/image/mine/icon-collection.png'),
    iconStyle: {
      width: 26,
      height: 24
    }
  },
  {
    title: '我的播客',
    icon: require('../../../assets/image/mine/icon-bolg.png'),
    iconStyle: {
      height: 21
    }
  },
  {
    title: '音乐罐子',
    icon: require('../../../assets/image/mine/icon-jar.png'),
    iconStyle: {
      width: 22.5,
      height: 28
    }
  }
];

function Category() {
  const renderItem = (item, index) => (
    <TouchableOpacity activeOpacity={1}>
      <View style={
        [
          styles.item,
          index % 4 ? styles.item : styles.firstItem
        ]
      }>
        <View style={styles.itemImageCover}>
          <Image
            style={
              [
                styles.itemImage,
                item.iconStyle ? item.iconStyle : styles.itemImage
              ]
            }
            source={item.icon}
            resizeMode={'stretch'}
          />
        </View>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.list}>
      {DATA.map((item, index) => {
        return renderItem(item, index);
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 8
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 75,
    marginTop: 22.5,
    marginBottom: 2
  },
  itemImageCover: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28
  },
  itemImage: {
    width: 28,
    height: 28
  },
  itemText: {
    marginTop: 3.5,
    color: '#6f6f6f',
    fontSize: 12
  }
});

export default Category;
