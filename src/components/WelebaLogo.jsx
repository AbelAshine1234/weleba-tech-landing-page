import React from 'react'

const WelebaLogo = ({ className = '', width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer green teardrop/leaf shape - right side */}
      <path 
        d="M60 15 Q70 10 75 20 Q80 35 75 55 Q70 70 60 75 Q50 80 45 75 Q40 70 35 60 Q30 50 30 40 Q30 30 35 25 Q40 20 50 20 Q55 20 60 15 Z" 
        fill="#4CAF50"
      />
      {/* Inner C-shaped line creating the inner white space - left side */}
      <path 
        d="M45 20 Q40 25 38 35 Q36 45 38 55 Q40 65 45 70" 
        stroke="#4CAF50"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default WelebaLogo

