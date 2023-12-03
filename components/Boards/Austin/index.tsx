import React, { FC } from "react";
import { StyleSheet, Image, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Tile from "../../Tile";

const REACT_IMAGE = require("../../../assets/images/react_icon.png");
const EXPO_IMAGE = require("../../../assets/images/expo_icon.png");
const USU_IMAGE = require("../../../assets/images/usu_icon.png");
const MAP_IMAGE = require("../../../assets/images/slc_map.png");
const STARS_IMAGE = require("../../../assets/images/stars.jpg");

interface AustinProps {} 

const Austin: FC<AustinProps> = ({}) => {
  return (
    <Animated.View style={styles.body}>
      <View style={styles.tileRow}>
        <Tile
          height={120}
          width={120}
          children={<Image style={styles.image} source={REACT_IMAGE} />}
        />
        <Tile
          height={120}
          width={120}
          children={<Image style={styles.imageExpo} source={EXPO_IMAGE} />}
        />
      </View>
      <View style={styles.tileRow}>
        <Tile
          height={120}
          width={120}
          children={<Image style={styles.imageUsu} source={USU_IMAGE} />}
        />
        <Tile
          height={120}
          width={260}
          children={<Image style={styles.imageMap} source={MAP_IMAGE} />}
        />
      </View>
      <View style={styles.tileRow}>
        <Tile
          height={120}
          width={260}
          children={<Image style={styles.imageMap} source={STARS_IMAGE} />}
        />
      </View>
    </Animated.View>
  );
};

export default Austin;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: -60,
    padding: 10,
  },
  tileRow: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    zIndex: 1,
  },
  imageExpo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  imageUsu: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  imageMap: {
    width: 260,
    height: 120,
    borderRadius: 20,
  },
});
