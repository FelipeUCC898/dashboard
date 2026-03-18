import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      <Sidebar />
      
      <main className="pt-[100px] pl-[90px]">
        {/* Dashboard content will go here */}
        <div className="p-8">
          <h1 className="text-2xl font-semibold">Dashboard Content</h1>
        </div>
      </main>
    </div>
  );
}
