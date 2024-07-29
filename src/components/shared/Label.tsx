import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Click from "@/components/layouts/Click";
import { ThemedText } from "@/components/shared/ThemedText";
import { ThemedView } from "@/components/shared/ThemedView";
import { Colors } from "@/constants/Colors";

interface LabelProps {
  onPress: () => void;
  active: boolean;
  label: string;
}

const Label: React.FC<LabelProps> = ({ onPress, active, label }) => {
  return (
    <Click onPress={onPress}>
      <ThemedView
        style={[
          styles.labelContainer,
          {
            borderColor: active
              ? Colors.generic.turquoise
              : Colors.generic.label,
          },
        ]}
      >
        <ThemedText>{label}</ThemedText>
      </ThemedView>
    </Click>
  );
};

export default Label;

const styles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: Colors.generic.label,
    marginLeft: 8,
    marginBottom: 8,
    borderWidth: 2,
  } as ViewStyle,
});
