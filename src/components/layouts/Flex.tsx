import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface FlexProps {
  flex?: number;
  flexDirection?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  alignSelf?: ViewStyle["alignSelf"];
  style?: ViewStyle;
  children?: React.ReactNode;
  testID?: string;
}

const Flex: React.FC<FlexProps> = ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  style,
  children,
}) => {
  const flexStyle: ViewStyle = {
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
  };

  return (
    <View testID="flexComponent" style={[styles.flex, flexStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },
});

export default Flex;
