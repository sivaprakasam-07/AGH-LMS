import { FiSearch } from 'react-icons/fi';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

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
    <div className="bg-white rounded-2xl p-6 shadow-md w-full overflow-x-auto">
      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="relative flex items-center w-full lg:max-w-sm">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {['Suspicious', 'Branch', 'Year'].map((label) => (
            <button
              key={label}
              className="px-4 py-2 flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-700"
            >
              {label}
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left rounded-2xl min-w-[900px]">
          <thead className="bg-gray-200 text-gray-500 font-semibold">
            <tr>
              <th className="py-5 px-4 rounded-tl-xl rounded-bl-xl">Rank</th>
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Year</th>
              <th className="py-3 px-4">Marks</th>
              <th className="py-3 px-4">Test Duration</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4 rounded-tr-xl rounded-br-xl">Suspicious</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.rank}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.name}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.dept}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.year}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.marks}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.duration}</td>
                <td className="py-3 px-4 text-gray-500 font-semibold">{s.email}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-8 py-1 text-xs rounded-full font-semibold ${
                      s.suspicious
                        ? 'bg-red-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {s.suspicious ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>
        <span className="px-4.5 py-2 rounded-lg border text-sm font-medium">1</span>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
