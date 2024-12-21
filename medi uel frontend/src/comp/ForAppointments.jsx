import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import { useHospitalContext } from './HospitalContext'

const ForAppointments = () => {
  const { selectedDoctor } = useContext(AppContext)

  const getTodayDate = () => {
    const today = new Date()
    return today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      {!selectedDoctor ? (
        <div
          style={{
            margin: 'auto',
            width: '40%',
            height: '10vh',
            alignItems: 'center',
            marginTop: '90px',
            marginBottom: '90px',
            backgroundColor: 'rgb(179,218,217)',
            borderRadius: '40px',
          }}
        >
          <p style={{ textAlign: 'center', padding: '20px' }}>
            No Appointment History Exists
          </p>
        </div>
      ) : (
        <div style={{ height: '110vh' }}>
          <div className="fordocapt">
            <div
              style={{
                display: 'flex',
                gap: '800px',
                justifyContent: 'space-evenly',
                paddingTop: '50px',
              }}
            >
              <p>Doctor Appointments</p>
              <p>{getTodayDate()}</p>
            </div>
            <div
              className="savedcont"
              style={{
                width: '1300px',
                height: '138px',
                borderRadius: '20px',
                alignItems: 'center',
                backgroundColor: 'rgb(179,218,217)',
                marginTop: '10px',
                marginLeft: '45px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '30px',
                  gap: '20px',
                }}
              >
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.docname}
                </label>
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.health}
                </label>
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.city}
                </label>
              </div>
              <button
                className="pout"
                style={{
                  width: '92px',
                  height: '32px',
                  borderRadius: '124px',
                  marginRight: '20px',
                  backgroundColor: 'rgba(17, 60, 63)',
                  color: 'white',
                }}
              >
                Rebook
              </button>
            </div>
          </div>

          <div className="fordocapt">
            <div
              style={{
                display: 'flex',
                gap: '800px',
                justifyContent: 'space-evenly',
                paddingTop: '50px',
              }}
            >
              <p>Hospital Appointments</p>
              <p>{getTodayDate()}</p>
            </div>
            <div
              className="savedcont"
              style={{
                width: '1300px',
                height: '138px',
                borderRadius: '20px',
                alignItems: 'center',
                backgroundColor: 'rgb(179,218,217)',
                marginTop: '10px',
                marginLeft: '45px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '30px',
                  gap: '20px',
                }}
              >
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.hospital}
                </label>
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.docname}
                </label>
                <label style={{ fontWeight: '200' }} className="dynlbl">
                  {selectedDoctor.city}
                </label>
              </div>
              <button
                className="pout"
                style={{
                  width: '92px',
                  height: '32px',
                  borderRadius: '124px',
                  marginRight: '20px',
                  backgroundColor: 'rgba(17, 60, 63)',
                  color: 'white',
                }}
              >
                Rebook
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ForAppointments
