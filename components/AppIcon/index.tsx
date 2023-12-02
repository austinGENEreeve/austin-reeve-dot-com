import React, { FC, useEffect, useState } from "react";
import { Image, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

interface AppIconProps {
  name: string;
  onPress?: () => void;
  image?: any;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  isEditMode?: boolean;
  setEditMode?: () => void;
  hideName?: boolean;
}

const AppIcon: FC<AppIconProps> = ({
  name,
  onPress = () => {},
  image,
  onHoverIn = () => {},
  onHoverOut = () => {},
  isEditMode = false,
  setEditMode = () => {},
  hideName = false,
}) => {
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0.5);
  const minusOffset = useSharedValue(0);

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

  useEffect(() => {
    if (isEditMode) {
      minusOffset.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      rotation.value = withSequence(
        withTiming(0, {
          duration: Math.floor(Math.random() * 20) + 120,
          easing: Easing.inOut(Easing.ease),
        }),
        withRepeat(
          withTiming(1, {
            duration: Math.floor(Math.random() * 20) + 120,
            easing: Easing.inOut(Easing.ease),
          }),
          -1,
          true
        )
      );
    } else {
      minusOffset.value = withTiming(0, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });
      rotation.value = withTiming(0.5, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isEditMode]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(offset.value, [0, 1], [1, 1.1], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const iconEditAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${interpolate(
            rotation.value,
            [0, 0.5, 1],
            [
              Math.floor(Math.random() * -2) - 1,
              0,
              Math.floor(Math.random() * 2) + 1,
            ],
            Extrapolate.CLAMP
          )}deg`,
        },
        {
          scale: interpolate(
            rotation.value,
            [0, 0.5, 1],
            [1.01, 1, 1.01],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const minusAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            minusOffset.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        minusOffset.value,
        [0, 0.9],
        [0, 0.9],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View style={isEditMode ? iconEditAnimatedStyle : null}>
      <Pressable
        onLongPress={() => {
          setEditMode();
        }}
        onHoverIn={() => {
          isEditMode ? null : _onHoverIn();
        }}
        onHoverOut={() => {
          isEditMode ? null : _onHoverOut();
        }}
        onPress={() => (isEditMode ? null : onPress())}
      >
        <Animated.View
          style={[
            styles.icon,
            iconAnimatedStyle,
            {
              backgroundColor: image ? null : "#fff",
            },
          ]}
        >
          {image && <Image style={styles.image} source={image} />}
          <Animated.View style={[styles.minus, minusAnimatedStyle]}>
            <Feather name="minus" size={16} color="black" />
          </Animated.View>
        </Animated.View>
      </Pressable>
      {!hideName && (
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>)}
    </Animated.View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  name: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 9,
    maxWidth: 60,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  minus: {
    position: "absolute",
    top: -6,
    left: -6,
    width: 16,
    height: 16,
    backgroundColor: "grey",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
