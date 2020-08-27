import { StyleSheet } from 'react-native';
import {
  GRAY_C0LOR,
  LIGHT_GRAY_COLOR,
  RED_COLOR,
  GREEN_COLOR,
} from '../../colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderBottomColor: GRAY_C0LOR,
    borderBottomWidth: 3,
    paddingVertical: 30,
    // paddingHorizontal: 20,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: 'bold',
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: LIGHT_GRAY_COLOR,
    borderTopWidth: 2,
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statisticsItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  statisticsMetric: {
    // marginRight: 1,
  },
  percentChange: {
    marginLeft: 5,
  },
  percentChangePlus: {
    color: GREEN_COLOR,
    fontWeight: 'bold',
  },
  percentChangeMinus: {
    color: RED_COLOR,
    fontWeight: 'bold',
  },
});

export default styles;
