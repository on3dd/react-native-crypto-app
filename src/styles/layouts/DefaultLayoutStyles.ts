import { StyleSheet } from 'react-native';
import { LIGHT_GRAY_COLOR } from '../colors';

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1,
  },
  topBar: {
    borderBottomColor: LIGHT_GRAY_COLOR,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
  },
});

export default styles;
