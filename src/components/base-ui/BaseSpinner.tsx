import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

type BaseSpinnerProps = {
  visible: boolean;
};

const BaseSpinner = ({ visible = false }: BaseSpinnerProps) => (
  <Spinner
    visible={visible}
    textContent={'Loading'}
    textStyle={{ color: '#253145' }}
    animation="fade"
  />
);

export default BaseSpinner;
