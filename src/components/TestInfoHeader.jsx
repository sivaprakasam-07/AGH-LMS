import { PieChart } from 'lucide-react';
import { CalendarDays, Clock } from 'lucide-react';

const TestInfoHeader = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      {/* Left side: Test title */}
      <div>
        <div className="flex items-center text-gray-500 text-sm gap-1">
          {/* <Clock size={14} /> */}
          <PieChart size={24} color="#6B7280" />
          <span>Test Data</span>
        </div>
        <h2 className="text-xl font-bold text-black">Number System</h2>
      </div>

      {/* Right side: Date range */}
      <div className="flex items-center bg-gray-100 text-black text-sm px-4 py-2 rounded-2xl shadow-sm gap-2">
        <CalendarDays size={16} />
        <span>11th Jan 2025 21:30 - 13th Jan 2025 21:30</span>
      </div>
    </div>
  );
};

export default TestInfoHeader;
