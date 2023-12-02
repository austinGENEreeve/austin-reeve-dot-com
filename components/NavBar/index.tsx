import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import BatteryIcon from "../BatteryIcon";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";

interface NavBarProps {
  isEditMode?: boolean;
  editComplete?: () => void;
}

const NavBar: FC<NavBarProps> = ({
  isEditMode = false,
  editComplete = () => {},
}) => {
  const offset = useSharedValue(0);

  const time = new Date()
    .toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/ ?[AP]M$/, "")
    .replace(/^0+/, "");

  useEffect(() => {
    if (isEditMode) {
      offset.value = withDelay(
        400,
        withTiming(1, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
        })
      );
    } else {
      offset.value = 0;
    }
  }, [isEditMode]);

  const doneButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
      transform: [
        {
          scale: interpolate(offset.value, [0, 1], [0.5, 1]),
        },
      ],
    };
  });

  return (
    <View style={styles.body}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.dynamicIsland} />
      <View style={styles.statuses}>
        {isEditMode && (
          <Animated.View
            style={[doneButtonAnimatedStyle, styles.doneContainer]}
          >
            <BlurView intensity={100} tint="dark" style={styles.doneButton}>
              <Pressable onPress={() => editComplete()}>
                <Text style={styles.doneButtonText}>Done</Text>
              </Pressable>
            </BlurView>
          </Animated.View>
        )}
        <Feather name="wifi" size={14} color="white" />
        <View style={{ width: 10 }} />
        <BatteryIcon />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  body: {
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 18,
  },
  timeContainer: {
    width: 90,
    paddingLeft: 20,
    justifyContent: "center",
  },
  time: {
    marginTop: 2,
    color: "white",
    fontSize: 11,
    textAlign: "center",
    fontWeight: "600",
  },
  dynamicIsland: {
    height: 24,
    marginTop: 2,
    width: 78,
    borderRadius: 14,
    backgroundColor: "black",
  },
  statuses: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 40,
    width: 90,
  },
  batteryPercentage: {
    color: "white",
    fontSize: 10,
  },
  doneContainer: {
    position: "absolute",
    top: -2,
    left: 4,
    zIndex: 2,
  },
  doneButton: {
    height: 24,
    width: 58,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  doneButtonText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: -1,
    fontWeight: "bold",
    color: "#fff",
  },
});
