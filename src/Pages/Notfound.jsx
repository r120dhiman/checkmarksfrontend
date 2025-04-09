import React from 'react'
import { Link } from 'react-router'
function Notfound() {
  return (
    <div className="text-4xl md:text-5xl font-bold text-center text-blue-800 p-20 mb-10" >
      {/* Page not found working on it,go to home page  */}
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Notfound
