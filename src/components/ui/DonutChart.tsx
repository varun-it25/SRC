import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#4ade80', '#60a5fa', '#a78bfa', '#f87171'];

const DonutChart = ({ data }: any) => (
  <PieChart width={200} height={200}>
    <Pie data={data} innerRadius={85} outerRadius={100} fill="#8884d8" dataKey="value">
      {
        data.map((entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))
      }
    </Pie>    
    <Tooltip />
  </PieChart>
);

export default DonutChart;