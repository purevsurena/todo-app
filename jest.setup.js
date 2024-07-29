import "@testing-library/jest-native/extend-expect";

jest.mock("@freakycoder/react-native-bounceable", () => {
  return jest.fn().mockImplementation(({ children }) => children);
});

jest.mock("@react-native-async-storage/async-storage", () => {});

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      ...jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

// Mock the expo-router
jest.mock("expo-router", () => {
  const actualRouter = jest.requireActual("expo-router");
  return {
    ...actualRouter,
    useNavigation: () => ({
      ...jest.fn(),
      goBack: jest.fn(),
    }),
  };
});
