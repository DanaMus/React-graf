import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';


/* BarChart */
const data = [
  {
    month: 'leden',
    částka: 4000,
    zaplaceno: 2400,
  },
  {
    month: 'únor',
    částka: 5000,
    zaplaceno: 2900,
  },
  {
    month: 'březen',
    částka: 12500,
    zaplaceno: 11100,
  },
  {
    month: 'duben',
    částka: 8900,
    zaplaceno: 12000,
  },
  {
    month: 'květen',
    částka: 15000,
    zaplaceno: 2100,
  },
  {
    month: 'červen',
    částka: 11000,
    zaplaceno: 11000,
  },
  {
    month: 'červenec',
    částka: 4000,
    zaplaceno: 2800,
  },
  {
    month: 'srpen',
    částka: 14000,
    zaplaceno: 12800,
  },
  {
    month: 'září',
    částka: 8000,
    zaplaceno: 8800,
  },
  {
    month: 'říjen',
    částka: 11000,
    zaplaceno: 10500,
  },
  {
    month: 'listopad',
    částka: 14800,
    zaplaceno: 12500,
  },
  {
    month: 'prosinec',
    částka: 22000,
    zaplaceno: 22000,
  },
];

/* PieChart */
const data02 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const App = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{top: 5,
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
          <Bar dataKey="částka" fill="#8884d8" />
          <Bar dataKey="zaplaceno" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={400} height={400}>
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      

    </>
  )
};

render(<App />, document.querySelector('#app'));
