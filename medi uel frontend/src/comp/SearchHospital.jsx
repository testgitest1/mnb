import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHospitalContext } from './HospitalContext';
import '../sty/appointmentdetails.css';

const SearchHospital = () => {
  const [activeField, setActiveField] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const cityRef = useRef(null);
  const hospitalRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const { Hospdata, city, setCity, Hospital, setHospital } = useHospitalContext();

  // Filter cities and hospitals based on the input
  const filteredCities = Hospdata.filter((hospital) => 
    hospital.city.toLowerCase().includes(city.toLowerCase())
  ).map((hospital) => hospital.city);
  
  const filteredHospitals = Hospdata.filter((hospital) => 
    hospital.hospital.toLowerCase().includes(Hospital.toLowerCase())
  );

  // Handle input change
  const handleInputChange = (e, field) => {
    if (field === 'city') {
      setCity(e.target.value);
    }
    if (field === 'hospital') {
      setHospital(e.target.value);
    }
  };

  // Handle item selection
  const handleItemSelect = (item, field) => {
    if (field === 'city') {
      setCity(item);
    }
    if (field === 'hospital') {
      setHospital(item.hospital);
    }
    setActiveField('');
  };

  // Validation: Check if the selected city and hospital are valid
  useEffect(() => {
    const isCityValid = city && filteredCities.length > 0;
    const isHospitalValid = Hospital && filteredHospitals.length > 0;
    setIsValidInput(isCityValid && isHospitalValid);
  }, [city, Hospital]);

  // Handle clicking outside to close the dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cityRef.current && !cityRef.current.contains(e.target) &&
        hospitalRef.current && !hospitalRef.current.contains(e.target) &&
        menuRef.current && !menuRef.current.contains(e.target)
      ) {
        setActiveField('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search click
  // const handleSearchClick = () => {
  //   if (isValidInput) {
  //     navigate('/hospitaloverview');
  //   } else {
  //     setShowWarning(true);
  //     setTimeout(() => setShowWarning(false), 3000);
  //   }
  // };

const handleSearchClick =()=>{
        navigate('/hospitaloverview');
        state: { city, hospital }
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          rating: ratingFilter,
          gender: genderFilter,
          timing: timingFilter,
          language: languageFilter,
        }));
}

  return (
    <div className="shhd">
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '200px' }}>
        <p style={{ textAlign: 'center', fontSize: '36px' }}>Search Nearby Hospital</p>

        <div style={{ display: 'flex', margin: 'auto' }}>
          {/* City Input */}
          <div ref={cityRef} style={{ marginRight: '-10px' }}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Choose Location"
                className="input"
                value={city}
                onChange={(e) => handleInputChange(e, 'city')}
                onFocus={() => setActiveField('city')}
              />
              {activeField === 'city' && (
                <div className="menu-content" ref={menuRef} style={{ marginTop: '80px', padding: '20px 50px' }}>
                  <ul>
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city, index) => (
                        <li key={index} onClick={() => handleItemSelect(city, 'city')}>
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
          </div>

          {/* Hospital Input */}
          <div ref={hospitalRef} style={{ marginRight: '-10px' }}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Choose Hospital"
                className="input"
                value={Hospital}
                onChange={(e) => handleInputChange(e, 'hospital')}
                onFocus={() => setActiveField('hospital')}
              />
              {activeField === 'hospital' && (
                <div className="menu-content" ref={menuRef} style={{ marginTop: '80px', padding: '20px 50px' }}>
                  <ul>
                    {filteredHospitals.length > 0 ? (
                      filteredHospitals.map((hospital, index) => (
                        <li key={index} onClick={() => handleItemSelect(hospital, 'hospital')}>
                          {hospital.hospital}
                        </li>
                      ))
                    ) : (
                      <li className="empty-message">No hospitals found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <button className="btnsss" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        {/* Warning Message */}
        {/* {showWarning && !isValidInput && (
          <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
            <p>Invalid input. Please make sure both fields are selected correctly.</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SearchHospital;
