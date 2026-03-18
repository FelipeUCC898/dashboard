import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      <main className="pt-[100px] px-8">
        {/* Content Area with Sidebar */}
        <div className="relative">
          <Sidebar />
          
          {/* Main Content Area */}
          <div className="pl-[90px]">
            {/* Hero Section - Aligned with cards */}
            <div className="mb-6">
              <Hero />
            </div>

            {/* Cards Grid */}
            <div className="p-8 bg-white rounded-2xl">
              <h2 className="text-xl font-semibold">Cards Content Area</h2>
              <p className="text-gray-600 mt-2">Payment Goal, Engagement Rate, and other cards will go here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
