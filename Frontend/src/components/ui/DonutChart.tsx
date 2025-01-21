import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: '5 Stars', value: 10 },
  { name: '4 Stars', value: 14 },
  { name: '3 Stars', value: 5 },
  { name: '2 Stars', value: 1 },
  { name: '1 Star', value: 2 },
];

const COLORS = ['#4ade80', '#60a5fa', '#a78bfa', '#facc15', '#f87171'];

const DonutChart = () => (
  <PieChart width={200} height={200}>
    <Pie
      data={data}
      innerRadius={85}
      outerRadius={100}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>    
    <Tooltip />
  </PieChart>
);

export default DonutChart;