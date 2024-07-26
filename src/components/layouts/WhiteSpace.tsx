import React from "react";
import { WhiteSpaceProps } from "@/types/layout";
import { View } from "react-native";

const WhiteSpace: React.FC<WhiteSpaceProps> = ({ size, style }) => {
  return (
    <View
      testID="white-space"
      style={[{ height: parseInt(size, 10) }, style]}
    />
  );
};

export default WhiteSpace;
