import React, { useContext, useEffect } from 'react'
import { AppContext } from './AppContext'
import PreferenceAppointment from './PreferenceAppointment'
import '../sty/appointmentdetails.css'

const AppointmentDetails = () => {
  const {
    selectedDoctor,
    setFilter,
    Docdata,
    Biograph,
    setSelectedDoctor,
    filters,
  } = useContext(AppContext) // Access context
  // const { filters, , selectedDoctor,  } = useContext(AppContext);

  // const simg =
  //   'public/vc.png'

  const {
    city = filters.city,
    service = filters.service,
    selectedOptions = filters.selectedOptions,
  } = filters

  // Find the doctor in Docdata and the biography based on the selectedDoctor
  const selectedDoctorBio = Biograph.find(
    (bio) => bio.docname === selectedDoctor?.docname
  )

  // On component mount, load `selectedDoctor` and `filters` from localStorage if they exist
  useEffect(() => {
    const savedDoctor = localStorage.getItem('selectedDoctor')
    const savedFilters = localStorage.getItem('filters')

    if (savedDoctor) {
      // Update the context with the saved data
      const doctor = JSON.parse(savedDoctor)
      setSelectedDoctor(doctor)
    }

    if (savedFilters) {
      // Update the context with the saved filters
      const filters = JSON.parse(savedFilters)
      setFilter(filters)
    }
  }, [])

  return (
    <div className="adc" style={{ padding: '50px 125px' }}>
      {/* Display selected doctor details if available */}
      <div style={{backgroundColor:'white', border:'1px solid grey', borderRadius:'30px', paddingTop:'40px', marginBottom:'10px'}}>
      <p
        style={{
          fontFamily: 'Open Sans',
          fontSize: '50px',
          fontWeight: '600',
          paddingLeft:'25px',
          paddingBottom: '20px',
          color:'rgb(17,63,70)'
        }}
      >
        Doctor
      </p>
      {selectedDoctor && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'space-evenly',
            // gap:'20px'
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ marginLeft:'40px'}}>
              <img
            // src="public/vc.png"
              src={selectedDoctor.imag}
              alt="Doctor"
              style={{borderRadius:"50%",boxShadow:"#9b9797 -15px -8px 30px",width:"200px",height:"200px",objectFit:"cover"}}
            /></div>
            <div
              className="upp"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <p>Dr. {selectedDoctor.docname}</p>
              <p>{selectedDoctor.health}</p>
              <p>{selectedDoctor.city}</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {' '}
                <p>Consultation Time: </p>
                <p>{selectedDoctor.time}</p>
              </div>
            </div>
          </div>
          <div
            className="propbtndoc"
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '560px',
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              {Object.keys(selectedOptions).map((option, index) => {
                if (selectedOptions[option]) {
                  return (
                    <button
                      key={index}
                      style={{
                        borderRadius: '120px',
                        width: '210px',
                        height: '50px',
                      }}
                    >
                      {option.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  )
                }
                return null
              })}

              <button
                className="citbtn"
                style={{
                  borderRadius: '120px',
                  width: '210px',
                  height: '50px',
                }}
              >
                {selectedDoctor.city}
              </button>
              <button
                className="citbtn"
                style={{
                  borderRadius: '120px',
                  width: '210px',
                  height: '50px',
                }}
              >
                {selectedDoctor.health}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display doctor biography and consultation fee */}
      <div
        style={{
          display: 'flex',
          padding: '10px 30px',
          // marginLeft: '180px',
          // gap: '500px',
          justifyContent: 'space-between',
        }}
      >
        {selectedDoctorBio && (
          <>
            <div
              className="bpdoc"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '685px',
                height: '190px',
                marginBottom: '200px',
                padding: '20px 0px',
                gap: '30px',
              }}
            >
              <p>Biography</p>
              <p style={{ lineHeight: '40px' }}>{selectedDoctorBio.bio}</p>
              <p>Reviews</p>
              <p>
                {selectedDoctorBio.rating} Ratings |{' '}
                {selectedDoctorBio.revCount} Reviews
              </p>
            </div>
            <div
              className="fedoc"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <p>Consultation Fee</p>
              <p>Rs {selectedDoctor.fee}</p>
            </div>
          </>
        )}
      </div>
      </div>
      <PreferenceAppointment />
    </div>
  )
}

export default AppointmentDetails
