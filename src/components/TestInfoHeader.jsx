import React from 'react';
import {
  HeaderContainer,
  TestDetails,
  LabelRow,
  Title,
  DateBox,
} from './TestInfoHeader.styles.js';

import { PieChart, CalendarDays } from 'lucide-react';

const TestInfoHeader = () => {
  return (
    <HeaderContainer>
      <TestDetails>
        <LabelRow>
          <PieChart size={20} />
          <span>Test Data</span>
        </LabelRow>
        <Title>Number System</Title>
      </TestDetails>

      <DateBox>
        <CalendarDays size={16} />
        <span>11th Jan 2025 21:30 - 13th Jan 2025 21:30</span>
      </DateBox>
    </HeaderContainer>
  );
};

export default TestInfoHeader;
