import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/shared/ThemedText";
import Click from "@/components/layouts/Click";

interface NewReminderButtonProps {
  onPress: () => void;
  color: string;
}

const NewReminderButton: React.FC<NewReminderButtonProps> = ({
  onPress,
  color,
}) => {
  return (
    <Click style={styles.container} onPress={onPress}>
      <View>
        <MaterialCommunityIcons name="plus-circle" size={26} color={color} />
      </View>
      <ThemedText style={styles.text} type="default">
        New Reminder
      </ThemedText>
    </Click>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 64,
    right: 26,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginLeft: 4,
    fontWeight: "500",
    fontSize: 16,
  },
});

export default NewReminderButton;
