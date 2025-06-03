import { PieChart } from 'lucide-react';
import { CalendarDays } from 'lucide-react';

const TestInfoHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6">
      <div>
        <div className="flex items-center text-gray-500 text-sm gap-2">
          <PieChart size={20} />
          <span>Test Data</span>
        </div>
        <h2 className="text-xl font-bold text-black mt-1">Number System</h2>
      </div>
      <div className="flex items-center bg-white text-black text-sm px-4 py-2 rounded-xl shadow-sm gap-2">
        <CalendarDays size={16} />
        <span>11th Jan 2025 21:30 - 13th Jan 2025 21:30</span>
      </div>
    </div>
  );
};

export default TestInfoHeader;
