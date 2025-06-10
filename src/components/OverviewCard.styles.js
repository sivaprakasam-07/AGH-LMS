import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.08);
  border-radius: 1rem;
  padding: 1.0rem;
  width: 100%; /* Ensure card takes full width of its wrapper */
  height: 100%; /* Allow card to stretch to wrapper height */
  display: flex; /* Added for centering title if needed */
  flex-direction: column; /* Added for centering title if needed */
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  text-align: center; /* Ensure title is always centered */
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default to one column */
  gap: 0.75rem; /* Reduced gap */
  width: 100%;
  justify-items: center; /* Center grid items (StatItem) */

  @media (min-width: 1280px) { /* Switch to two columns for wider screens - Changed from 1024px */
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center; /* Vertically aligns icon and text block */
  justify-content: flex-start; /* Changed from center to flex-start */
  gap: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  padding: 1rem;
  width: 100%; /* Allow StatItem to take full width of grid cell */
  /* max-width: 280px; */ /* Removed max-width to allow more fluidity */
`;

export const StatIcon = styled.div`
  padding: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg};
  flex-shrink: 0; /* Added */
`;

export const StatTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center text block content (StatLabel, StatValue) */
  text-align: center; /* Ensure text within is centered */
  flex-grow: 1; /* Added to allow this container to take available space */
  /* flex-shrink: 0; Removed as flex-grow is now used */
`;

export const StatLabel = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
  text-align: center; /* Ensure label is always centered */
`;

export const StatValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  text-align: center; /* Ensure value is always centered */
`;