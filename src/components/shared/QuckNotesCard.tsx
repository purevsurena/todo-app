import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/shared/ThemedText";
import { ThemedView } from "@/components/shared/ThemedView";
import { Colors } from "@/constants/Colors";
import Click from "@/components/layouts/Click";
import WhiteSpace from "@/components/layouts/WhiteSpace";
import { Task } from "@/types/global";

type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface QuickNotesCardProps {
  iconName: MaterialCommunityIconName;
  iconColor: string;
  title: string;
  subtitle: string;
  tasks: Task[];
  onPress: () => void;
}

const QuickNotesCard: React.FC<QuickNotesCardProps> = ({
  iconName,
  iconColor,
  title,
  subtitle,
  tasks = [],
  onPress,
}) => {
  return (
    <Click onPress={onPress}>
      <ThemedView style={styles.cardContainer}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={iconName}
            size={30}
            color={iconColor}
            testID="icon"
          />
          <ThemedText type="title" testID="cardTitle">
            {title}
          </ThemedText>
        </View>
        <ThemedText type="subtitle" darkColor={iconColor} testID="cardSubtitle">
          {subtitle}
        </ThemedText>
        <WhiteSpace size="4" />
        {tasks.length > 0 && (
          <ThemedView style={styles.tasksContainer}>
            {tasks.map((task, index) => (
              <View key={task._id} style={styles.taskItem}>
                <View style={styles.taskBullet} />
                <ThemedText
                  numberOfLines={1}
                  style={styles.taskText}
                  testID={`task-${index}`}
                >
                  {task?.title}
                </ThemedText>
              </View>
            ))}
          </ThemedView>
        )}
      </ThemedView>
    </Click>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    paddingVertical: 16,
    paddingTop: 24,
    borderRadius: 16,
    width: Dimensions.get("screen").width - 32,
    backgroundColor: Colors.generic.cardBG,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  tasksContainer: {
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.generic.background,
    borderRadius: 12,
    marginTop: 4,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskBullet: {
    backgroundColor: Colors.generic.blue,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  taskText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
    color: Colors.generic.greyText,
  },
});

export default QuickNotesCard;
