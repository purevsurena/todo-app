import "@testing-library/jest-native/extend-expect";

jest.mock('@freakycoder/react-native-bounceable', () => {
  return jest.fn().mockImplementation(({ children }) => children);
});
