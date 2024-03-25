import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jul',
        uv: 24,
    },
    {
        name: 'Aug',
        uv: 20,
    },
    {
        name: 'Sep',
        uv: 30,
    },
    {
        name: 'Oct',
        uv: 22,
    },
    {
        name: 'Nov',
        uv: 17,
    },
    {
        name: 'Dec',
        uv: 28,
    },
];

function SecondChart() {
    return (
        <ResponsiveContainer width="100%" aspect={2/1.5}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="uv" fill="#ED8936" barRadius={10} background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
    )
}

export default SecondChart