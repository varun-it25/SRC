import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', events: 1 },
  { name: 'Feb', events: 5 },
  { name: 'Mar', events: 3 },
  { name: 'Apr', events: 1 },
  { name: 'May', events: 2 },
];

const LineChartComponent = () => {
  return (
    <Box sx={{ width: '100%', height: `100%`, marginLeft: `-0.75rem`, marginTop:`4px` }}>
      {/* <Typography variant="h6" gutterBottom>Weekly Report</Typography> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="events" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineChartComponent;