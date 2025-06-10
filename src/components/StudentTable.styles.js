import styled from 'styled-components';

export const TableContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  overflow-x: auto;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #f3f4f6;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
    box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.3);
  }
`;

export const FilterButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const FilterButton = styled.button`
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #e5e7eb;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: 900px;
  font-size: 0.875rem;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background: #e5e7eb;
  color: #6b7280;
  font-weight: 600;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  &:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  &:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;

  &:hover {
    background: #f9fafb;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #4b5563;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  border-radius: 9999px;
  background: ${({ suspicious }) => (suspicious ? '#EF4444' : '#10B981')};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const PageNumber = styled.span`
  padding: 0.5rem 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;

  &:hover {
    background: #f3f4f6;
  }
`;
