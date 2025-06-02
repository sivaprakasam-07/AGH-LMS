import { Users, Target, CheckCircle, Timer } from 'lucide-react';

const OverviewCard = () => {
  const stats = [
    {
      label: 'Students Appeared',
      value: 120,
      icon: <Users className="text-white" size={20} />,
      bg: 'bg-[#5C4DFF]', // Purple
    },
    {
      label: 'Total Marks',
      value: 20,
      icon: <Target className="text-white" size={20} />,
      bg: 'bg-[#FFB020]', // Orange
    },
    {
      label: 'Total No. of Ques.',
      value: 40,
      icon: <CheckCircle className="text-white" size={20} />,
      bg: 'bg-[#FF5A5F]', // Red
    },
    {
      label: 'Average Time Taken',
      value: '50 Min',
      icon: <Timer className="text-white" size={20} />,
      bg: 'bg-[#7B61FF]', // Indigo
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h3 className="font-semibold text-lg mb-4">Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
          >
            <div className={`p-3 rounded-full ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
