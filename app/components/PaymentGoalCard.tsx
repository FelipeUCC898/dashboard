export default function PaymentGoalCard() {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-semibold text-black">Payment Goal</h3>
          <p className="text-[12px] text-gray-400 mt-0.5">Total amount goal</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </button>
      </div>

      {/* VISA Card */}
      <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-2xl p-5 mb-4">
        <div className="flex items-start justify-between mb-6">
          <div className="text-white font-bold text-[18px] tracking-wider">VISA</div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
            <path d="M12 2v10h10"/>
          </svg>
        </div>
        
        <div className="mb-4">
          <p className="text-white/60 text-[10px] mb-1">Credit Card</p>
          <p className="text-white text-[26px] font-bold leading-none">$78,989.09</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-white/80 text-[12px]">**** 909090</p>
          <p className="text-white/80 text-[10px]">EXP 09/26</p>
        </div>
      </div>

      {/* Weekly Revenue */}
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Weekly Revenue</p>
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-bold text-black">+3,945 USD</p>
          <span className="bg-[#2D6A4F] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            +12.8%
          </span>
        </div>
      </div>
    </div>
  );
}
