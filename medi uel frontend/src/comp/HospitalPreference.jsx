// import React, { useState, useEffect, useContext } from 'react'
// import '../sty/filter.css'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import TimePicker from 'react-time-picker'
// import 'react-time-picker/dist/TimePicker.css'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from './AppContext'

// const PreferenceAppointment = () => {
//   const navigate = useNavigate()
//   const { userDetails } = useContext(AppContext)

//   const [startDate, setStartDate] = useState(null)
//   const [value, onChange] = useState('00:00')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [appointmentType, setAppointmentType] = useState('')
//   const [age, setAge] = useState('')
//   const [gender, setGender] = useState('')
//   const [error, setError] = useState('')

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('appointmentData'))
//     if (storedData) {
//       setFirstName(storedData.firstName || '')
//       setLastName(storedData.lastName || '')
//       setAppointmentType(storedData.appointmentType || '')
//       setAge(storedData.age || '')
//       setGender(storedData.gender || '')
//       setStartDate(storedData.startDate || null)
//       onChange(storedData.time || '00:00')
//     }
//   }, [])

//   const handleReviewClick = () => {
//     if (
//       !firstName ||
//       !lastName ||
//       !appointmentType ||
//       !age ||
//       !gender ||
//       !startDate ||
//       !value
//     ) {
//       setError('Please fill in all required fields.')
//       return
//     }
//     const appointmentData = {
//       firstName,
//       lastName,
//       appointmentType,
//       age,
//       gender,
//       startDate,
//       time: value,
//     }

//     localStorage.setItem('appointmentData', JSON.stringify(appointmentData))

//     if (!userDetails) {
//       setError('Before sending request, Login to your account')
//     } else {
//       navigate('/HospreviewDetails')
//       setError('')
//     }
//   }

//   return (
//     <div style={{ padding: '0px 0px' }}>
//       <div className="hmcontpa" style={{ backgroundColor: 'rgb(255,255,255)' }}>
//         <div style={{ padding: '50px 0px', marginLeft: '-30px' }}>
//           <p>Appointment Details</p>
//           <div className="fw">
//             <input
//               required
//               className="inpfw"
//               placeholder="Enter Patient First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               required
//               className="inpfw"
//               placeholder="Enter Patient Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//             <select
//               required
//               className="dpd"
//               value={appointmentType}
//               onChange={(e) => setAppointmentType(e.target.value)}
//             >
//               <option value="" disabled selected hidden>
//                 Appointment Through
//               </option>
//               <option>Online Visit</option>
//               <option>Offline Visit</option>
//             </select>
//           </div>
//           <div style={{ display: 'flex', gap: '155px' }}>
//             <input
//               required
//               className="inpfw"
//               placeholder="Enter Patient Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//             <select
//               required
//               className="dpd"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             >
//               <option value="" disabled selected hidden>
//                 Gender
//               </option>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//           </div>
//           <div style={{ display: 'flex', gap: '200px', marginTop: '40px' }}>
//             <label>Date</label>
//             <label>Time</label>
//           </div>

//           <div
//             className="forwh"
//             style={{ display: 'flex', marginTop: '40px', gap: '40px' }}
//           >
//             <DatePicker
//               required
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               placeholderText="Select Start Date"
//               minDate={new Date()}
//             />
//             <TimePicker
//               onChange={onChange}
//               required
//               value={value}
//               format="hh:mm a"
//             />
//           </div>
//           <div>
//             <p style={{ marginTop: '80px' }}>
//               In what ways can a doctor support your health needs?
//             </p>
//             <p
//               className="txtar"
//               style={{ fontSize: '16px', marginLeft: '30px', textJustify:'auto' }}
//             >
//               A doctor supports your health needs through accurate diagnosis and tailored treatment plans, encompassing preventive care like vaccinations and screenings to maintain overall wellness. They manage chronic conditions by developing long-term care plans, offer health education for informed decision-making, and provide lifestyle counseling to encourage healthier habits. Additionally, doctors recognize mental health concerns, coordinate care among specialists, advocate for your needs within the healthcare system, and conduct regular follow-ups to monitor your health progress. In emergency situations, they offer immediate care and referrals, making them integral to your overall health and well-being.
//             </p>
//           </div>
//           <div style={{ paddingLeft: '700px' }}>
//             <button
//               className="revbtn"
//               onClick={handleReviewClick}
//               style={{
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 backgroundColor: 'rgb(17,63,70)',
//                 color: 'white',
//                 width: '125px',
//                 height: '65px',
//               }}
//             >
//               Review
//             </button>
//             {error && <p style={{ color: 'red', width: '250px' }}>{error}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PreferenceAppointment



















import React, { useState, useEffect, useContext } from 'react'
import '../sty/filter.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

const PreferenceAppointment = () => {
  const navigate = useNavigate()
  const { userDetails } = useContext(AppContext)

  const [startDate, setStartDate] = useState(null)
  const [value, onChange] = useState('00:00')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [appointmentType, setAppointmentType] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')

  // Retrieve data from localStorage if present
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('appointmentData'))
    if (storedData) {
      console.log("Stored data found:", storedData)  // Debug log to see stored data
      setFirstName(storedData.firstName || '')
      setLastName(storedData.lastName || '')
      setAppointmentType(storedData.appointmentType || '')
      setAge(storedData.age || '')
      setGender(storedData.gender || '')
      setStartDate(storedData.startDate || null)
      onChange(storedData.time || '00:00')
    }
  }, [])

  const handleReviewClick = () => {
    if (
      !firstName ||
      !lastName ||
      !appointmentType ||
      !age ||
      !gender ||
      !startDate ||
      !value
    ) {
      setError('Please fill in all required fields.')
      return
    }

    const appointmentData = {
      firstName,
      lastName,
      appointmentType,
      age,
      gender,
      startDate,
      time: value,
    }

    console.log("Saving appointment data to localStorage:", appointmentData)  // Debug log for saving data

    localStorage.setItem('appointmentData', JSON.stringify(appointmentData))

    // Check if data is saved correctly in localStorage
    const savedData = JSON.parse(localStorage.getItem('appointmentData'))
    console.log("Data after saving:", savedData)  // Debug log to check if it's saved correctly

    if (!userDetails) {
      setError('Before sending request, Login to your account')
    } else {
      navigate('/HospreviewDetails')
      setError('')
    }
  }

  return (
    <div style={{ padding: '0px 0px' }}>
      <div className="hmcontpa" style={{ backgroundColor: 'rgb(255,255,255)' }}>
        <div style={{ padding: '50px 0px', marginLeft: '-30px' }}>
          <p>Appointment Details</p>
          <div className="fw">
            <input
              required
              className="inpfw"
              placeholder="Enter Patient First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="inpfw"
              placeholder="Enter Patient Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <select
              required
              className="dpd"
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Appointment Through
              </option>
              <option>Online Visit</option>
              <option>Offline Visit</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '155px' }}>
            <input
              required
              className="inpfw"
              placeholder="Enter Patient Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <select
              required
              className="dpd"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '200px', marginTop: '40px' }}>
            <label>Date</label>
            <label>Time</label>
          </div>

          <div
            className="forwh"
            style={{ display: 'flex', marginTop: '40px', gap: '40px' }}
          >
            <DatePicker
              required
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Start Date"
              minDate={new Date()}
            />
            <TimePicker
              onChange={onChange}
              required
              value={value}
              format="hh:mm a"
            />
          </div>
          <div>
            <p style={{ marginTop: '80px' }}>
              In what ways can a doctor support your health needs?
            </p>
            <p
              className="txtar"
              style={{ fontSize: '16px', marginLeft: '30px', textJustify:'auto' }}
            >
              A doctor supports your health needs through accurate diagnosis and tailored treatment plans, encompassing preventive care like vaccinations and screenings to maintain overall wellness. They manage chronic conditions by developing long-term care plans, offer health education for informed decision-making, and provide lifestyle counseling to encourage healthier habits. Additionally, doctors recognize mental health concerns, coordinate care among specialists, advocate for your needs within the healthcare system, and conduct regular follow-ups to monitor your health progress. In emergency situations, they offer immediate care and referrals, making them integral to your overall health and well-being.
            </p>
          </div>
          <div style={{ paddingLeft: '700px' }}>
            <button
              className="revbtn"
              onClick={handleReviewClick}
              style={{
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'rgb(17,63,70)',
                color: 'white',
                width: '125px',
                height: '65px',
              }}
            >
              Review
            </button>
            {error && <p style={{ color: 'red', width: '250px' }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferenceAppointment
