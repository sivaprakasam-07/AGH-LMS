import { PieChart, Pie, Cell } from 'recharts';
import {
  Container,
  Title,
  ChartWrapper,
  PercentageText,
  Stats
} from './CircularProgress.styles.js';

const CircularProgress = ({ pass = 90, fail = 30 }) => {
  const total = pass + fail;
  const percentage = Math.round((pass / total) * 100);
  const data = [
    { name: 'Pass', value: pass },
    { name: 'Fail', value: fail },
  ];
  const gradientId = "passGradient";

  return (
    <Container>
      <Title>Pass Percentage</Title>
      <ChartWrapper>
        <svg width="0" height="0">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B57" />
              <stop offset="100%" stopColor="#FF3D68" />
            </linearGradient>
          </defs>
        </svg>
        <PieChart width={160} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={61}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill={`url(#${gradientId})`} />
            <Cell fill="#E5E7EB" />
          </Pie>
        </PieChart>
        <PercentageText>{percentage}%</PercentageText>
      </ChartWrapper>
      <Stats>Pass : {pass} | Fail : {fail}</Stats>
    </Container>
  );
};

export default CircularProgress;
