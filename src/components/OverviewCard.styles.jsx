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
  text-align: center; /* Center title for 540x720, 853x1280 */

  @media (min-width: 768px) { /* Revert to left align for wider screens if preferred */
    text-align: left;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  padding: 1rem;
  /* Ensure text within StatItem is centered if needed, though flex alignment should handle icon and text block */
`;

export const StatIcon = styled.div`
  padding: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg};
`;

export const StatLabel = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
  text-align: center; /* Center label for 540x720, 853x1280 */

  @media (min-width: 768px) { /* Revert to left align for wider screens if preferred */
    text-align: left;
  }
`;

export const StatValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  text-align: center; /* Center value for 540x720, 853x1280 */

  @media (min-width: 768px) { /* Revert to left align for wider screens if preferred */
    text-align: left;
  }
`;