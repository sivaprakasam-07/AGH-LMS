// import Navbar from './components/Navbar';
// import TestInfoHeader from './components/TestInfoHeader';
// import CircularProgress from './components/CircularProgress';
// import OverviewCard from './components/OverviewCard';
// import GaugeMeter from './components/GaugeMeter';
// // import DashboardStats from './components/DashboardStats';
// // import StudentTableSection from './components/StudentTableSection';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800">
//       <Navbar />
//       {/* Page Container */}
//       <div className="px-6 py-4 max-w-7xl mt-10 mx-auto">
//         <TestInfoHeader />

//         {/* Pass Percentage + Overview section */}
//         <div className="flex flex-col lg:flex-row gap-2 mt-6">
//           <div className="w-full lg:w-1/3">
//             <CircularProgress pass={90} fail={30} />
//           </div>
//           <div className="w-full lg:w-2/3 mt-6 mr-80">
//             <OverviewCard />
//           </div>
//         </div>
//         {/* <DashboardStats /> */}
//         {/* <StudentTableSection /> */}
//       </div>
//     </div>
//   );
// };

// export default App;


import Navbar from './components/Navbar';
import TestInfoHeader from './components/TestInfoHeader';
import CircularProgress from './components/CircularProgress';
import OverviewCard from './components/OverviewCard';
import GaugeMeter from './components/GaugeMeter';
// import DashboardStats from './components/DashboardStats';
// import StudentTableSection from './components/StudentTableSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      {/* Page Container */}
      <div className="px-6 py-4 max-w-7xl mt-10 mx-auto">
        <TestInfoHeader />

        {/* Main Card Row: Pass % | Overview | Flagged */}
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
        {/* <StudentTableSection /> */}
      </div>
    </div>
  );
};

export default App;
