'use client';

import { scaleLinear, line as d3line, area as d3area, curveMonotoneX } from "d3";

const data = [
  { x: 0, value: 25000 },
  { x: 1, value: 28000 },
  { x: 2, value: 26000 },
  { x: 3, value: 30000 },
  { x: 4, value: 29000 },
  { x: 5, value: 31000 },
  { x: 6, value: 32678 },
];

export default function TotalBalanceCard() {
  const xScale = scaleLinear().domain([0, data.length - 1]).range([0, 100]);
  const yScale = scaleLinear().domain([24000, 33000]).range([100, 0]);

  const line = d3line<typeof data[number]>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);

  const area = d3area<typeof data[number]>()
    .x((d) => xScale(d.x))
    .y0(100)
    .y1((d) => yScale(d.value))
    .curve(curveMonotoneX);

  const linePath = line(data) ?? undefined;
  const areaPath = area(data) ?? undefined;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-[15px] font-semibold text-black">Payment Goal</h3>
          <p className="text-[12px] text-gray-400 mt-0.5">Total amount goal</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </button>
      </div>

      <div className="mb-3">
        <p className="text-[11px] text-gray-400 mb-1">Total Balance</p>
        <p className="text-[32px] font-bold text-black leading-none">
          $32,678<span className="text-gray-400">.90</span>
        </p>
      </div>

      <div className="mb-4 h-14">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#2D6A4F" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#areaGradient)"/>
          <path d={linePath} fill="none" stroke="#2D6A4F" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
        </svg>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#2D6A4F] text-white py-2 rounded-full text-[13px] font-semibold hover:bg-[#1B4332]">
          Send
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 bg-white border-2 border-gray-300 text-black py-2 rounded-full text-[13px] font-semibold hover:bg-gray-50">
          Receive
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
