import { StyleSheet } from 'react-native';
import { DARK_GRAY_COLOR, RED_COLOR, GREEN_COLOR } from '../../colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  scroll: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  left: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  symbol: {
    fontSize: 12,
    fontWeight: '200',
    color: DARK_GRAY_COLOR,
  },
  right: {
    // flex: 1,
    alignItems: 'flex-end',
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: '600',
  },
  priceChange: {
    fontSize: 13,
    fontWeight: '600',
  },
  priceChangePlus: {
    color: GREEN_COLOR,
  },
  priceChangeMinus: {
    color: RED_COLOR,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 12,
    color: DARK_GRAY_COLOR,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  priceOpen: {
    alignSelf: 'flex-start',
  },
  priceHigh: {
    alignSelf: 'center',
  },
  priceLow: {
    alignSelf: 'flex-end',
  },
  chart: {
    flex: 1,
    height: 200,
    marginBottom: 20,
  },
  description: {
    // marginBottom: 20,
  },
});

export default styles;
