import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { bannerImg } from '../../api/find';

// 获取屏幕宽度
const pageWidth = Dimensions.get('window').width;

function Banner() {
  const [banner, setBanner] = useState({
    list: [],
    index: 0
  });

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

  const PaginationItem = (props) => {
    const { animValue, index, length } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];

      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }

      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolate.CLAMP,
            ),
          },
        ],
        backgroundColor: '#fff'
      };
    }, [animValue, index, length]);

    return (
      <View
        style={[{
          overflow: 'hidden',
          transform: [
            {
              rotateZ: '0deg'
            }
          ],
        }, styles.bannerDot]}
      >
        <Animated.View
          style={[
            { flex: 1 },
            animStyle,
          ]}
        />
      </View>
    );
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
      <View style={styles.bannerDotContainer}>
        {banner.list && banner.list.map((item, index) => {
          return (
            <PaginationItem
              animValue={progressValue}
              index={index}
              key={index}
              length={banner.list.length}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    flex: 1,
    height: 150
  },
  coverContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 8
  },
  bannerDotContainer: {
    position: 'absolute',
    top: 140,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bannerDot: {
    width: 9,
    height: 3,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    opacity: 0.5
  }
});

export default Banner;
