import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { ClickProps, ClickDefaultProps } from "@/types/layout";

function Click(props: ClickProps): JSX.Element {
  const { onPress, onLongPress, disabled, children, style, hitSlop } = props;

  return (
    <RNBounceable
      testID="clickComponent"
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      hitSlop={{ top: hitSlop, bottom: hitSlop, right: hitSlop, left: hitSlop }}
      style={{ ...style }}
    >
      {children}
    </RNBounceable>
  );
}

Click.defaultProps = ClickDefaultProps;
export default Click;
