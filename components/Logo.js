import React from 'react'

const Logo = () => {
  const width = 32
  const height = 32
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 44 44'>
      <path d='M0 22C1.03435e-06 9.84973 9.84974 -1.03435e-06 22 0C30.9336 7.80998e-07 38.6235 5.3248 42.069 12.9737L12.9737 42.069C11.7252 41.5066 10.5385 40.8311 9.42689 40.0555L27.4824 22H22L6.44366 37.5563C2.46244 33.5751 -5.31105e-07 28.0751 0 22Z' />
      <path d='M44 22.0076L22.0076 44C34.1518 43.9959 43.9959 34.1518 44 22.0076Z' />
    </svg>
  )
}

export default Logo
