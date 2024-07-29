import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/shared/ThemedView";
import Card from "@/components/shared/Card";
import Flex from "@/components/layouts/Flex";
import { ThemedText } from "@/components/shared/ThemedText";
import { HelloWave } from "@/components/shared/HelloWave";
import QuckNotesCard from "@/components/shared/QuckNotesCard";
import { Colors } from "@/constants/Colors";
import WhiteSpace from "@/components/layouts/WhiteSpace";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import NewReminderButton from "@/components/shared/NewReminderButton";
import { useTodoContext } from "@/context/TodoContext";
import BottomSheetComponent from "@/components/shared/BottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GategoryTypes } from "@/types/global";

export default function HomeScreen() {
  const { todoCounts, todos, loadTodos, addTodo, loadTodoCounts } =
    useTodoContext();

  useEffect(() => {
    loadTodoCounts();
    loadTodos("quick_notes");
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<GategoryTypes>("quick_notes");

  const handleOpenBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleCreateTodo = async () => {
    await addTodo(task, selectedCategory);
    setTask("");
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ThemedView style={styles.stepContainer}>
      <ScrollView>
        <WhiteSpace size="24" />

        <Flex flexDirection="row">
          <ThemedText type="subtitle">Hello,</ThemedText>
          <HelloWave />
        </Flex>

        <ThemedText style={styles.greetingDescription} type="default">
          Adventure is waiting...
        </ThemedText>
        <WhiteSpace size="24" />

        <Flex flexDirection="row" justifyContent="space-between">
          <Card
            iconName="weather-sunny"
            iconColor={Colors.generic.yellow}
            title={todoCounts.today}
            subtitle="Today"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "today" })
            }
          />
          <Card
            iconName="calendar-arrow-right"
            iconColor="red"
            title={todoCounts.tomorrow}
            subtitle="Tomorrow"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "tomorrow" })
            }
          />
        </Flex>

        <WhiteSpace size="24" />
        <ThemedText type="subtitle">My List</ThemedText>
        <WhiteSpace size="24" />

        <Flex flexDirection="row" justifyContent="space-between">
          <Card
            iconName="hand-heart"
            iconColor={Colors.generic.orange}
            title={todoCounts.wishlist}
            subtitle="Wishlist"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "wishlist" })
            }
          />
          <Card
            iconName="archive-arrow-down-outline"
            iconColor={Colors.generic.blue}
            title={todoCounts.archive}
            subtitle="Archived"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "archive" })
            }
          />
        </Flex>

        <WhiteSpace size="24" />
        <ThemedText type="subtitle">Quck notes</ThemedText>
        <WhiteSpace size="24" />

        <QuckNotesCard
          iconName="note-edit"
          iconColor={Colors.generic.turquoise}
          title={todoCounts.quick_notes}
          subtitle="Quick notes write here... 🚀"
          tasks={todos["quick_notes"]}
          onPress={() =>
            navigation.navigate("todo-list-detail", { type: "quick_notes" })
          }
        />
        <WhiteSpace size="48" />
      </ScrollView>

      <NewReminderButton
        onPress={handleOpenBottomSheet}
        color={Colors.generic.turquoise}
      />

      <BottomSheetComponent
        ref={bottomSheetModalRef}
        onPress={handleCreateTodo}
        task={task}
        setTask={setTask}
        color={Colors.generic.turquoise}
        isSelectLabel
        category={selectedCategory}
        setSetegory={setSelectedCategory}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 64,
    backgroundColor: Colors.generic.dark,
  },
  greetingDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.generic.greyText,
  },
});
