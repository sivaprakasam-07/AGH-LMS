import { FiInfo } from 'react-icons/fi';
import {
  Container,
  Title,
  GaugeWrapper,
  GaugeSVG,
  GaugeLabels,
  ScoreText,
  InfoBox,
  InfoIcon,
  InfoScore,
  InfoSuspicious,
} from './GaugeMeter.styles';

const GaugeMeter = ({ score }) => {
  const angle = (score / 100) * 180;

  return (
    <Container>
      <div>
        <Title>Flagged Test Attempts</Title>
        <GaugeWrapper>
          <GaugeSVG viewBox="0 0 200 120">
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="20"
              strokeDasharray={`${(score / 100) * 282.74} 282.74`}
              strokeLinecap="round"
            />
            <line
              x1="100"
              y1="100"
              x2="25"
              y2="100"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${angle}, 100, 100)`}
              style={{ transition: 'transform 0.5s ease-in-out' }}
            />
            <circle cx="100" cy="100" r="10" fill="#f43f5e" />
            <circle cx="100" cy="100" r="5" fill="black" />
          </GaugeSVG>
        </GaugeWrapper>
        <GaugeLabels>
          <span>Low</span>
          <span>Score</span>
          <span>High</span>
        </GaugeLabels>
        <ScoreText>{score}%</ScoreText>
      </div>
      <InfoBox>
        <InfoIcon>
          <FiInfo />
        </InfoIcon>
        <span>
          <InfoScore>{score}%</InfoScore> indicates{' '}
          <InfoSuspicious>Suspicious Activity</InfoSuspicious>
        </span>
      </InfoBox>
    </Container>
  );
};

export default GaugeMeter;