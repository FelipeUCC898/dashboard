export default function PaymentHistoryCard() {
  const payments = [
    { name: 'Dribbble Design', logo: '🎨', badge: '+18.67%', date: '16 Jun 2025', time: '10:30 PM', amount: '89,345.23 USD', color: 'bg-pink-100' },
    { name: 'Google Pay', logo: 'G', badge: '+9.34%', date: '15 Jun 2025', time: '11:45 PM', amount: '12,345.89 USD', color: 'bg-blue-100' },
    { name: 'Amazon Shopping', logo: 'a', badge: '+12.23%', date: '14 Jun 2025', time: '10:15 PM', amount: '32,123.67 USD', color: 'bg-orange-100' }
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-semibold text-black">Payment History</h3>
          <p className="text-[12px] text-gray-400 mt-0.5">Recent payments history</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-[10px] font-medium text-gray-400 pb-2">Name</th>
              <th className="text-left text-[10px] font-medium text-gray-400 pb-2">Date</th>
              <th className="text-left text-[10px] font-medium text-gray-400 pb-2">Time</th>
              <th className="text-left text-[10px] font-medium text-gray-400 pb-2">Status</th>
              <th className="text-right text-[10px] font-medium text-gray-400 pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b border-gray-50">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-full ${payment.color} flex items-center justify-center text-xs`}>
                      {payment.logo}
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-black">{payment.name}</p>
                      <span className="text-[9px] text-green-600 font-semibold">{payment.badge}</span>
                    </div>
                  </div>
                </td>
                <td className="text-[12px] text-gray-600">{payment.date}</td>
                <td className="text-[12px] text-gray-600">{payment.time}</td>
                <td>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[12px] text-gray-600">Successful</span>
                  </div>
                </td>
                <td className="text-right text-[12px] font-medium text-black">{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
