import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6; /* Tailwind: bg-gray-100 */
  color: #1f2937; /* Tailwind: text-gray-800 */
`;

export const Container = styled.div`
  padding: 1rem 1.5rem;
  max-width: 80rem; /* Tailwind: max-w-7xl */
  margin: 2.5rem auto 0 auto;
`;

export const CardFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    width: ${({ width }) => width || '100%'};
    margin-top: ${({ noMargin }) => (noMargin ? '0' : '1.5rem')};
    justify-content: flex-start;
  }
`;



export const TableWrapper = styled.div`
  margin-top: 1.5rem;
`;
