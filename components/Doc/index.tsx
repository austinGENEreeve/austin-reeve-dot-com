import React, { FC } from "react";
import { View, StyleSheet, Linking } from "react-native";
import AppIcon from "../AppIcon";
import { BlurView } from "expo-blur";

const GITHUG_IMAGE = require("../../assets/images/github_icon.png");
const LINKEDIN_IMAGE = require("../../assets/images/linkedin_icon.png");
const X_IMAGE = require("../../assets/images/x_icon.png");
const EMAIL_IMAGE = require("../../assets/images/mail_icon.png");

const X_URL = "https://twitter.com/austinGENEreeve";
const LINKEDIN_URL = "https://www.linkedin.com/in/austin-reeve-12a301a0/";
const GITHUB_URL = "https://github.com/austinGENEreeve";
const EMAIL = "austingenereeve@gmail.com";

interface DocProps {
  setTitle: (title: string) => void;
  onHoverOut: () => void;
  setEditMode: (editMode: boolean) => void;
  editMode: boolean;
}

const Doc: FC<DocProps> = ({ setTitle, onHoverOut, setEditMode, editMode }) => {

  const _email = () => {
    const subject = encodeURIComponent("Portfolio Reaching Out");
    const url = `mailto:${EMAIL}?subject=${subject}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <BlurView tint="dark" style={styles.blur}>
      <View style={styles.body}>
        <View style={styles.iconRow}>
          <AppIcon
            name="Contact"
            hideName
            onHoverIn={() => {
              setTitle("Contact");
            }}
            onHoverOut={onHoverOut}
            setEditMode={() => {
              setEditMode(!editMode);
            }}
            isEditMode={editMode}
            image={EMAIL_IMAGE}
            onPress={() => {
              _email();
            }}
          />
          <AppIcon
            name="LinkedIn"
            hideName
            onHoverIn={() => {
              setTitle("LinkedIn");
            }}
            onHoverOut={onHoverOut}
            setEditMode={() => {
              setEditMode(!editMode);
            }}
            isEditMode={editMode}
            image={LINKEDIN_IMAGE}
            onPress={() => {
              Linking.openURL(LINKEDIN_URL);
            }}
          />
          <AppIcon
            name="Github"
            hideName
            onHoverIn={() => {
              setTitle("Github");
            }}
            onHoverOut={onHoverOut}
            setEditMode={() => {
              setEditMode(!editMode);
            }}
            isEditMode={editMode}
            image={GITHUG_IMAGE}
            onPress={() => {
              Linking.openURL(GITHUB_URL);
            }}
          />
          <AppIcon
            name="X"
            hideName
            onHoverIn={() => {
              setTitle("X");
            }}
            onHoverOut={onHoverOut}
            setEditMode={() => {
              setEditMode(!editMode);
            }}
            isEditMode={editMode}
            image={X_IMAGE}
            onPress={() => {
              Linking.openURL(X_URL);
            }}
          />
        </View>
      </View>
    </BlurView>
  );
};

export default Doc;

const styles = StyleSheet.create({
  blur:{
    margin: 20,
    borderRadius: 20,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginTop: 10,
  },
});
