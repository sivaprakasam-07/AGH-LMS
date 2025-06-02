import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CircularProgress = ({ pass = 90, fail = 30 }) => {
  const total = pass + fail;
  const percentage = Math.round((pass / total) * 100);
  const data = [
    { name: 'Pass', value: pass },
    { name: 'Fail', value: fail },
  ];
  const gradientId = "passGradient";
  return (
    <div className="bg-white shadow-md p-5 rounded-2xl w-full max-w-xs flex flex-col items-center justify-center mt-6 mr-40">
      <h3 className="font-semibold text-lg mb-6">Pass Percentage</h3>
      <div className="relative flex items-center justify-center w-[180px] h-[120px]">
        <svg width="0" height="0">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B57" />
              <stop offset="100%" stopColor="#FF3D68" />
            </linearGradient>
          </defs>
        </svg>
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={75}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill={`url(#${gradientId})`} />
            <Cell fill="#E5E7EB" />
          </Pie>
        </PieChart>
        {/* Center percentage label */}
        <div className="absolute text-2xl text-gray-800">
          {percentage}%
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-500 font-bold text-center">
        Pass : {pass} | Fail : {fail}
      </p>
    </div>
  );
};

export default CircularProgress;
