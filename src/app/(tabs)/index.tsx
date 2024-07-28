import React from "react";
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

export default function HomeScreen() {
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
            title="3"
            subtitle="Today"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "today" })
            }
          />
          <Card
            iconName="calendar-arrow-right"
            iconColor="red"
            title="0"
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
            iconName="format-list-bulleted"
            iconColor={Colors.generic.blue}
            title="3"
            subtitle="ToDo"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "todo" })
            }
          />
          <Card
            iconName="calendar"
            iconColor={Colors.generic.orange}
            title="0"
            subtitle="Scheduled"
            onPress={() =>
              navigation.navigate("todo-list-detail", { type: "scheduled" })
            }
          />
        </Flex>

        <WhiteSpace size="24" />
        <ThemedText type="subtitle">Quck notes</ThemedText>
        <WhiteSpace size="24" />

        <QuckNotesCard
          iconName="note-edit"
          iconColor={Colors.generic.turquoise}
          title="12"
          subtitle="Quick notes write here..."
          tasks={[]}
          onPress={() =>
            navigation.navigate("todo-list-detail", { type: "quick-notes" })
          }
        />
      </ScrollView>

    <NewReminderButton onPress={() => {}} color={Colors.generic.turquoise} />
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
