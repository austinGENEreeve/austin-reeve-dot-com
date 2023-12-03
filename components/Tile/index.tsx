import React, { FC, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

interface TileProps {
  children?: React.ReactNode;
  height?: number;
  width?: number;
}

const Tile: FC<TileProps> = ({ children, height, width }) => {
  const offset = useSharedValue(0);
  const enterOffset = useSharedValue(0);

  useEffect(() => {
    enterOffset.value = withDelay(
      Math.floor(Math.random() * 30) + 10,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, []);

  const _onHoverIn = () => {
    offset.value = withTiming(1, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const _onHoverOut = () => {
    offset.value = withTiming(0, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            offset.value,
            [0, 1],
            [1, 1.03],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const bodyAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        enterOffset.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            enterOffset.value,
            [0, 1],
            [-100, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.body,
        bodyAnimatedStyle,
        iconAnimatedStyle,
        {
          height: height,
          width: width,
        },
      ]}
    >
      <Pressable
        style={styles.press}
        onHoverIn={() => {
          _onHoverIn();
        }}
        onHoverOut={() => {
          _onHoverOut();
        }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderColor: "rgba(0,0,0,0.1)",
  },
  press: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
