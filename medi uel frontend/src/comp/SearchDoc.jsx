import React, { useState, useEffect, useRef } from 'react'
import '../sty/styles.css'
import { useNavigate } from 'react-router-dom'
import { useHospitalContext } from './HospitalContext'

const SearchDoc = () => {
  const { Hospdata } = useHospitalContext()

  const [city, setCity] = useState('')
  const [service, setService] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [activeField, setActiveField] = useState('')
  const [selectedOptions, setSelectedOptions] = useState({
    videoVisit: false,
    clinicVisit: false,
    phoneCall: false,
    homeVisit: false,
  })

  const [error, setError] = useState('')

  const cities = Array.from(new Set(Hospdata.map((item) => item.city)))
  const services = Array.from(new Set(Hospdata.map((item) => item.health)))

  const navigate = useNavigate()

  const cityRef = useRef(null)
  const serviceRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cityRef.current &&
        !cityRef.current.contains(e.target) &&
        serviceRef.current &&
        !serviceRef.current.contains(e.target)
      ) {
        setActiveField('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCityChange = (e) => {
    setCity(e.target.value)
    setInputValue(e.target.value)
  }

  const handleServiceChange = (e) => {
    setService(e.target.value)
    setInputValue(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: checked,
    }))

    const anySelected =
      Object.values(selectedOptions).some((value) => value === true) || checked
    if (anySelected) {
      setError('')
    }
  }

  const handleItemSelect = (item, field) => {
    if (field === 'city') {
      setCity(item)
    } else if (field === 'service') {
      setService(item)
    }
    setActiveField('')
    setInputValue('')
  }

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(inputValue.toLowerCase())
  )
  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(inputValue.toLowerCase())
  )

  const handleFindDoctors = () => {
    const anySelected = Object.values(selectedOptions).some(
      (value) => value === true
    )

    if (!anySelected) {
      setError('You must select at least one appointment option.')
      return
    }

    setError('')
    navigate('/docs-overview', {
      state: { city, service, selectedOptions },
    })
  }

  return (
    <div
      className="sdochd"
      style={{
        backgroundColor: 'rgb(179, 218, 217)',
        width: '100%',
        height: '160vh',
        paddingTop: '10px',
      }}
    >
      <div className="content">
        <div style={{ padding: '50px 55px' }}>
          <h1 className="title">Search Doctors</h1>
          <p
            className="title"
            style={{ fontSize: '24px', padding: '20px 0px' }}
          >
            Request an appointment options (one or more)
          </p>
          <div className="options">
            <div className="appop">
              <input
                className="button"
                type="checkbox"
                name="videoVisit"
                checked={selectedOptions.videoVisit}
                onChange={handleCheckboxChange}
              />
              <label> Video visit</label>
            </div>
            <div className="appop">
              <input
                className="button"
                type="checkbox"
                name="clinicVisit"
                checked={selectedOptions.clinicVisit}
                onChange={handleCheckboxChange}
              />
              <label> Clinic visit</label>
            </div>
            <div className="appop">
              <input
                className="button"
                type="checkbox"
                name="phoneCall"
                checked={selectedOptions.phoneCall}
                onChange={handleCheckboxChange}
              />
              <label> Phone Call</label>
            </div>
            <div className="appop">
              <input
                className="button"
                type="checkbox"
                name="homeVisit"
                checked={selectedOptions.homeVisit}
                onChange={handleCheckboxChange}
              />
              <label> Home visit</label>
            </div>
          </div>

          {error && (
            <p
              style={{
                color: 'red',
                marginTop: '-40px',
                paddingBottom: '30px',
              }}
            >
              {error}
            </p>
          )}

          <div className="form-group" ref={cityRef}>
            <label>What city are you in?</label>
            <input
              type="text"
              placeholder="Choose Location"
              className="input"
              value={city}
              onChange={handleCityChange}
              onFocus={() => setActiveField('city')}
            />
            {activeField === 'city' && (
              <div className="menu-content" style={{ padding: '5px 50px' }}>
                <ul>
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemSelect(city, 'city')}
                      >
                        {city}
                      </li>
                    ))
                  ) : (
                    <li className="empty-message">No cities found</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="form-group" ref={serviceRef}>
            <label>Which type of healthcare service do you need?</label>
            <input
              type="text"
              placeholder="Service"
              className="input"
              value={service}
              onChange={handleServiceChange}
              onFocus={() => setActiveField('service')}
            />
            {activeField === 'service' && (
              <div className="menu-content" style={{ padding: '20px 50px' }}>
                <ul>
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemSelect(service, 'service')}
                      >
                        {service}
                      </li>
                    ))
                  ) : (
                    <li className="empty-message">No services found</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <button className="find-button" onClick={handleFindDoctors}>
            Find Doctors
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchDoc
