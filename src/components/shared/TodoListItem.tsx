import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Flex from "@/components/layouts/Flex";
import { Colors } from "@/constants/Colors";
import Click from "@/components/layouts/Click";
import * as Animatable from "react-native-animatable";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TodoListItemProps {
  description: string;
  color: string;
  index: number;
  isChecked: boolean;
  onToggle: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  description,
  color,
  index,
  isChecked: initialChecked,
  onToggle,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle();
  };

  return (
    <Click onPress={handleToggle} style={styles.container}>
      <Animatable.View
        animation="slideInLeft"
        duration={(index + 1) * 300}
        style={{
          padding: 12,
          borderRadius: 16,
          backgroundColor: Colors.dark.background,
        }}
      >
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex flexDirection="row" alignItems="center">
            <BouncyCheckbox
              size={20}
              fillColor={color}
              unFillColor={Colors.generic.cardBG}
              text={description}
              textStyle={{
                color: isChecked
                  ? Colors.generic.greyText
                  : Colors.light.background,
              }}
              iconImageStyle={{ tintColor: Colors.generic.dark }}
              innerIconStyle={{ borderWidth: 1.5 }}
              isChecked={isChecked}
              onPress={handleToggle}
              disabled
            />
          </Flex>
        </Flex>
      </Animatable.View>
    </Click>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
