import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../sty/home.css'
import { AppContext } from './AppContext'

const DocsOverview = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { filters, selectedFilters, setSelectedDoctor, Docdata } =
    useContext(AppContext)

  const handlefilterbutton = () => {
    navigate('/filter')
  }

  const handleDetail = (doctor) => {
    setSelectedDoctor(doctor)
    navigate('/appointments')
  }

  const {
    city = filters.city,
    service = filters.service,
    selectedOptions = {},
  } = location.state || {}

  const filteredDocs = Docdata.filter((doc) => {
    const matchesCity = !city || doc.city.toLowerCase() === city.toLowerCase()
    const matchesService =
      !service || doc.health.toLowerCase().includes(service.toLowerCase())
    const matchesRating = selectedFilters.rating.length
      ? selectedFilters.rating.includes(doc.rating)
      : true
    const matchesGender = selectedFilters.gender.length
      ? selectedFilters.gender.includes(doc.gender)
      : true
    const matchesTiming = selectedFilters.timing.length
      ? selectedFilters.timing.some((time) => {
          if (time === '24 / 7') {
            return doc.timing === 24
          }
          return doc.timing <= 24
        })
      : true
    const matchesLanguage =
      !selectedFilters.language || doc.language === selectedFilters.language

    return (
      matchesCity &&
      matchesService &&
      matchesRating &&
      matchesGender &&
      matchesTiming &&
      matchesLanguage
    )
  })

  const simg =
    'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'

  return (
    <div className="docsHead" style={{height:'auto'}}>
      <div style={{ padding: '10px 30px'}}>
        <div className="dview" style={{ display: 'flex', padding: '20px 0px' }}>
          <p>Doctors</p>
          <p>Overview</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            className="dbuttonhd"
            style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}
          >
            {Object.keys(selectedFilters).map((key) => {
              if (selectedFilters[key]?.length > 0) {
                return (
                  <button
                    key={key}
                    style={{ borderRadius: '120px', width: '210px' }}
                  >
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </button>
                )
              }
              return null
            })}
            {city && service && (
              <div>
                <button style={{ borderRadius: '120px', width: '210px' }}>
                  {city}
                </button>
                <button style={{ borderRadius: '120px', width: '210px' }}>
                  {service}
                </button>
              </div>
            )}
            <div>
              {Object.keys(selectedOptions).map(
                (key) =>
                  selectedOptions[key] && (
                    <button
                      key={key}
                      style={{ borderRadius: '120px', width: '210px' }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  )
              )}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
            onClick={handlefilterbutton}
          >
            <label style={{ fontSize: '24px' }}>Filters</label>
            {/* <img style={{ width: '33px', height: '33px' }} src={'Vector.png'} /> */}
          </div>
        </div>
        <div className="a">
          {filteredDocs.length === 0 ? (
            <p>No doctors found matching your criteria</p>
          ) : (
            filteredDocs.map((item, index) => (
              <div className="cr" key={index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    gap: '30px',
                  }}
                >
                  <img
                  
                    src={item.imag}
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
objectFit:'cover'
                    }}
                  />
                  <div
                    className="dvp"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '30px',
                    }}
                  >
                    <p>Dr. {item.docname}</p>
                    <p>{item.health}</p>
                    <p>
                      <span
                        style={{ fontFamily: 'Open Sans', fontWeight: '800' }}
                      >
                        Consultation Time:
                      </span>{' '}
                      {item.time}
                    </p>
                  </div>
                  <button
                    className="vpbtnn"
                    onClick={() => handleDetail(item)}
                    style={{
                      border: 'none',
                      cursor: 'pointer',
                      width: '190px',
                      height: '50px',
                      color: 'white',
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default DocsOverview
