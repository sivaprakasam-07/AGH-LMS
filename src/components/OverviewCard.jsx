import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
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
      icon: <FontAwesomeIcon icon={faUsers} style={{ color: "#fff", fontSize: "20px" }} />,
      bg: '#5C4DFF', // Purple
    },
    {
      label: 'Total Marks',
      value: 20,
      icon: <FontAwesomeIcon icon={faBullseye} style={{ color: "#fff", fontSize: "20px" }} />,
      bg: '#FFB020', // Orange
    },
    {
      label: 'Total No. of Ques.',
      value: 40,
      icon: <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#fff", fontSize: "20px" }} />,
      bg: '#FF5A5F', // Red
    },
    {
      label: 'Average Time Taken',
      value: '50 Min',
      icon: <FontAwesomeIcon icon={faClock} style={{ color: "#fff", fontSize: "20px" }} />,
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