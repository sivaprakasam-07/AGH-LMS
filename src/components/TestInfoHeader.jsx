import React from 'react';
import {
  HeaderContainer,
  TestDetails,
  LabelRow,
  Title,
  DateBox,
} from './TestInfoHeader.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const TestInfoHeader = () => {
  return (
    <HeaderContainer>
      <TestDetails>
        <LabelRow>
          <FontAwesomeIcon icon={faChartPie} size="lg" />
          <span>Test Data</span>
        </LabelRow>
        <Title>Number System</Title>
      </TestDetails>

      <DateBox>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>11th Jan 2025 21:30 - 13th Jan 2025 21:30</span>
      </DateBox>
    </HeaderContainer>
  );
};

export default TestInfoHeader;
