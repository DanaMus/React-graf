import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'leden',
    amount: 4000,
    paid: 2400,
  },
  {
    month: 'únor',
    amount: 5000,
    paid: 2900,
  },
  {
    month: 'březen',
    amount: 12500,
    paid: 11100,
  },
  {
    month: 'duben',
    amount: 8900,
    paid: 8900,
  },
  {
    month: 'květen',
    amount: 15000,
    paid: 2100,
  },
  {
    month: 'červen',
    amount: 11000,
    paid: 11000,
  },
  {
    month: 'červenec',
    amount: 4000,
    paid: 2800,
  },
  {
    month: 'srpen',
    amount: 14000,
    paid: 12800,
  },
  {
    month: 'září',
    amount: 8000,
    paid: 800,
  },
  {
    month: 'říjen',
    amount: 11000,
    paid: 10500,
  },
  {
    month: 'listopad',
    amount: 14800,
    paid: 12500,
  },
  {
    month: 'prosinec',
    amount: 22000,
    paid: 22000,
  },
];


const App = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="amount" stackId="a" fill="#8884d8" />
        <Bar dataKey="paid" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
};

render(<App />, document.querySelector('#app'));
