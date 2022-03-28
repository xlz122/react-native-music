import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';

function Dot(props) {
  const PaginationItem = props => {
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
            )
          }
        ],
        backgroundColor: '#fff'
      };
    }, [animValue, index, length]);

    return (
      <View
        style={[
          {
            overflow: 'hidden',
            transform: [
              {
                rotateZ: '0deg'
              }
            ]
          },
          styles.dotItem
        ]}
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
    <View style={styles.dotContainer}>
      {props.list && props.list.map((item, index) => {
        return (
          <PaginationItem
            key={index}
            animValue={props.progressValue}
            index={index}
            length={props.list.length}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    top: 140,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dotItem: {
    width: 9,
    height: 3,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10
  }
});

export default Dot;
