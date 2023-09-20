import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useState } from 'react';
import { mockBarData } from '../mockData';

const chartSetting = {
  yAxis: [
    {
      label: 'items',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
  },
};

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
    const [barData, setBarData] = useState(mockBarData);
  return (
    <BarChart
      dataset={barData}
      xAxis={[{ scaleType: 'band', dataKey: 'country' }]}
      series={[
        { dataKey: 'AD', label: 'AD', valueFormatter },
        { dataKey: 'AE', label: 'AE', valueFormatter },
        { dataKey: 'AF', label: 'AF', valueFormatter },
        { dataKey: 'AG', label: 'AG', valueFormatter },
        { dataKey: 'AI', label: 'AI', valueFormatter },
        { dataKey: 'AL', label: 'AL', valueFormatter },
        { dataKey: 'AM', label: 'AM', valueFormatter }
      ]}
      {...chartSetting}
    />
  );
}