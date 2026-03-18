export default function MandatoryPaymentsCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[15px] font-semibold text-black">Mandatory Payments</h3>
          <p className="text-[12px] text-gray-400 mt-0.5">Recent payments</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white font-semibold text-xs">
          A1
        </div>
        <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white -ml-2.5 flex items-center justify-center text-white font-semibold text-xs">
          A2
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-300 border-2 border-white -ml-2.5 flex items-center justify-center text-white font-semibold text-xs">
          A3
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white -ml-2.5 flex items-center justify-center text-white font-semibold text-xs">
          A4
        </div>
        <div className="w-10 h-10 rounded-full bg-[#2D6A4F] border-2 border-white -ml-2.5 flex items-center justify-center text-white font-semibold text-xs">
          +2
        </div>
      </div>
    </div>
  );
}
