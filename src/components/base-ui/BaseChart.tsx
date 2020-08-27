import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Path } from 'react-native-svg';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import { DARK_GRAY_COLOR } from "../../styles/colors";

type LineProps = {
  line?: number;
};

const Line = ({ line }: LineProps) => (
  <Path key={'line'} d={line.toString()} stroke={'rgba(102, 102, 102, 1)'} fill={'none'} />
);

type BaseChartProps = {
  data: number[];
};

const BaseChart = ({ data }: BaseChartProps) => {
  const yaxisSVG = {
    fill: DARK_GRAY_COLOR,
    fontSize: 10,
  };

  const chartSVG = {
    fill: 'rgba(102, 102, 102, 0.2)',
  };

  const containerInset = {
    top: 10,
    bottom: 10,
  };

  return (
    <View style={container}>
      <YAxis
        style={yaxis}
        data={data}
        contentInset={containerInset}
        numberOfTicks={8}
        svg={yaxisSVG}
        formatLabel={(value: number) => `$${value.toFixed(2)}`}
      />

      <AreaChart
        style={chart}
        data={data}
        svg={chartSVG}
        curve={shape.curveNatural}
        contentInset={containerInset}
      >
        <Grid />
        <Line />
      </AreaChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yaxis: {
    height: '100%',
    marginRight: 10,
  },
  chart: {
    flex: 1,
  },
});

const { container, yaxis, chart } = styles;

export default BaseChart;
