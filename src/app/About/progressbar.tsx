import React from 'react';

interface ProgressBarProps {
  skill: string;
  percentage: string;
}


const ProgressBar2: React.FC<ProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="text-white text-sm font-bold">
        {skill} {percentage}
      </div>
      <div className="w-[90%] items-center mt-[20px] bg-gray-700 rounded-full h-6.5">
        <div
          className="bg-yellow-500 mr-[40px] h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar2;