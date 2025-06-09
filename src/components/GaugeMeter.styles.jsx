import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 0.625rem;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.08);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

  @media (min-width: 640px) {
    height: 16.25rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const GaugeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GaugeSVG = styled.svg`
  width: 11rem;
  height: 7rem;
`;

export const GaugeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ScoreText = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  // margin-top: 0.25rem;
`;

export const InfoBox = styled.div`
  margin-top: 0.1 rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #f9fafb;
  padding: 0.75rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  color: #374151;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const InfoIcon = styled.span`
  font-size: 1.125rem;
`;

export const InfoScore = styled.span`
  font-weight: 500;
`;

export const InfoSuspicious = styled.span`
  color: #f43f5e;
  font-weight: 500;
`;