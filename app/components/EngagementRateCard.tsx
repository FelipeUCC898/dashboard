'use client';

const data = [
  { key: "JAN", value: 2000 },
  { key: "FEB", value: 3500 },
  { key: "MAR", value: 2800 },
  { key: "APR", value: 4200, active: true },
  { key: "MAY", value: 3200 },
  { key: "JUN", value: 3800 },
];

export default function EngagementRateCard() {

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg border-2 border-gray-300 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          </div>
          <h3 className="text-[15px] font-semibold text-black">Engagement Rate</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-full border border-gray-300 text-[12px] text-gray-600">
            Monthly
          </button>
          <button className="px-3 py-1 rounded-full bg-[#2D6A4F] text-[12px] text-white">
            Annually
          </button>
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full h-[220px] mt-2">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-gray-400">
          <span>5k</span>
          <span>4k</span>
          <span>3k</span>
          <span>2k</span>
          <span>1k</span>
          <span>0</span>
        </div>

        {/* Chart area with bars */}
        <div className="absolute left-10 right-0 top-0 bottom-6 flex items-end justify-around gap-2">
          {data.map((month, index) => {
            const heightPercent = (month.value / 5000) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col justify-end items-center h-full relative">
                {/* Tooltip for active bar */}
                {month.active && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-semibold px-2 py-1 rounded whitespace-nowrap z-10">
                    +17.8%
                  </div>
                )}
                
                {/* Bar */}
                <div 
                  className={`w-full rounded-t-full relative ${
                    month.active ? 'bg-[#2D6A4F]' : 'bg-[#95D5B2]'
                  }`}
                  style={{ 
                    height: `${heightPercent}%`,
                    minHeight: '10px',
                    backgroundImage: month.active 
                      ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px)'
                      : 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)'
                  }}
                >
                  {/* Dot indicator on active bar */}
                  {month.active && (
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2D6A4F] rounded-full border-2 border-white"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Grid lines */}
        <div className="absolute left-10 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full border-t border-dashed border-gray-200"></div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="absolute left-10 right-0 bottom-0 flex justify-around">
          {data.map((month, index) => (
            <span key={index} className="text-[10px] text-gray-400 flex-1 text-center">
              {month.key}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
