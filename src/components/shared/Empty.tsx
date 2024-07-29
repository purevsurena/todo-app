import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { ThemedText } from "@/components/shared/ThemedText";
import { ThemedView } from "@/components/shared/ThemedView";
import { Colors } from "@/constants/Colors";

const EmptyComponent = () => {
  return (
    <ThemedView style={styles.emptyComponent}>
      <ThemedText type="default" style={styles.emptyText}>
        Your todo list is empty. Add a new reminder to organize your tasks.
      </ThemedText>
    </ThemedView>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  emptyComponent: {
    padding: 32,
    backgroundColor: "transparent",
    marginTop: Dimensions.get("screen").height / 3 - 32,
  },
  emptyText: {
    color: Colors.generic.greyText,
    textAlign: "center",
  },
});
