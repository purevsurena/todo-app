import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { getHeaderConfig } from "@/utils/headerConfigUtils";
import {
  TodoListDetailRouteProp,
  RootStackParamList,
} from "@/types/navigation";
import { ThemedView } from "@/components/shared/ThemedView";
import { ThemedText } from "@/components/shared/ThemedText";
import TodoListItem from "@/components/shared/TodoListItem";
import NewReminderButton from "@/components/shared/NewReminderButton";
import { FlashList } from "@shopify/flash-list";
import { NavigationProp } from "@react-navigation/core";
import { useTodoContext } from "@/context/TodoContext";
import EmptyComponent from "@/components/shared/Empty";
import BottomSheetComponent from "@/components/shared/BottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const DodoListDetailScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<TodoListDetailRouteProp>();
  const param = route?.params?.type;

  const { todos, loadTodos, addTodo, updateTodoStatus, deleteTodo } =
    useTodoContext();

  const [activeColor, setActiveColor] = useState(Colors.generic.blue);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (param) {
      const { title, color } = getHeaderConfig(param);
      setActiveColor(color);
      navigation.setOptions({
        headerTitle: title,
        headerTintColor: color,
      });
    }
  }, [navigation, param]);

  useEffect(() => {
    if (param) {
      loadTodos(param);
    }
  }, [param]);

  const toggleTaskCompletion = useCallback(
    async (id: string, completed: boolean) => {
      await updateTodoStatus(id, !completed);
    },
    [updateTodoStatus],
  );

  const handleDeleteTodo = useCallback(
    async (id: string) => {
      await deleteTodo(id);
      loadTodos(param);
    },
    [deleteTodo, loadTodos, param],
  );

  const ListHeaderComponent = () => {
    if (todos[param]?.length > 0) {
      return (
        <ThemedText type="subtitle" style={styles.subtitle}>
          Tasks: 🎯
        </ThemedText>
      );
    }
    return null;
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleCreateTodo = async () => {
    await addTodo(task, param);
    setTask("");
  };

  return (
    <ThemedView style={styles.container}>
      <FlashList
        data={todos[param] || []}
        keyExtractor={(item) => item._id.toString()}
        estimatedItemSize={15}
        renderItem={({ item, index }) => (
          <TodoListItem
            color={activeColor}
            description={item.title}
            index={index}
            isChecked={item.completed}
            onToggle={() => toggleTaskCompletion(item._id, item.completed)}
            onDelete={() => handleDeleteTodo(item._id)}
          />
        )}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={EmptyComponent}
      />
      <NewReminderButton onPress={handleOpenBottomSheet} color={activeColor} />
      <BottomSheetComponent
        ref={bottomSheetModalRef}
        onPress={handleCreateTodo}
        task={task}
        setTask={setTask}
        color={activeColor}
        category="quick_notes"
        setSetegory={() => {}}
      />
    </ThemedView>
  );
};

export default DodoListDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: Colors.generic.dark,
  },
  subtitle: {
    paddingHorizontal: 16,
  },
});
