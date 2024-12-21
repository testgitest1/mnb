// import React, { useContext, useState } from 'react'
// import '../sty/filter.css'
// import { useNavigate } from 'react-router-dom'
// import '../sty/styles.css'
// import { AppContext } from './AppContext'
// import { useHospitalContext } from './HospitalContext'

// const HospFilter = () => {
//   const { selectedFilters, setSelectedFilters } = useHospitalContext()

//   const [ratingFilter, setRatingFilter] = useState(selectedFilters.rating || [])
//   const [genderFilter, setGenderFilter] = useState(selectedFilters.gender || [])
//   const [languageFilter, setLanguageFilter] = useState(
//     selectedFilters.language || ''
//   )
//   const [timingFilter, setTimingFilter] = useState(selectedFilters.timing || [])

//   const navigate = useNavigate()

//   const handleFilterChange = (filterType, value) => {
//     const newFilters = { ...selectedFilters }
//     if (filterType === 'rating') {
//       if (newFilters.rating.includes(value)) {
//         newFilters.rating = newFilters.rating.filter(
//           (rating) => rating !== value
//         )
//       } else {
//         newFilters.rating.push(value)
//       }
//     } else if (filterType === 'gender') {
//       if (newFilters.gender.includes(value)) {
//         newFilters.gender = newFilters.gender.filter(
//           (gender) => gender !== value
//         )
//       } else {
//         newFilters.gender.push(value)
//       }
//     } else if (filterType === 'timing') {
//       if (newFilters.timing.includes(value)) {
//         newFilters.timing = newFilters.timing.filter(
//           (timing) => timing == value
//         )
//       } else {
//         newFilters.timing.push(value)
//       }
//     } else if (filterType === 'language') {
//       newFilters.language = value
//     }

//     setSelectedFilters(newFilters)
//   }

//   const handleConfirmButton = () => {
//     // Save the selected filters in context
//     setSelectedFilters(prevFilters => ({
//       ...prevFilters,
//       rating: ratingFilter,
//       gender: genderFilter,
//       timing: timingFilter,
//       language: languageFilter,
//     }));
//     navigate('/hospitaloverview');
//   }

//   // const handleConfirmButton = () => {
//   //   navigate('/hospitaloverview')
//   // }

//   return (
//     <div className="filhd">
//       <div className="filcont">
//         <div className="lftfil" style={{ width: '100%' }}>
//           <p className="pout">Filter</p>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               paddingTop: '20px',
//               gap: '20px',
//             }}
//           >
//             <p className="pout">Hospital Quick Filter</p>
//             {[5, 4, 3, 2].map((rating) => (
//               <div className="qf" style={{ display: 'flex' }} key={rating}>
//                 <input
//                   type="checkbox"
//                   checked={ratingFilter.includes(rating)}
//                   onChange={() => {
//                     setRatingFilter((prev) => {
//                       const newRating = prev.includes(rating)
//                         ? prev.filter((r) => r !== rating)
//                         : [...prev, rating]
//                       handleFilterChange('rating', rating)
//                       return newRating
//                     })
//                   }}
//                 />
//                 <p>{rating} rating</p>
//               </div>
//             ))}
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               paddingTop: '20px',
//               gap: '20px',
//             }}
//           >
//             <p className="pout">Gender Based Hospital</p>
//             {['Female Hospital', 'Male Hospital'].map((gender) => (
//               <div className="qf" style={{ display: 'flex' }} key={gender}>
//                 <input
//                   type="checkbox"
//                   checked={genderFilter.includes(gender)}
//                   onChange={() => {
//                     setGenderFilter((prev) => {
//                       const newGender = prev.includes(gender)
//                         ? prev.filter((g) => g !== gender)
//                         : [...prev, gender]
//                       handleFilterChange('gender', gender)
//                       return newGender
//                     })
//                   }}
//                 />
//                 <p>{gender}</p>
//               </div>
//             ))}
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               padding: '20px 0px',
//               gap: '20px',
//             }}
//           >
//             <p className="pout">Hospital Timing</p>
//             {['24 / 7', 'Time Base'].map((timing) => (
//               <div className="qf" style={{ display: 'flex' }} key={timing}>
//                 <input
//                   type="checkbox"
//                   checked={timingFilter.includes(timing)}
//                   onChange={() => {
//                     setTimingFilter((prev) => {
//                       const newTiming = prev.includes(timing)
//                         ? prev.filter((t) => t !== timing)
//                         : [...prev, timing]
//                       handleFilterChange('timing', timing)
//                       return newTiming
//                     })
//                   }}
//                 />
//                 <p>{timing}</p>
//               </div>
//             ))}
//           </div>
//           <p>Select Language</p>
//           <div
//             className="menu-content"
//             style={{ margin: '10px 0', padding: '20px 50px' }}
//           >
//             <ul>
//               {[
//                 'English',
//                 'Spanish',
//                 'Russian',
//                 'German',
//                 'Arabic',
//                 'Chinese',
//               ].map((language) => (
//                 <li
//                   key={language}
//                   onClick={() => {
//                     if (languageFilter === language) {
//                       setLanguageFilter('')
//                       handleFilterChange('language', '')
//                     } else {
//                       setLanguageFilter(language)
//                       handleFilterChange('language', language)
//                     }
//                   }}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {language}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div
//           style={{
//             border: '1px dashed rgba(182, 182, 182, 1)',
//             height: 'auto',
//           }}
//         ></div>

//         <div className="rgtfil" style={{ width: '100%' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <p></p>
//             <button
//               onClick={handleConfirmButton}
//               className="pout"
//               style={{
//                 border: 'none',
//                 backgroundColor: 'rgb(179,218,217)',
//                 color: 'blue',
//                 fontSize: '20px',
//               }}
//             >
//               Confirm
//             </button>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <label>Hospital Quick Filter</label>
//             <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
//               {ratingFilter.length > 0 && (
//                 <button>{ratingFilter.join(', ')} Ratings</button>
//               )}
//             </div>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <label>Gender Based Hospital</label>
//             <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
//               {genderFilter.length > 0 && (
//                 <button>{genderFilter.join(', ')}</button>
//               )}
//             </div>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <label>Language</label>
//             <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
//               {languageFilter && <button>{languageFilter}</button>}
//             </div>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <label>Hospital Timing</label>
//             <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
//               {timingFilter.length > 0 && (
//                 <button>{timingFilter.join(', ')}</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HospFilter



import React, { useContext, useState } from 'react';
import '../sty/filter.css';
import { useNavigate } from 'react-router-dom';
import '../sty/styles.css';
import { useHospitalContext } from './HospitalContext';

const HospFilter = () => {
  const { selectedFilters, setSelectedFilters } = useHospitalContext();

  // Set initial filter values from context, or use default values if undefined
  const [ratingFilter, setRatingFilter] = useState(selectedFilters?.rating || []);
  const [genderFilter, setGenderFilter] = useState(selectedFilters?.gender || []);
  const [languageFilter, setLanguageFilter] = useState(selectedFilters?.language || '');
  const [timingFilter, setTimingFilter] = useState(selectedFilters?.timing || []);

  const navigate = useNavigate();

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...selectedFilters };

    if (filterType === 'rating') {
      if (newFilters.rating?.includes(value)) {
        newFilters.rating = newFilters.rating.filter((rating) => rating !== value);
      } else {
        newFilters.rating = [...(newFilters.rating || []), value];
      }
    } else if (filterType === 'gender') {
      if (newFilters.gender?.includes(value)) {
        newFilters.gender = newFilters.gender.filter((gender) => gender !== value);
      } else {
        newFilters.gender = [...(newFilters.gender || []), value];
      }
    } else if (filterType === 'timing') {
      if (newFilters.timing?.includes(value)) {
        newFilters.timing = newFilters.timing.filter((timing) => timing !== value);
      } else {
        newFilters.timing = [...(newFilters.timing || []), value];
      }
    } else if (filterType === 'language') {
      newFilters.language = value;
    }

    setSelectedFilters(newFilters);
  };

  // Confirm the selected filters and navigate to hospital overview
  const handleConfirmButton = () => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      rating: ratingFilter,
      gender: genderFilter,
      timing: timingFilter,
      language: languageFilter,
    }));
    navigate('/hospitaloverview');
  };

  return (
    <div className="filhd">
      <div className="filcont">
        <div className="lftfil" style={{ width: '100%' }}>
          <p className="pout">Filter</p>
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px', gap: '20px' }}>
            <p className="pout">Hospital Quick Filter</p>
            {[5, 4, 3, 2].map((rating) => (
              <div className="qf" style={{ display: 'flex' }} key={rating}>
                <input
                  type="checkbox"
                  checked={ratingFilter.includes(rating)}
                  onChange={() => {
                    setRatingFilter((prev) => {
                      const newRating = prev.includes(rating)
                        ? prev.filter((r) => r !== rating)
                        : [...prev, rating];
                      handleFilterChange('rating', rating);
                      return newRating;
                    });
                  }}
                />
                <p>{rating} rating</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px', gap: '20px' }}>
            <p className="pout">Gender Based Hospital</p>
            {['Female Hospital', 'Male Hospital'].map((gender) => (
              <div className="qf" style={{ display: 'flex' }} key={gender}>
                <input
                  type="checkbox"
                  checked={genderFilter.includes(gender)}
                  onChange={() => {
                    setGenderFilter((prev) => {
                      const newGender = prev.includes(gender)
                        ? prev.filter((g) => g !== gender)
                        : [...prev, gender];
                      handleFilterChange('gender', gender);
                      return newGender;
                    });
                  }}
                />
                <p>{gender}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 0px', gap: '20px' }}>
            <p className="pout">Hospital Timing</p>
            {['24 / 7', 'Time Base'].map((timing) => (
              <div className="qf" style={{ display: 'flex' }} key={timing}>
                <input
                  type="checkbox"
                  checked={timingFilter.includes(timing)}
                  onChange={() => {
                    setTimingFilter((prev) => {
                      const newTiming = prev.includes(timing)
                        ? prev.filter((t) => t !== timing)
                        : [...prev, timing];
                      handleFilterChange('timing', timing);
                      return newTiming;
                    });
                  }}
                />
                <p>{timing}</p>
              </div>
            ))}
          </div>
          <p>Select Language</p>
          <div className="menu-content" style={{ margin: '10px 0', padding: '20px 50px' }}>
            <ul>
              {['English', 'Spanish', 'Russian', 'German', 'Arabic', 'Chinese'].map((language) => (
                <li
                  key={language}
                  onClick={() => {
                    if (languageFilter === language) {
                      setLanguageFilter('');
                      handleFilterChange('language', '');
                    } else {
                      setLanguageFilter(language);
                      handleFilterChange('language', language);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ border: '1px dashed rgba(182, 182, 182, 1)', height: 'auto' }}></div>

        <div className="rgtfil" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p></p>
            <button
              onClick={handleConfirmButton}
              className="pout"
              style={{
                border: 'none',
                backgroundColor: 'rgb(179,218,217)',
                color: 'blue',
                fontSize: '20px',
              }}
            >
              Confirm
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Hospital Quick Filter</label>
            <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
              {ratingFilter.length > 0 && <button>{ratingFilter.join(', ')} Ratings</button>}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Gender Based Hospital</label>
            <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
              {genderFilter.length > 0 && <button>{genderFilter.join(', ')}</button>}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Language</label>
            <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
              {languageFilter && <button>{languageFilter}</button>}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Hospital Timing</label>
            <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
              {timingFilter.length > 0 && <button>{timingFilter.join(', ')}</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospFilter;
