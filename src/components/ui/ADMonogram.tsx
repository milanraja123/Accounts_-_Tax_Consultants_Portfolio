/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface ADMonogramProps {
  className?: string;
}

export default function ADMonogram({ className = "h-8 w-8" }: ADMonogramProps) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#131926] ${className} select-none`}>
      <svg viewBox="0 0 100 100" className="h-[60%] w-[60%]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 28,75 L 43,25 L 53,25 L 68,75 M 34,60 L 62,60"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 52,25 C 72,25 82,40 82,50 C 82,60 72,75 52,75"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
