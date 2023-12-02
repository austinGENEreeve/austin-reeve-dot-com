import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AppIconProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

const AppIcon: FC<AppIconProps> = ({
  onHoverIn = () => {},
  onHoverOut = () => {},
}) => {
  const offset = useSharedValue(0);

  const _onHoverIn = () => {
    offset.value = withTiming(1, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
    if (onHoverIn) {
      onHoverIn();
    }
  };

  const _onHoverOut = () => {
    offset.value = withTiming(0, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
    if (onHoverOut) {
      onHoverOut();
    }
  };

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(offset.value, [0, 1], [1, 1.1], Extrapolate.CLAMP),
        },
      ],
    };
  });

  return (
    <Pressable
      onHoverIn={() => {
        _onHoverIn();
      }}
      onHoverOut={() => {
        _onHoverOut();
      }}
      onPress={() => console.log("Pressed")}
    >
      <Animated.View style={[styles.icon, iconAnimatedStyle]} />
    </Pressable>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
