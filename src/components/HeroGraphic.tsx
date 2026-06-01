/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function HeroGraphic() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Mock index chart points to show dynamic data points on hover.
  const chartData = [
    { x: 30, y: 190, label: 'Q1 Rate', value: '4.2%' },
    { x: 90, y: 155, label: 'Q2 Growth', value: '7.8%' },
    { x: 150, y: 110, label: 'Q3 Tax Savings', value: '12.4%' },
    { x: 210, y: 130, label: 'Projection', value: '11.1%' },
    { x: 270, y: 70, label: 'Yearly Value', value: '18.9%' },
  ];

  return (
    <div id="hero-graphic" className="relative w-full h-full min-h-[460px] md:min-h-[520px] select-none">
      {/* Background High-Tech Panel */}
      <div
        className="absolute inset-y-0 right-0 w-[85%] md:w-[75%] rounded-[2.5rem] bg-[#0c121f] border border-white/5 overflow-hidden shadow-2xl flex flex-col justify-end"
        style={{
          boxShadow: '0 25px 60px -15px rgba(12, 18, 31, 0.9)',
        }}
      >
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-[120px] h-[120px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[150px] h-[150px] bg-indigo-500/15 rounded-full blur-3xl" />

        {/* SVG containing Metallic Cylinders (stacked coins/metrics) & Line Chart */}
        <svg
          viewBox="0 0 320 220"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Gradients for metallic coins/cylinders */}
          <defs>
            <linearGradient id="silverMet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="25%" stopColor="#475569" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="75%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>

          {/* Graphical Representation of stacked coins (cylinder graphics) */}
          {/* Cylinder Stack 1 (Rightmost) */}
          <g transform="translate(250, 40)">
            {/* Layer 1 (bottom-most stacked disk) */}
            <path d="M 0,140 x-scale" />
            {Array.from({ length: 13 }).map((_, i) => {
              const yOffset = i * 10;
              return (
                <g key={`stack1-${i}`}>
                  {/* Cylinder side */}
                  <rect
                    x="0"
                    y={50 + yOffset}
                    width="45"
                    height="10"
                    fill="url(#silverMet)"
                    opacity={0.15 + (i * 0.05)}
                  />
                  {/* Cylinder top ellipse */}
                  <ellipse
                    cx="22.5"
                    cy={50 + yOffset}
                    rx="22.5"
                    ry="4"
                    fill="#334155"
                    stroke="#475569"
                    strokeWidth="0.5"
                    opacity={0.3 + (i * 0.05)}
                  />
                </g>
              );
            })}
          </g>

          {/* Cylinder Stack 2 (Middle-Right) */}
          <g transform="translate(210, 80)">
            {Array.from({ length: 9 }).map((_, i) => {
              const yOffset = i * 102;
              return (
                <g key={`stack2-${i}`} transform={`translate(0, ${i * 10})`}>
                  <rect
                    x="0"
                    y="30"
                    width="40"
                    height="10"
                    fill="url(#silverMet)"
                    opacity={0.2 + (i * 0.07)}
                  />
                  <ellipse
                    cx="20"
                    cy="30"
                    rx="20"
                    ry="3.5"
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth="0.5"
                    opacity={0.4 + (i * 0.05)}
                  />
                </g>
              );
            })}
          </g>

          {/* Glowing grid line paths in the background */}
          <path
            d="M 10,180 L 310,180"
            stroke="#1e293b"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M 10,140 L 310,140"
            stroke="#1e293b"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
          <path
            d="M 10,100 L 310,100"
            stroke="#1e293b"
            strokeWidth="0.5"
          />

          {/* The white/purple elegant trend line */}
          <path
            d="M 20,195 Q 60,180 90,150 T 170,120 T 250,90 T 310,65"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Floating light particles along the path */}
          <motion.circle
            cx="90"
            cy="150"
            r="3"
            fill="#ffffff"
            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="250"
            cy="90"
            r="3"
            fill="#818cf8"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          />

          {/* Hover interactive dots */}
          {chartData.map((pt, idx) => (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r={hoveredPoint === idx ? '8' : '4'}
              fill={hoveredPoint === idx ? '#38bdf8' : '#ffffff'}
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredPoint(idx)}
              onMouseLeave={() => setHoveredPoint(null)}
              opacity={hoveredPoint === idx ? '0.9' : '0.6'}
            />
          ))}
        </svg>

        {/* Display overlay info when hovering chart points */}
        <div className="absolute bottom-6 right-6 font-mono text-right text-[10px] text-gray-500/80 uppercase tracking-widest hidden sm:block">
          {hoveredPoint !== null ? (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/40 p-2 rounded border border-white/5"
            >
              <div className="text-[#38bdf8] font-bold">{chartData[hoveredPoint].label}</div>
              <div className="text-white text-xs">{chartData[hoveredPoint].value} Gain</div>
            </motion.div>
          ) : (
            <div>Live Index Active</div>
          )}
        </div>
      </div>
    </div>
  );
}
