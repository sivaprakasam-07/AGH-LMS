import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6; /* Tailwind: bg-gray-100 */
  color: #1f2937; /* Tailwind: text-gray-800 */
`;

export const Container = styled.div`
  padding: 1.5rem; /* Equivalent to px-6 py-4 (py-4 is 1rem, but 1.5rem is common for overall padding) */
  margin: 2.5rem auto 0 auto; /* Equivalent to mt-10 mx-auto */
  max-width: 80rem; /* Equivalent to max-w-7xl */
`;

export const CardFlexContainer = styled.div`
  display: flex;
  flex-direction: column; /* Mobile first: cards stack */
  gap: 1.5rem; /* Uniform gap for stacked or row layout */
  margin-top: 1.5rem; /* Equivalent to mt-6 */

  @media (min-width: 768px) { /* Apply row layout for tablets and wider */
    flex-direction: row;
    align-items: stretch; /* Make cards in a row stretch to the same height */
  }
`;
export const CardWrapper = styled.div`
  width: 100%; /* Default for stacked cards in mobile view */
  display: flex; 
  justify-content: center; 

  @media (min-width: 768px) {
    flex: 1 1 0; /* Allows cards to grow and shrink equally, taking available space in a row */
    min-width: 0; /* Allow flex items to shrink below their content size if necessary */
    /* The actual card component inside will be centered by justify-content if its intrinsic width is smaller */
  }
`;



export const TableWrapper = styled.div`
  margin-top: 1.5rem; /* Equivalent to mt-6 */
`;
