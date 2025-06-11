import React from 'react';
import {
  TableContainer,
  TopBar,
  SearchWrapper,
  SearchInput,
  FilterButtonGroup,
  FilterButton,
  StyledTable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  Badge,
  Pagination,
  PageNumber,
  IconButton
} from './StudentTable.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const students = [
  { rank: '01', name: 'Luca Romano', dept: 'CSE', year: 2025, marks: 19, duration: '35 Min', email: 'luca@gmail.com', suspicious: false },
  { rank: '02', name: 'Mateo García', dept: 'EEE', year: 2025, marks: 18, duration: '48 Min', email: 'mate@gmail.com', suspicious: false },
  { rank: '03', name: 'Chen Wei', dept: 'CSE', year: 2025, marks: 18, duration: '23 Min', email: 'chenwa@gmail.com', suspicious: true },
  { rank: '04', name: 'Diego Santos', dept: 'CSE', year: 2025, marks: 16, duration: '10 Min', email: 'diego@gmail.com', suspicious: true },
  { rank: '05', name: 'Elena Petrova', dept: 'IT', year: 2025, marks: 16, duration: '45 Min', email: 'elena@gmail.com', suspicious: false },
  { rank: '06', name: 'Diego Santos', dept: 'CSE', year: 2025, marks: 10, duration: '35 Min', email: 'diego@gmail.com', suspicious: false },
  { rank: '07', name: 'Lucas Bennett', dept: 'CSE', year: 2025, marks: 15, duration: '28 Min', email: 'bennett@gmail.com', suspicious: false },
  { rank: '08', name: 'Grace Mitchell', dept: 'CSE', year: 2025, marks: 14, duration: '30 Min', email: 'grace@gmail.com', suspicious: false },
  { rank: '09', name: 'Chen Wei', dept: 'CSE', year: 2025, marks: 13, duration: '22 Min', email: 'chenwai@gmail.com', suspicious: true },
  { rank: '10', name: 'Jacob Harris', dept: 'IT', year: 2025, marks: 20, duration: '15 Min', email: 'diego@gmail.com', suspicious: true },
];

const StudentTable = () => {
  return (
    <TableContainer>
      <TopBar>
        <SearchWrapper>
          <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '12px', color: '#9ca3af' }} />
          <SearchInput type="text" placeholder="Search here..." />
        </SearchWrapper>
        <FilterButtonGroup>
          {['Suspicious', 'Branch', 'Year'].map((label) => (
            <FilterButton key={label}>
              {label}
              <FontAwesomeIcon icon={faChevronDown} size="xs" style={{ marginLeft: '4px' }} />
            </FilterButton>
          ))}
        </FilterButtonGroup>
      </TopBar>

      <StyledTable>
        <TableHead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Student Name</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Year</TableHeader>
            <TableHeader>Marks</TableHeader>
            <TableHeader>Test Duration</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Suspicious</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {students.map((s, i) => (
            <TableRow key={i}>
              <TableCell>{s.rank}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.dept}</TableCell>
              <TableCell>{s.year}</TableCell>
              <TableCell>{s.marks}</TableCell>
              <TableCell>{s.duration}</TableCell>
              <TableCell>{s.email}</TableCell>
              <TableCell>
                <Badge suspicious={s.suspicious}>
                  {s.suspicious ? 'Yes' : 'No'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      <Pagination>
        <IconButton><FontAwesomeIcon icon={faChevronLeft} size="xs" /></IconButton>
        <PageNumber>1</PageNumber>
        <IconButton><FontAwesomeIcon icon={faChevronRight} size="xs" /></IconButton>
      </Pagination>
    </TableContainer>
  );
};

export default StudentTable;
