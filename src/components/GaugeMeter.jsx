import { FiInfo } from 'react-icons/fi';

const GaugeMeter = ({ score }) => {
  const angle = (score / 100) * 180;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Flagged Test Attempts</h2>

      <div className="relative w-full flex justify-center items-center">
        <svg viewBox="0 0 200 120" className="w-48 h-28">
          {/* Background arc */}
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Active arc */}
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="20"
            strokeDasharray={`${(score / 100) * 282.74} 282.74`}
            strokeLinecap="round"
          />
          {/* Needle: horizontal to left, rotated forward */}
          <line
            x1="100"
            y1="100"
            x2="10"
            y2="40"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle}, 100, 100)`}
            style={{ transition: 'transform 0.5s ease-in-out' }}
          />
          {/* Center circle */}
          <circle cx="100" cy="100" r="10" fill="#f43f5e" />
          <circle cx="100" cy="100" r="5" fill="black" />
        </svg>
      </div>

      {/* Labels */}
      <div className="flex justify-between px-3 mt-2 text-sm text-gray-500">
        <span>Low</span>
        <span>Score</span>
        <span>High</span>
      </div>

      {/* Score */}
      <p className="text-center text-xl font-bold mt-1">{score}%</p>

      {/* Info */}
      <div className="mt-4 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl text-sm text-gray-700">
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
