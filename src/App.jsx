import Navbar from './components/Navbar';
import TestInfoHeader from './components/TestInfoHeader';
import CircularProgress from './components/CircularProgress';
import OverviewCard from './components/OverviewCard';
import GaugeMeter from './components/GaugeMeter';
import StudentTable from './components/StudentTable';

import {
  AppWrapper,
  Container as ContentContainer,
  CardFlexContainer as CardSection,
  CardWrapper,
  TableWrapper
} from './App.styles';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <ContentContainer>
        <TestInfoHeader />
        <CardSection>
          <CardWrapper className="circular-progress-wrapper">
            <CircularProgress pass={90} fail={30} />
          </CardWrapper>
          <CardWrapper className="overview-card-wrapper">
            <OverviewCard />
          </CardWrapper>
          <CardWrapper className="gauge-meter-wrapper">
            <GaugeMeter score={51} />
          </CardWrapper>
        </CardSection>
        <TableWrapper>
          <StudentTable />
        </TableWrapper>
      </ContentContainer>
    </AppWrapper>
  );
};

export default App;
