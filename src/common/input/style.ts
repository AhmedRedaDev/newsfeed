import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    paddingTop: 7,
    paddingBottom: 2,
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 21,
    paddingVertical: 0,
    textAlignVertical: 'top'
  },
  label: {
    paddingHorizontal: 16,
    fontSize: 12,
    lineHeight: 25,
    height: 22,
  },
  error: {
    fontSize: 12,
    paddingHorizontal: 16,
    paddingTop: 3
  },
  show_password_icon: {
    paddingRight: 16
    // alignSelf: 'stretch'
  }
});