import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/shared/ThemedText";
import Click from "@/components/layouts/Click";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface NewReminderButtonProps {
  onPress: () => void;
  color: string;
}

const NewReminderButton: React.FC<NewReminderButtonProps> = ({
  onPress,
  color,
}) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Click
      style={{ ...styles.container, bottom: bottom + 20 }}
      onPress={onPress}
    >
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
