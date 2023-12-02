import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Battery from "expo-battery";

interface BatteryIconProps {}

const BatteryIcon: FC<BatteryIconProps> = ({}) => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const updateBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level > 0 ? level : 0.8);
    };

    const updateBatteryStatus = async () => {
      const status = await Battery.getBatteryStateAsync();
      setIsCharging(status === Battery.BatteryState.CHARGING);
    };

    const batteryLevelListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        setBatteryLevel(batteryLevel > 0 ? batteryLevel : 0.8);
      }
    );

    const batteryStateListener = Battery.addBatteryStateListener(
      ({ batteryState }) => {
        setIsCharging(batteryState === Battery.BatteryState.CHARGING);
      }
    );

    updateBatteryLevel();
    updateBatteryStatus();

    return () => {
      batteryLevelListener.remove();
      batteryStateListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View
          style={[
            styles.batteryFill,
            {
              width: 14 * batteryLevel,
              backgroundColor: isCharging
                ? "#46eb34"
                : batteryLevel >= 0.2
                ? "white"
                : "red",
            },
          ]}
        />
        {isCharging && (
          <View style={styles.zapContainer}>
            <Ionicons name="md-flash" size={14} color="#757575" />
            <View style={styles.zapBackgroundOne}>
              <Ionicons name="md-flash" size={14} color="#757575" />
            </View>
            <View style={styles.zapBackgroundTwo}>
              <Ionicons name="md-flash" size={14} color="#757575" />
            </View>
            <View style={styles.zapBackgroundThree}>
              <Ionicons name="md-flash" size={14} color="#757575" />
            </View>

            <View style={styles.zap}>
              <Ionicons name="md-flash" size={12} color="white" />
            </View>
          </View>
        )}
      </View>
      <View style={styles.batteryTop}></View>
    </View>
  );
};

export default BatteryIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: 9,
    width: 18,
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },
  batteryFill: {
    position: "absolute",
    left: 1,
    top: 1,
    height: 5,
    borderRadius: 1,
  },
  batteryTop: {
    height: 4,
    width: 1,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginLeft: 1,
    marginTop: 1,
  },
  zapContainer: {
    position: "absolute",
    left: 1,
    top: -5,
  },
  zapBackgroundOne: {
    position: "absolute",
    left: 0,
    top: 2,
  },
  zapBackgroundTwo: {
    position: "absolute",
    left: -1,
    top: 1,
  },
  zapBackgroundThree: {
    position: "absolute",
    left: 1,
    top: 1,
  },
  zap: {
    position: "absolute",
    left: 1,
    top: 1.5,
  },
});
