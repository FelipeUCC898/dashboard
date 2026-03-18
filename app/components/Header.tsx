import Image from 'next/image';

export default function Header() {
  const navItems = ['Dashboard', 'Reports', 'Documents', 'History', 'Contacts'];
  
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 z-50">
      <header className="w-[90%] bg-white h-[70px] px-8 flex items-center justify-between rounded-2xl shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a5c3a] rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-black">Oripio</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[15px] transition-colors relative pb-1 ${
                index === 0 
                  ? 'text-black font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#2D6A4F] after:rounded-full' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Notification Icon */}
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>

          {/* User Avatar */}
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-gray-400 overflow-hidden flex items-center justify-center">
              <span className="text-white text-sm font-medium">SJ</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
