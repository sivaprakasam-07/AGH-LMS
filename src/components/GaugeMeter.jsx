import { FiInfo } from 'react-icons/fi';

const GaugeMeter = ({ score }) => {
  const angle = (score / 100) * 180;

  return (
    <div className="bg-white rounded-2xl p-2.5 shadow-md w-full max-w-sm flex flex-col justify-between h-auto sm:h-65">
      <div>
        <h2 className="text-lg font-semibold mb-2 mt-0">Flagged Test Attempts</h2>

        <div className="relative w-full flex justify-center items-center">
          <svg viewBox="0 0 200 120" className="w-44 h-28">
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="20"
              strokeDasharray={`${(score / 100) * 282.74} 282.74`}
              strokeLinecap="round"
            />
            <line
              x1="100"
              y1="100"
              x2="25"
              y2="100"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${angle}, 100, 100)`}
              style={{ transition: 'transform 0.5s ease-in-out' }}
            />
            <circle cx="100" cy="100" r="10" fill="#f43f5e" />
            <circle cx="100" cy="100" r="5" fill="black" />
          </svg>
        </div>
        <div className="flex justify-between px-3 text-sm text-gray-500">
          <span>Low</span>
          <span>Score</span>
          <span>High</span>
        </div>
        <p className="text-center text-xl font-bold mt-1">{score}%</p>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl text-sm text-gray-700">
        <FiInfo className="text-lg" />
        <span>
          <span className="font-medium">{score}%</span> indicates{' '}
          <span className="text-red-500 font-medium">Suspicious Activity</span>
        </span>
      </div>
    </div>
  );
};

export default GaugeMeter;
