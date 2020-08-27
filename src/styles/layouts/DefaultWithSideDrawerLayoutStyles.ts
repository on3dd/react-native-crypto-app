import { StyleSheet } from 'react-native';
import { GRAY_C0LOR } from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
  },
  header: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomColor: GRAY_C0LOR,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default styles;
