import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
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
    bannerImg().then((res) => {
      if (res.code === 200 && res.banners.length > 0) {
        setBanner({ ...banner, list: res.banners });
      }
    });
  };

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={1} >
        <View style={styles.coverContainer}>
          <Image
            style={styles.cover}
            source={{ uri: item.pic }}
            resizeMode={'stretch'}
          />
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
        autoPlayInterval={10000}
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
    height: 132
  },
  coverContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden'
  }
});

export default Banner;
