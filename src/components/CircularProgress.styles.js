import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.25rem;
  border-radius: 1rem;
  width: 100%; /* Ensure card takes full width of its wrapper */
  /* max-width: 36rem; */ /* Removed to allow wrapper to control width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 1.5rem; */ /* Margin will be handled by parent gap */
  height: 100%; /* Allow card to stretch to wrapper height */
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.25rem;
  height: 7.5rem;
`;

export const PercentageText = styled.div`
  position: absolute;
  font-size: 1.25rem;
  color: #1f2937; /* Tailwind's gray-800 */
`;

export const Stats = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: #6b7280; /* Tailwind's gray-500 */
  text-align: center;
`;
