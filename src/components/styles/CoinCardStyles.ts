import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20,
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
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statisticsItem: {
    display: "flex",
    flexDirection: 'row',
  },
  statisticsMetric: {
    marginRight: 1,
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
