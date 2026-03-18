import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import PaymentGoalCard from './components/PaymentGoalCard';
import EngagementRateCard from './components/EngagementRateCard';
import TotalBalanceCard from './components/TotalBalanceCard';
import AmountOfCreditCard from './components/AmountOfCreditCard';
import MandatoryPaymentsCard from './components/MandatoryPaymentsCard';
import PaymentHistoryCard from './components/PaymentHistoryCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      <main className="pt-[100px] px-8 pb-8">
        {/* Hero Section - Aligned with cards */}
        <div className="mb-6 pl-[90px]">
          <Hero />
        </div>

        {/* Cards Section - With sidebar */}
        <div className="relative">
          <Sidebar />
          
          <div className="pl-[90px]">
            {/* Cards Grid Layout - Custom proportions */}
            <div className="grid grid-cols-[minmax(240px,280px)_minmax(380px,1fr)_minmax(260px,300px)] gap-5 mb-5">
              {/* Row 1: Payment Goal (small) | Engagement Rate (large) | Total Balance (medium) */}
              <PaymentGoalCard />
              <EngagementRateCard />
              <TotalBalanceCard />
            </div>

            <div className="grid grid-cols-[minmax(240px,280px)_minmax(380px,1fr)_minmax(260px,300px)] gap-5">
              {/* Row 2: Payment History (spans 2 cols) | Right column (Amount + Mandatory) */}
              <div className="col-span-2">
                <PaymentHistoryCard />
              </div>
              <div className="flex flex-col gap-5">
                <AmountOfCreditCard />
                <MandatoryPaymentsCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
