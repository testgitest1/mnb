import React from 'react'
import { Link } from 'react-router-dom'
import '../sty/styles.css'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate = useNavigate()
  const handleHomeclick = () => {
    navigate('/')
  }
  return (
    <div>
      <header className="header">
        <div className="logo" onClick={handleHomeclick}>
          Logo
        </div>
        <div className="appointments">
          <nav className="navbar">
            <ul className="ultp">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search-doc">Search Doctor</Link>
              </li>
              <li>
                <Link to="/docs-overview">Docs Overview</Link>
              </li>
              <li>
                <Link to="/appointments">Appointment Details</Link>
              </li>
              <li>
                <Link to="/filter">Filter</Link>
              </li>
            </ul>
          </nav>
          Your Appointments <div className="circle"></div>
        </div>
      </header>
    </div>
  )
}

export default Topbar
