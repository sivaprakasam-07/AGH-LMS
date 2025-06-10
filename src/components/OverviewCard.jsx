import { Users, Target, CheckCircle, Timer } from 'lucide-react';
import {
  CardContainer,
  CardTitle,
  StatsGrid,
  StatItem,
  StatIcon,
  StatTextContainer, // Added
  StatLabel,
  StatValue,
} from './OverviewCard.styles.js';

const OverviewCard = () => {
  const stats = [
    {
      label: 'Students Appeared',
      value: 120,
      icon: <Users color="#fff" size={20} />,
      bg: '#5C4DFF', // Purple
    },
    {
      label: 'Total Marks',
      value: 20,
      icon: <Target color="#fff" size={20} />,
      bg: '#FFB020', // Orange
    },
    {
      label: 'Total No. of Ques.',
      value: 40,
      icon: <CheckCircle color="#fff" size={20} />,
      bg: '#FF5A5F', // Red
    },
    {
      label: 'Average Time Taken',
      value: '50 Min',
      icon: <Timer color="#fff" size={20} />,
      bg: '#7B61FF', // Indigo
    },
  ];

  return (
    <CardContainer>
      <CardTitle>Overview</CardTitle>
      <StatsGrid>
        {stats.map((item, index) => (
          <StatItem key={index}>
            <StatIcon bg={item.bg}>{item.icon}</StatIcon>
            <StatTextContainer>
              <StatLabel>{item.label}</StatLabel>
              <StatValue>{item.value}</StatValue>
            </StatTextContainer>
          </StatItem>
        ))}
      </StatsGrid>
    </CardContainer>
  );
};

export default OverviewCard;