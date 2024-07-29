/* eslint-disable react/display-name */
import React, {
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { StyleSheet, Keyboard, Platform } from "react-native";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import Flex from "@/components/layouts/Flex";
import WhiteSpace from "@/components/layouts/WhiteSpace";
import Label from "@/components/shared/Label";
import { Colors } from "@/constants/Colors";
import Click from "@/components/layouts/Click";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GategoryTypes } from "@/types/global";
import { bottomSheetLabels } from "@/utils/headerConfigUtils";

interface BottomSheetComponentProps {
  onPress: () => void;
  label?: "today" | "tomorrow" | "datetime";
  task: string;
  setTask: (_: string) => void;
  isSelectLabel?: boolean;
  color: string;
  category: GategoryTypes;
  setSetegory: (_: GategoryTypes) => void;
}

const BottomSheetComponent = forwardRef<
  BottomSheetModal,
  BottomSheetComponentProps
>(
  (
    { onPress, task, setTask, isSelectLabel, color, category, setSetegory },
    ref,
  ) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      present: () => bottomSheetModalRef.current?.present(),
      dismiss: () => bottomSheetModalRef.current?.dismiss(),
    }));

    const handleTextInputSubmit = () => {
      onPress();
      Keyboard.dismiss();
      bottomSheetModalRef.current?.dismiss();
      if (isSelectLabel) {
        setSetegory("quick_notes");
      }
    };

    const dynamicSnapPoints: any = Platform.select({
      ios: isSelectLabel ? "20%" : "10%",
      android: "50%",
      web: "5%",
    });

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          onPress={handleTextInputSubmit}
        />
      ),
      [],
    );

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={[dynamicSnapPoints]}
          handleComponent={null}
          backdropComponent={renderBackdrop}
          backgroundStyle={{
            backgroundColor: Colors.generic.sheet,
            height: 300,
          }}
          android_keyboardInputMode="adjustResize"
        >
          <BottomSheetView style={styles.contentContainer}>
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              style={{ marginHorizontal: 16 }}
            >
              <BottomSheetTextInput
                placeholder="Add your task..."
                cursorColor={Colors.light.background}
                autoFocus
                value={task}
                onChangeText={setTask}
                placeholderTextColor={Colors.generic.greyText}
                style={{ borderBottomColor: color, ...styles.textInput }}
                onSubmitEditing={handleTextInputSubmit}
                returnKeyLabel="Add"
                returnKeyType="done"
              />
              <Click
                onPress={handleTextInputSubmit}
                style={{
                  paddingLeft: 16,
                  paddingVertical: 12,
                }}
              >
                <MaterialCommunityIcons name="send" size={30} color={color} />
              </Click>
            </Flex>
            <WhiteSpace size="24" />
            {isSelectLabel && (
              <>
                <Flex flexDirection="row" style={{ flexWrap: "wrap" }}>
                  {bottomSheetLabels?.map((item) => (
                    <Label
                      key={item.id}
                      onPress={() => setSetegory(item.category)}
                      label={item.label}
                      active={category === item.category}
                    />
                  ))}
                </Flex>
                <WhiteSpace size="12" />
              </>
            )}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default BottomSheetComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.generic.sheet,
  },
  textInput: {
    flex: 1,
    height: 55,
    color: Colors.light.background,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.generic.sheet,
  },
  dateTimePicker: {
    left: -8,
    alignSelf: "flex-start",
  },
});
