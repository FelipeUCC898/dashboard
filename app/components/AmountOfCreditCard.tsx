export default function AmountOfCreditCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      <div className="flex items-start gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-black">Amount of credit</h3>
          <p className="text-[12px] text-gray-400 mt-0.5">Total refund amount with fee</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[26px] font-bold text-black">
          $8,945<span className="text-gray-400">.89</span>
        </p>
        <span className="bg-[#2D6A4F] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
          +12.8%
        </span>
      </div>
    </div>
  );
}
