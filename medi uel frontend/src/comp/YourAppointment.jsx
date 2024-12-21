import React from 'react'
import '../styles/ticketList.css'

const YourAppointment = () => {
  return (
    <>
      <div>
        <p className="pout" style={{ marginTop: '50px', marginLeft: '100px' }}>
          Doctor appointments
        </p>
        <p>
          {}Date and {}month of booked appointment
        </p>
      </div>
      <div
        className="savedcont"
        style={{
          width: '1300px',
          height: '193px',
          borderRadius: '20px',
          backgroundColor: '#D9D9D9',
          marginTop: '60px',
          marginLeft: '100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="dynlbl">doc name{}</label>
          <label className="dynlbl">doc service {}</label>
          <label className="dynlbl">doc city: {}</label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '90px',
          }}
        >
          <br />
          <button
            className="pout"
            style={{
              border: 'none',
              backgroundColor: '#D9D9D9',
              color: 'blue',
            }}
          >
            Rebook
          </button>
          <br />
        </div>
      </div>
    </>
  )
}

export default YourAppointment
