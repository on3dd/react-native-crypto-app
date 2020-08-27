import { StyleSheet } from 'react-native';
import { GRAY_C0LOR } from '../colors';

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    borderBottomColor: GRAY_C0LOR,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
  },
});

export default styles;
