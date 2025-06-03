import Navbar from './components/Navbar';
import TestInfoHeader from './components/TestInfoHeader';
import CircularProgress from './components/CircularProgress';
import OverviewCard from './components/OverviewCard';
import GaugeMeter from './components/GaugeMeter';
import StudentTable from './components/StudentTable';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <div className="px-6 py-4 max-w-7xl mt-10 mx-auto">
        <TestInfoHeader />
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <div className="w-full lg:w-1/4">
            <CircularProgress pass={90} fail={30} />
          </div>
          <div className="w-full lg:w-2/4 mt-6">
            <OverviewCard />
          </div>
          <div className="w-full lg:w-1/4 mt-6">
            <GaugeMeter score={51} />
          </div>
        </div>
        {/* <DashboardStats /> */}
        <div className='mt-6'>
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
