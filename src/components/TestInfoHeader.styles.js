import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TestDetails = styled.div``;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin-top: 0.25rem;
`;

export const DateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  color: #000;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;
