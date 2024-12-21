import React, { useContext, useEffect } from 'react'
import { AppContext } from './AppContext'
import HospitalPreference from './HospitalPreference'
import { useHospitalContext } from './HospitalContext'

const HospitalDetails = () => {
  const {
    selectedDoctor,
    setFilter,
    Docdata,
    About,
    setSelectedDoctor,
    filters,
  } = useContext(AppContext)

  const { Hospdata } = useHospitalContext()

  const {
    city = filters.city,
    service = filters.service,
    selectedOptions = filters.selectedOptions,
  } = filters

  const selectedDoctoraboutus = About.find(
    (aboutus) => aboutus.docname === selectedDoctor?.docname
  )

  useEffect(() => {
    const savedDoctor = localStorage.getItem('selectedDoctor')
    const savedFilters = localStorage.getItem('filters')

    if (savedDoctor) {
      const doctor = JSON.parse(savedDoctor)
      setSelectedDoctor(doctor)
    }

    if (savedFilters) {
      const filters = JSON.parse(savedFilters)
      setFilter(filters)
    }
  }, [])

  return (
    <div className="adc">
       <div style={{backgroundColor:'white', border:'1px solid grey', borderRadius:'30px', paddingTop:'40px', marginBottom:'10px'}}>
       {selectedDoctor && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img
              src={selectedDoctor.img}
              alt="Doctor"
              style={{ width: '200px', height: '200px',boxShadow:"#9b9797 -10px -6px 20px", borderRadius: '50%', marginLeft:'20px' }}
              
            />
            <p style={{ marginLeft: '50px',fontWeight:'800', fontSize:'40px' }}>{selectedDoctor.hospital}</p>
          </div>
          <div
            style={{ display: 'flex', gap: '10px', flexDirection: 'column', marginRight:'90px' }}
          >
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
            <p style={{ margin: '0', fontWeight:'800' }}>Open Time: </p>
            <p style={{ margin: '0' }}>{selectedDoctoraboutus.Opentime}</p>
          </div>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          padding: '10px 30px',
          gap: '500px',
        }}
      >
        {selectedDoctoraboutus && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '65px',
                gap: '30px',
              }}
            >
              <p style={{ paddingTop: '20px', fontWeight:'800' }}>About US</p>
              <p style={{ lineHeight: '40px' }}>
                {selectedDoctoraboutus.aboutus}
              </p>
              <p style={{fontWeight:'800'}}>Specialist Doctors</p>
              <p style={{ lineHeight: '40px' }}>
                {selectedDoctoraboutus.listofDoc}
              </p>
            </div>
          </>
        )}
      </div>

       </div>
      
      <HospitalPreference />
    </div>
  )
}

export default HospitalDetails
