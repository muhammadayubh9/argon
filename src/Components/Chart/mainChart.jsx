import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 200,
    amt: 300,
  },
  {
    name: 'Feb',
    pv: 220,
    amt: -30,
  },
  {
    name: 'Mar',
    pv: 350,
    amt: -70,
  },
  {
    name: 'Apr',
    pv: 370,
    amt: -100,
  },
  {
    name: 'May',
    pv: 350,
    amt: -130,
  },
  {
    name: 'Jun',
    pv: 480,
    amt: -250,
  },
  {
    name: 'Jul',
    pv: 370,
    amt: -120,
  },
  {
    name: 'Aug',
    pv: 300,
    amt: -100,
  },
  {
    name: 'Sep',
    pv: 340,
    amt: -240,
  },
  {
    name: 'Oct',
    pv: 220,
    amt: -100,
  },
  {
    name: 'Nov',
    pv: 380,
    amt: -200,
  },
  {
    name: 'Dec',
    pv: 430,
    amt: -310,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer aspect={4.0/1.5} height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" y={100000} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#fff" fill="#fff" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#3182CE" fill="#3182CE" />
          
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
