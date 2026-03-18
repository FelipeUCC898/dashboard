export default function Hero() {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Welcome Title */}
      <h1 className="text-[32px] leading-tight">
        <span className="font-bold text-black">Welcome Back, </span> 
        <span className="font-light text-black">Sujon</span> 
      </h1>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Date Range Picker */}
        <button className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span className="text-[14px] text-gray-700">29 Jun, 2025 - 29 August, 2025</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Add New Wallet Button */}
        <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span className="text-[14px] font-semibold text-black">Add New Wallet</span>
        </button>
      </div>
    </div>
  );
}
