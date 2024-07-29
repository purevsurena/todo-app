import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/shared/ThemedText";
import { ThemedView } from "@/components/shared/ThemedView";
import Click from "@/components/layouts/Click";
import { Colors } from "@/constants/Colors";

type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface CardProps {
  iconName: MaterialCommunityIconName;
  iconColor: string;
  title: string | number;
  subtitle: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({
  iconName,
  iconColor,
  title,
  subtitle,
  onPress,
}) => {
  return (
    <Click onPress={onPress}>
      <ThemedView style={styles.cardContainer}>
        <View style={styles.header}>
          <MaterialCommunityIcons name={iconName} size={30} color={iconColor} />
          <ThemedText type="title">{title}</ThemedText>
        </View>
        <ThemedText type="subtitle" darkColor={iconColor}>
          {subtitle}
        </ThemedText>
      </ThemedView>
    </Click>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    paddingVertical: 16,
    paddingTop: 24,
    borderRadius: 16,
    width: Dimensions.get("screen").width / 2 - 24,
    backgroundColor: Colors.generic.cardBG,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
});

export default Card;
