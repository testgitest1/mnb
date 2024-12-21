import React, { useState, useEffect, useContext } from 'react'
import '../sty/filter.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

const Payment = () => {
  const navigate = useNavigate()
  const { selectedDoctor } = useContext(AppContext)
  const [appointmentData, setAppointmentData] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('appointmentData')
    if (data) {
      const parsedData = JSON.parse(data)
      if (parsedData.startDate) {
        parsedData.startDate = new Date(parsedData.startDate)
      }
      setAppointmentData(parsedData)
    }
  }, [])

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12
    return `${hours12}:${minutes} ${ampm}`
  }

  const handleCardPayClick = () => {
    navigate('/PaymentDone')
  }

  return (
    <div className="payhd">
      <div className="paycont">
        <p>Hey, Doctor confirmed your Appointment</p>
        <p style={{ paddingTop: '30px' }}>
          Make the payment and receive your Appointment letter from the Doctor
        </p>
        <div className="pycon">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <p>Confirm Payment</p>
            <p>Patient Details</p>
            {appointmentData ? (
              <>
                <div style={{ display: 'flex', gap: '280px' }}>
                  <p>Name</p>
                  <p>
                    {appointmentData.firstName} {appointmentData.lastName}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '250px' }}>
                  <p>Patient Age</p>
                  <p>{appointmentData.age}</p>
                </div>
                <div style={{ display: 'flex', gap: '280px' }}>
                  <p>Gender</p>
                  <p>{appointmentData.gender}</p>
                </div>
                <div style={{ display: 'flex', gap: '110px' }}>
                  <p>Appointment Through</p>
                  <p>{appointmentData.appointmentType}</p>
                </div>
                <div style={{ display: 'flex', gap: '290px' }}>
                  <p>Date</p>
                  <p>{appointmentData.startDate?.toLocaleDateString()}</p>
                </div>
                <div style={{ display: 'flex', gap: '295px' }}>
                  <p>Time</p>
                  <p>
                    {appointmentData.time
                      ? formatTime(appointmentData.time)
                      : 'Not Set'}
                  </p>
                </div>
              </>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Consultation Fee</p>
              <p>Rs {selectedDoctor.fee}</p>
            </div>
            <button
              onClick={handleCardPayClick}
              style={{
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'rgb(17, 60, 73)',
                color: 'rgb(255,255,255)',
                width: '185px',
                height: '65px',
              }}
            >
              Continue Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
