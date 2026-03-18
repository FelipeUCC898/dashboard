'use client';

import { CSSProperties } from "react";
import { scaleBand, scaleLinear } from "d3";
import { AnimatedBar } from "./AnimatedBar";

const data = [
  { key: "JAN", value: 2000 },
  { key: "FEB", value: 3500 },
  { key: "MAR", value: 2800 },
  { key: "APR", value: 4200, active: true },
  { key: "MAY", value: 3200 },
  { key: "JUN", value: 3800 },
];

export default function EngagementRateCard() {
  const xScale = scaleBand()
    .domain(data.map((d) => d.key))
    .range([0, 100])
    .padding(0.3);

  const yScale = scaleLinear()
    .domain([0, 5000])
    .range([100, 0]);

  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg border-2 border-gray-300 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          </div>
          <h3 className="text-[15px] font-semibold text-black">Engagement Rate</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-full border border-gray-300 text-[12px] text-gray-600">
            Monthly
          </button>
          <button className="px-3 py-1 rounded-full bg-[#2D6A4F] text-[12px] text-white">
            Annually
          </button>
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Chart */}
      <div
        className="relative w-full h-[220px]"
        style={{
          "--marginTop": "25px",
          "--marginRight": "8px",
          "--marginBottom": "20px",
          "--marginLeft": "30px",
        } as CSSProperties}
      >
        <div className="absolute inset-0 z-10 h-[calc(100%-var(--marginTop)-var(--marginBottom))] w-[calc(100%-var(--marginLeft)-var(--marginRight))] translate-x-[var(--marginLeft)] translate-y-[var(--marginTop)]">
          {data.map((d, index) => {
            const barX = xScale(d.key)!;
            const barWidth = xScale.bandwidth();
            const barHeight = 100 - yScale(d.value);

            return (
              <AnimatedBar key={index} index={index}>
                <div className="relative">
                  <div
                    style={{
                      position: "absolute",
                      left: `${barX}%`,
                      bottom: "0",
                      width: `${barWidth}%`,
                      height: `${barHeight}%`,
                      backgroundColor: d.active ? "#2D6A4F" : "#95D5B2",
                      borderRadius: "999px 999px 0 0",
                    }}
                  />
                  {d.active && (
                    <div
                      style={{
                        position: "absolute",
                        left: `${barX + barWidth / 2}%`,
                        bottom: `${barHeight + 2}%`,
                        transform: "translateX(-50%)",
                      }}
                      className="bg-gray-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap"
                    >
                      +17.8%
                    </div>
                  )}
                </div>
              </AnimatedBar>
            );
          })}

          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {yScale.ticks(6).map((tick, i) => (
              <g key={i} transform={`translate(0,${yScale(tick)})`} className="text-gray-200">
                <line x1={0} x2={100} stroke="currentColor" strokeDasharray="3,3" strokeWidth={0.5} vectorEffect="non-scaling-stroke"/>
              </g>
            ))}
          </svg>
        </div>

        <svg className="absolute inset-0 h-[calc(100%-var(--marginTop)-var(--marginBottom))] translate-y-[var(--marginTop)] overflow-visible">
          <g className="translate-x-[-4px]">
            {yScale.ticks(6).map((value, i) => (
              <text key={i} x="0" y={`${yScale(value)}%`} dy=".35em" textAnchor="end" fill="currentColor" className="text-[10px] text-gray-400">
                {value >= 1000 ? `${value / 1000}k` : value}
              </text>
            ))}
          </g>
        </svg>

        <svg className="absolute inset-0 w-[calc(100%-var(--marginLeft)-var(--marginRight))] translate-x-[var(--marginLeft)] h-[calc(100%-var(--marginBottom))] translate-y-[var(--marginTop)] overflow-visible">
          <g transform="translate(0,100)">
            {data.map((entry, i) => (
              <text key={i} x={`${xScale(entry.key)! + xScale.bandwidth() / 2}%`} y="0" dy="1em" textAnchor="middle" fill="currentColor" className="text-[10px] text-gray-400">
                {entry.key}
              </text>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
