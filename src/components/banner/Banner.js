import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { bannerImg } from '../../api/find';
import Dot from './dot/Dot';

// 获取屏幕宽度
const pageWidth = Dimensions.get('window').width;

function Banner() {
  const [banner, setBanner] = useState({
    list: []
  });

  // 轮播滚动值
  const progressValue = useSharedValue(0);

  useEffect(() => {
    geeBannerImg();
  }, []);

  const geeBannerImg = () => {
    bannerImg()
      .then((res) => {
        if (res.code === 200 && res.banners.length > 0) {
          setBanner({ ...banner, list: res.banners });
        }
      })
      .catch(() => ({}));
  };

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1} >
        <View style={styles.coverContainer}>
          <View style={styles.cover}>
            <Image
              style={styles.coverImage}
              source={{ uri: item.pic }}
              resizeMode={'stretch'}
            />
            <View
              style={[
                styles.coverTitle,
                item.titleColor === 'blue'
                  ? styles.coverTitleBlue
                  : styles.coverTitle
              ]}
            >
              <Text style={styles.coverTitleText}>
                {item.typeTitle}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.banner}>
      <Carousel
        width={pageWidth}
        height={styles.banner.height}
        data={banner.list}
        renderItem={({ item }) => <RenderItem item={item} />}
        loop={true}
        autoPlay={true}
        autoPlayInterval={6000}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
      />
      <Dot
        list={banner.list}
        progressValue={progressValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    height: 130
  },
  coverContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  cover: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden'
  },
  coverImage: {
    width: '100%',
    height: '100%'
  },
  coverTitle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 7,
    backgroundColor: '#ec3d44',
    borderTopLeftRadius: 8
  },
  coverTitleText: {
    color: '#fff',
    fontSize: 12
  },
  coverTitleBlue: {
    backgroundColor: '#3488c8'
  }
});

export default Banner;
