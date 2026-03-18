export default function Sidebar() {
  return (
    <aside className="fixed left-6 top-[100px] bottom-6 w-[60px] flex flex-col items-center gap-4 z-40">
      {/* First Section - Top 4 Icons */}
      <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-5 gap-5">
        {/* Active Grid Icon */}
        <button className="w-11 h-11 rounded-full bg-[#2d6a4f] flex items-center justify-center hover:bg-[#1a5c3a] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </button>

        {/* Chart/Analytics Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        </button>

        {/* Wallet Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
          </svg>
        </button>

        {/* History/Document Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </button>
      </div>

      {/* Second Section - Middle 3 Icons */}
      <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-5 gap-5">
        {/* Wallet/Card Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        </button>

        {/* Message Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>

        {/* Time/Clock Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </button>
      </div>

      {/* Spacer to push bottom section down */}
      <div className="flex-1"></div>

      {/* Third Section - Bottom 2 Icons */}
      <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-5 gap-5">
        {/* Settings Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2"/>
          </svg>
        </button>

        {/* Logout Icon */}
        <button className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </aside>
  );
}
