import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AppIcon from "../../components/AppIcon";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const offset = useSharedValue(0);

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
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.phoneBackground}>
            <View style={styles.iconRow}>
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
            </View>
            <View style={styles.iconRow}>
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
            </View>
            <View style={styles.iconRow}>
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Text>Left</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 600,
    justifyContent: "space-between",
    paddingHorizontal: 100,
  },
  left: {
    width: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    width: "50%",
    flex: 1,
  },
  phoneBackground: {
    height: 600,
    width: 320,
    backgroundColor: "#000",
    borderRadius: 40,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
