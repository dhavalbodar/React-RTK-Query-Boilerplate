import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Go to Home
      </button>
    </div>
  )
}

export default NotFound;