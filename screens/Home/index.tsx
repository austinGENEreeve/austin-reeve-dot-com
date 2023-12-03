import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AppIcon from "../../components/AppIcon";
import NavBar from "../../components/NavBar";
import { LinearGradient } from "expo-linear-gradient";
import Doc from "../../components/Doc";
import Title from "../../components/Title";
import Marble from "../../components/Boards/Marble";
import Austin from "../../components/Boards/Austin";

const BACKGROUND_IMAGE = require("../../assets/images/iosBackground.jpeg");
const MARBLE_IMAGE = require("../../assets/images/marble_icon.png");

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [title, setTitle] = useState<string>("Austin Reeve");
  const [icon, setIcon] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const _onHoverOut = () => {
    setTitle("Austin Reeve");
    setIcon(null);
  };

  return (
    <View style={styles.body}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.1)"]}
        style={styles.background}
      />
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.phoneBackground}>
            <Image
              resizeMode="cover"
              style={styles.phoneScreen}
              source={BACKGROUND_IMAGE}
            />
            <NavBar
              isEditMode={editMode}
              editComplete={() => {
                setEditMode(false);
              }}
            />
            <View style={styles.iconRow}>
              <AppIcon
                name="Marble"
                onHoverIn={() => {
                  setTitle("Marble");
                  setIcon(MARBLE_IMAGE);
                }}
                onHoverOut={_onHoverOut}
                image={MARBLE_IMAGE}
                setEditMode={() => {
                  setEditMode(!editMode);
                }}
                isEditMode={editMode}
              />
            </View>
            <View style={styles.doc}>
              <Doc
                setTitle={(title: string): void => {
                  setTitle(title);
                }}
                onHoverOut={() => _onHoverOut()}
                setEditMode={() => {
                  setEditMode(!editMode);
                }}
                editMode={editMode}
              />
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Title title={title} />
          {title === "Marble" && <Marble />}
          {title === "Austin Reeve" && (<Austin />)}
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
  background: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
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
    justifyContent: 'flex-start',
    alignItems: "flex-start",
  },
  phoneBackground: {
    height: 600,
    width: 280,
    backgroundColor: "#000",
    borderRadius: 40,
    borderCurve: "continuous",
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 18,
  },
  phoneScreen: {
    position: "absolute",
    top: 10,
    height: 580,
    width: 260,
    borderRadius: 30,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  iconRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    marginTop: 10,
  },
  doc: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
