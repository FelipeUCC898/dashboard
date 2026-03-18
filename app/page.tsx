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
        <div className="relative">
          <Sidebar />
          
          <div className="pl-[90px]">
            <div className="mb-6">
              <Hero />
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-3 gap-5 mb-5">
              {/* Row 1 */}
              <PaymentGoalCard />
              <EngagementRateCard />
              <TotalBalanceCard />
            </div>

            <div className="grid grid-cols-3 gap-5">
              {/* Row 2 */}
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
