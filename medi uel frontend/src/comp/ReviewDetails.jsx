// import React, { useState, useEffect } from 'react'
// import '../sty/filter.css'
// import DatePicker from 'react-datepicker'
// import TimePicker from 'react-time-picker'
// import { useNavigate } from 'react-router-dom'

// const ReviewDetails = () => {
//   const navigate = useNavigate()
//   const [appointmentData, setAppointmentData] = useState(null)

//   useEffect(() => {
//     const data = localStorage.getItem('appointmentData')
//     if (data) {
//       const parsedData = JSON.parse(data)
//       if (parsedData.startDate) {
//         parsedData.startDate = new Date(parsedData.startDate)
//       }
//       setAppointmentData(parsedData)
//     }
//   }, [])

//   const formatTime = (time24) => {
//     const [hours, minutes] = time24.split(':')
//     const ampm = hours >= 12 ? 'PM' : 'AM'
//     const hours12 = hours % 12 || 12
//     return `${hours12}:${minutes} ${ampm}`
//   }

//   const [isEditable, setIsEditable] = useState(false)
//   const [firstName, setFirstName] = useState(appointmentData?.firstName || '')
//   const [lastName, setLastName] = useState(appointmentData?.lastName || '')
//   const [appointmentType, setAppointmentType] = useState(
//     appointmentData?.appointmentType || ''
//   )
//   const [age, setAge] = useState(appointmentData?.age || '')
//   const [gender, setGender] = useState(appointmentData?.gender || '')
//   const [startDate, setStartDate] = useState(appointmentData?.startDate || null)
//   const [value, setValue] = useState(appointmentData?.time || '00:00')
//   const [editMessage, setEditMessage] = useState('')

//   const handleEditClick = () => {
//     navigate('/appointments')
//   }

//   // const handleSubmitClick = () => {
//   //   const updatedAppointmentData = {
//   //     firstName,
//   //     lastName,
//   //     appointmentType,
//   //     age,
//   //     gender,
//   //     startDate,
//   //     time: value,
//   //   }
//   //   localStorage.setItem(
//   //     'appointmentData',
//   //     JSON.stringify(updatedAppointmentData)
//   //   )
//   //   navigate('/payment')
//   // }

//   // if (!appointmentData) {
//   //   return <div>Loading...</div>
//   // }
//   const handleSubmitClick = () => {
//     const updatedAppointmentData = {
//       firstName,
//       lastName,
//       appointmentType,
//       age,
//       gender,
//       startDate,
//       time: value,
//     }
  
//     console.log("Saving appointment data to localStorage:", updatedAppointmentData);
//     localStorage.setItem('appointmentData', JSON.stringify(updatedAppointmentData));
//     console.log("Appointment data in localStorage after saving:", localStorage.getItem('appointmentData'));
  
//     navigate('/payment');
//   }
  
//   return (
//     <div className="hmhd">
//       <div className="hmcontpa" style={{ width: '1100px' }}>
//         <div style={{ padding: '40px 0px', marginLeft: '0px' }}>
//           <p>Patient / Appointment Details</p>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '20px',
//               padding: '40px 0px',
//             }}
//           >
//             <p>Confirm Payment</p>
//             <p>Patient Details</p>
//             {appointmentData ? (
//               <>
//                 <div style={{ display: 'flex', gap: '300px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Name
//                   </p>
//                   <p>
//                     {appointmentData.firstName} {appointmentData.lastName}
//                   </p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '280px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Patient Age
//                   </p>
//                   <p>{appointmentData.age}</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '300px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Gender
//                   </p>
//                   <p>{appointmentData.gender}</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '125px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Appointment Through
//                   </p>
//                   <p>{appointmentData.appointmentType}</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '320px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Date
//                   </p>
//                   <p>{appointmentData.startDate?.toLocaleDateString()}</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '315px' }}>
//                   <p
//                     style={{
//                       fontFamily: 'poppins',
//                       fontSize: '20px',
//                       fontWeight: '500',
//                     }}
//                   >
//                     Time
//                   </p>
//                   <p>
//                     {appointmentData.time
//                       ? formatTime(appointmentData.time)
//                       : 'Not Set'}
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <p>Loading data...</p>
//             )}
//           </div>
//           <div>
//             <p>Your Requirements</p>
//             <textarea className="txtar" />
//           </div>
//           <div
//             className="revdetbtn"
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               margin: 'auto',
//               width: '900px',
//             }}
//           >
//             <button
//               onClick={handleEditClick}
//               style={{
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 backgroundColor: 'rgb(17,63,70)',
//                 color: 'white',
//                 width: '125px',
//                 height: '65px',
//               }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleSubmitClick}
//               style={{
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 backgroundColor: 'rgb(17,63,70)',
//                 color: 'white',
//                 width: '264px',
//                 height: '65px',
//               }}
//             >
//               Submit
//             </button>
//           </div>
//           {editMessage && (
//             <div
//               style={{
//                 color: 'orange',
//                 marginTop: '10px',
//                 textAlign: 'center',
//               }}
//             >
//               {editMessage}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReviewDetails






import React, { useState, useEffect } from 'react'
import '../sty/filter.css'
import { useNavigate } from 'react-router-dom'

const ReviewDetails = () => {
  const navigate = useNavigate()
  const [appointmentData, setAppointmentData] = useState(null)

  useEffect(() => {
    // Try to load data from localStorage
    const data = localStorage.getItem('appointmentData')
    if (data) {
      const parsedData = JSON.parse(data)
      // Logging loaded data from localStorage
      console.log("Loaded appointment data from localStorage:", parsedData)

      // If startDate is stored as a string, convert it to a Date object
      if (parsedData.startDate) {
        parsedData.startDate = new Date(parsedData.startDate)
      }

      setAppointmentData(parsedData)
    } else {
      console.log("No appointment data found in localStorage.")
    }
  }, [])

  const handleSubmitClick = () => {
    if (appointmentData) {
      // Log current appointment data before saving
      console.log("Saving appointment data to localStorage:", appointmentData)

      // Save the data back to localStorage
      localStorage.setItem('appointmentData', JSON.stringify(appointmentData))

      // Log appointment data in localStorage after saving
      console.log("Appointment data in localStorage after saving:", localStorage.getItem('appointmentData'))

      // Navigate to the payment page
      navigate('/payment')
    } else {
      console.log("No appointment data to save.")
    }
  }

  // Show loading state if data is not yet loaded
  if (!appointmentData) {
    return <p>Loading...</p>  
  }

  return (
    <div className="hmhd">
      <div className="hmcontpa" style={{ width: '1100px' }}>
        <div style={{ padding: '40px 0px', marginLeft: '0px' }}>
          <p>Patient / Appointment Details</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '40px 0px',
            }}
          >
            <p>Confirm Payment</p>
            <p>Patient Details</p>
            {appointmentData ? (
              <>
                <div style={{ display: 'flex', gap: '300px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Name
                  </p>
                  <p>
                    {appointmentData.firstName} {appointmentData.lastName}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '280px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Patient Age
                  </p>
                  <p>{appointmentData.age}</p>
                </div>
                <div style={{ display: 'flex', gap: '300px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Gender
                  </p>
                  <p>{appointmentData.gender}</p>
                </div>
                <div style={{ display: 'flex', gap: '125px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Appointment Through
                  </p>
                  <p>{appointmentData.appointmentType}</p>
                </div>
                <div style={{ display: 'flex', gap: '320px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Date
                  </p>
                  <p>{appointmentData.startDate?.toLocaleDateString()}</p>
                </div>
                <div style={{ display: 'flex', gap: '315px' }}>
                  <p
                    style={{
                      fontFamily: 'poppins',
                      fontSize: '20px',
                      fontWeight: '500',
                    }}
                  >
                    Time
                  </p>
                  <p>{appointmentData.time}</p>
                </div>
              </>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div>
            <p>Your Requirements</p>
            <textarea className="txtar" />
          </div>
          <div
            className="revdetbtn"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: 'auto',
              width: '900px',
            }}
          >
            <button
              onClick={() => navigate('/appointments')}
              style={{
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'rgb(17,63,70)',
                color: 'white',
                width: '125px',
                height: '65px',
              }}
            >
              Edit
            </button>
            <button
              onClick={handleSubmitClick}
              style={{
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'rgb(17,63,70)',
                color: 'white',
                width: '264px',
                height: '65px',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
