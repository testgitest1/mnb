import React from 'react'
import '../sty/home.css'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/ConsultNow')
  }
  const handleHospitalClick = () => {
    navigate('/SearchHospital')
  }
  return (
    <div className="chead" style={{ backgroundColor: 'rgb(179, 218, 217)' }}>
      <div className="c">
        <div className="cont">
          <p style={{ cursor: 'pointer' }} onClick={handleClick}>
            Talk to Doctor
          </p>
        </div>
        <div className="cont">
          <p style={{ cursor: 'pointer' }} onClick={handleHospitalClick}>
            Search Near by Hospital
          </p>
        </div>
        <div className="cont">
          <p>Buy Medicines and Essentials</p>
        </div>
      </div>
      <div className="cb">
        <p>Always caring about your health</p>
        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '40px',
          }}
        >
          <div className="con"></div>
          <div className="con" style={{ marginBottom: '50px' }}></div>
        </p>
      </div>
    </div>
  )
}

export default Home
