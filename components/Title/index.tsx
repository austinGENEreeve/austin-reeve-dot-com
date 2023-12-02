import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  const offset = useSharedValue(0);
  // const [displayTitle, setDisplayTitle] = useState<string>(title);

  useEffect(() => {
    offset.value = 0;
    offset.value = withTiming(1, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [title]);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offset.value, [0, 1], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(
            offset.value,
            [0, 1],
            [-100, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.body, titleAnimatedStyle]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
};

export default Title;

const styles = StyleSheet.create({
  body: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
  },
});
