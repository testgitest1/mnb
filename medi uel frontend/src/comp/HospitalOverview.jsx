// import React, { useContext } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import '../sty/home.css'
// import { useHospitalContext } from './HospitalContext'

// const HospitalOverview = () => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const { selectedFilters,filters, Hospital, city, Hospdata, setSelectedDoctor } =
//     useHospitalContext()

//   if (!Hospdata) {
//     return <p>Loading...</p>
//   }

//   const safeFilters = filters || { city: '', hospital: '', selectedOptions: {} }

//   const {
//     hospital = safeFilters.hospital,
//     selectedOptions = safeFilters.selectedOptions,
//   } = location.state || {}

//   const handlefilterbutton = () => {
//     navigate('/hospfilter')
//   }

//   const handleDetail = (doctor) => {
//     setSelectedDoctor(doctor)
//     navigate('/HospitalDetails')
//   }

//   // Updated filtering logic
//   // const filteredDocs =
//   //   Hospdata?.filter(
//   //     (doc) =>
//   //       // If both city and hospital are selected, match both
//   //       city && hospital
//   //         ? doc.city.toLowerCase() === city.toLowerCase() &&
//   //           doc.health.toLowerCase().includes(hospital.toLowerCase())
//   //         : // If only city is selected, match city
//   //         city
//   //         ? doc.city.toLowerCase() === city.toLowerCase()
//   //         : // If only hospital is selected, match hospital
//   //         hospital
//   //         ? doc.health.toLowerCase().includes(hospital.toLowerCase())
//   //         : true // If neither is selected, show all docs
//   //   ) || []




//     const filteredDocs = Hospdata.filter(doc => {
//       const isCityMatch = city.trim() ? doc.city.toLowerCase() === city.toLowerCase() : true;
//       const isHospitalMatch = hospital.trim() ? doc.health.toLowerCase().includes(hospital.toLowerCase()) : true;
    
//       // Safe access for rating
//       const isRatingMatch = selectedFilters.rating?.length > 0 ? 
//           selectedFilters.rating.includes(doc.rating) : true;
    
//       // Ensure doc has a gender field and that it's defined in filters
//       const isGenderMatch = selectedFilters.gender?.length > 0 ?
//           doc.gender && selectedFilters.gender.includes(doc.gender) : true;
    
//       // Check timing against available options
//       // const isTimingMatch = selectedFilters.timing?.length > 0 ?
//       //     selectedFilters.timing.includes(doc.time) : true;
  
  
//           const isTimingMatch = selectedFilters.timing?.length > 0 ?
//            selectedFilters.timing.some((time) => {
//             if (time === '24 / 7') {
//               return doc.timing === 24
//             }
//             return doc.timing <= 24
//           })
//         : true
    
//       // Ensure doc.languages is defined if filtering by language
//       const isLanguageMatch = selectedFilters.language ? 
//           doc.languages && doc.languages.includes(selectedFilters.language) : true;
    
//       return isCityMatch && isHospitalMatch && isRatingMatch && isGenderMatch && isTimingMatch && isLanguageMatch;
//     });
  

//   return (
//     <div className="hohd" style={{ height: 'auto' }}>
//       <div style={{ padding: '10px 30px' }}>
//         <div style={{ display: 'flex', padding: '30px 0px' }}>
//           <p>Hospital Overview</p>
//         </div>

//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-evenly',
//             gap: '600px',
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-evenly',
//               width: '560px',
//             }}
//           >
//             {/* Rendering selected filters as buttons */}
//             {Object.keys(selectedOptions).map((option, index) => {
//               if (selectedOptions[option]) {
//                 return (
//                   <button
//                     key={index}
//                     style={{ borderRadius: '120px', width: '210px' }}
//                   >
//                     {option.replace(/([A-Z])/g, ' $1').trim()}
//                   </button>
//                 )
//               }
//               return null
//             })}

//             {/* Rendering City and Hospital buttons */}
//             {(city || hospital || Hospital) && (
//               <div style={{ display: 'flex', gap: '10px' }}>
//                 {city && (
//                   <button
//                     style={{
//                       borderRadius: '120px',
//                       width: '250px',
//                       backgroundColor: 'rgb(17,60,73)',
//                       color: 'white',
//                       padding: '10px',
//                     }}
//                   >
//                     {city}
//                   </button>
//                 )}

//                 {hospital ? (
//                   <button
//                     style={{
//                       borderRadius: '120px',
//                       width: '250px',
//                       backgroundColor: 'rgb(17,60,73)',
//                       color: 'white',
//                       padding: '10px',
//                     }}
//                   >
//                     {hospital}
//                   </button>
//                 ) : (
//                   // Fallback to "Hospital" if hospital is not defined
//                   <button
//                     style={{
//                       borderRadius: '120px',
//                       width: '250px',
//                       backgroundColor: 'rgb(17,60,73)',
//                       color: 'white',
//                       padding: '10px',
//                     }}
//                   >
//                     {Hospital}
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>

//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               textAlign: 'center',
//               gap: '10px',
//               cursor: 'pointer',
//             }}
//             onClick={handlefilterbutton}
//           >
//             <label>Filters</label>
//             <img style={{ width: '33px', height: '33px' }} src={'Vector.png'} />
//           </div>
//         </div>

//         <div className="a">
//           {filteredDocs.length === 0 ? (
//             <p>No doctors found matching your criteria</p>
//           ) : (
//             filteredDocs.map((item, index) => (
//               <div className="cr" key={index}>
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-evenly',
//                     gap: '30px',
//                   }}
//                 >
//                   <img
//                     src={item.img}
//                     style={{
//                       width: '100px',
//                       height: '100px',
//                       borderRadius: '50%',
//                       objectFit: 'cover',
//                     }}
//                   />
//                   <div
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '30px',
//                     }}
//                   >
//                     <p>{item.hospital}</p>
//                     <p>{item.city}</p>
//                     <p>
//                       <span
//                         style={{ fontFamily: 'Open Sans', fontWeight: '800' }}
//                       >
//                         Consultation Time:
//                       </span>{' '}
//                       {item.time}
//                     </p>
//                   </div>
//                   <button
//                     className="vpbtnn"
//                     onClick={() => handleDetail(item)}
//                     style={{
//                       border: 'none',
//                       cursor: 'pointer',
//                       width: '190px',
//                       height: '50px',
//                       color: 'white',
//                     }}
//                   >
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HospitalOverview




import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../sty/home.css'
import { useHospitalContext } from './HospitalContext'

const HospitalOverview = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { selectedFilters, filters, Hospital, city, Hospdata, setSelectedDoctor, setSelectedFilters, setCity, setHospital } =
    useHospitalContext()

  if (!Hospdata) {
    return <p>Loading...</p>
  }

  const safeFilters = filters || { city: '', hospital: '', selectedOptions: {} }

  const {
    hospital = safeFilters.hospital,
    selectedOptions = safeFilters.selectedOptions,
  } = location.state || {}

  const handlefilterbutton = () => {
    // Reset the filters to their default values
    setSelectedFilters({}); // Assuming this resets the selected filters
    setCity(''); // Clear city filter
    setHospital(''); // Clear hospital filter

    // Navigate to the filter page
    navigate('/hospfilter');
  }

  const handleDetail = (doctor) => {
    setSelectedDoctor(doctor)
    navigate('/HospitalDetails')
  }

  // Updated filtering logic
  const filteredDocs = Hospdata.filter(doc => {
    const isCityMatch = city.trim() ? doc.city.toLowerCase() === city.toLowerCase() : true;
    const isHospitalMatch = hospital.trim() ? doc.health.toLowerCase().includes(hospital.toLowerCase()) : true;

    const isRatingMatch = selectedFilters.rating?.length > 0 ? 
        selectedFilters.rating.includes(doc.rating) : true;

    const isGenderMatch = selectedFilters.gender?.length > 0 ? 
        doc.gender && selectedFilters.gender.includes(doc.gender) : true;

    const isTimingMatch = selectedFilters.timing?.length > 0 ?
        selectedFilters.timing.some((time) => {
          if (time === '24 / 7') {
            return doc.timing === 24
          }
          return doc.timing <= 24
        }) : true;

    const isLanguageMatch = selectedFilters.language ? 
        doc.languages && doc.languages.includes(selectedFilters.language) : true;

    return isCityMatch && isHospitalMatch && isRatingMatch && isGenderMatch && isTimingMatch && isLanguageMatch;
  });

  return (
    <div className="hohd" style={{ height: 'auto' }}>
      <div style={{ padding: '10px 30px' }}>
        <div style={{ display: 'flex', padding: '30px 0px' }}>
          <p>Hospital Overview</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '600px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '560px',
            }}
          >
            {/* Rendering selected filters as buttons */}
            {Object.keys(selectedOptions).map((option, index) => {
              if (selectedOptions[option]) {
                return (
                  <button
                    key={index}
                    style={{ borderRadius: '120px', width: '210px' }}
                  >
                    {option.replace(/([A-Z])/g, ' $1').trim()}
                  </button>
                )
              }
              return null
            })}

            {/* Rendering City and Hospital buttons */}
            {(city || hospital || Hospital) && (
              <div style={{ display: 'flex', gap: '10px' }}>
                {city && (
                  <button
                    style={{
                      borderRadius: '120px',
                      width: '250px',
                      backgroundColor: 'rgb(17,60,73)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    {city}
                  </button>
                )}

                {hospital ? (
                  <button
                    style={{
                      borderRadius: '120px',
                      width: '250px',
                      backgroundColor: 'rgb(17,60,73)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    {hospital}
                  </button>
                ) : (
                  // Fallback to "Hospital" if hospital is not defined
                  <button
                    style={{
                      borderRadius: '120px',
                      width: '250px',
                      backgroundColor: 'rgb(17,60,73)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    {Hospital}
                  </button>
                )}
              </div>
            )}
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
            <label>Filters</label>
            <img style={{ width: '33px', height: '33px' }} src={'Vector.png'} />
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
                    src={item.img}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '30px',
                    }}
                  >
                    <p>{item.hospital}</p>
                    <p>{item.city}</p>
                    <p>
                      <span
                        style={{ fontFamily: 'Open Sans', fontWeight: '800' }}
                      >
                        Consultation Time:
                      </span>{' '}{item.time}
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

export default HospitalOverview;















































































































































































































































// import React, { useContext } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import '../sty/home.css'
// import { useHospitalContext } from './HospitalContext'
// const HospitalOverview = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { selectedFilters, Hospdata, setSelectedDoctor } = useHospitalContext();
//   // const { city = '', hospital = '' } = location.state || {};

//   if (!Hospdata) {
//       return <p>Loading...</p>;
//   }

//   const {
//       city = '',
//       hospital = '',
//   } = location.state || {};

//   const handlefilterbutton = () => {
//       navigate('/hospfilter');
//   };

//   const handleDetail = (doctor) => {
//       setSelectedDoctor(doctor);
//       navigate('/HospitalDetails');
//   };

//   // Filter Logic
//   // const filteredDocs = Hospdata.filter(doc => {
//   //     const isCityMatch = city ? doc.city.toLowerCase() === city.toLowerCase() : true;
//   //     const isHospitalMatch = hospital ? doc.health.toLowerCase().includes(hospital.toLowerCase()) : true;

//   //     const isRatingMatch = selectedFilters?.rating?.length > 0 ? 
//   //         selectedFilters.rating.includes(doc.rating) : true;

//   //     const isGenderMatch = selectedFilters?.gender?.length > 0 ? 
//   //         selectedFilters.gender.includes(doc.gender) : true;

//   //     const isTimingMatch = selectedFilters?.timing?.length > 0 ?
//   //         selectedFilters.timing.some(timing => doc.time.includes(timing)) : true;

//   //     const isLanguageMatch = selectedFilters?.language ? 
//   //         doc.languages.includes(selectedFilters.language) : true;

//   //     return isCityMatch && isHospitalMatch && isRatingMatch && isGenderMatch && isTimingMatch && isLanguageMatch;
//   // });


// // a








//   const filteredDocs = Hospdata.filter(doc => {
//     const isCityMatch = city.trim() ? doc.city.toLowerCase() === city.toLowerCase() : true;
//     const isHospitalMatch = hospital.trim() ? doc.health.toLowerCase().includes(hospital.toLowerCase()) : true;
  
//     // Safe access for rating
//     const isRatingMatch = selectedFilters.rating?.length > 0 ? 
//         selectedFilters.rating.includes(doc.rating) : true;
  
//     // Ensure doc has a gender field and that it's defined in filters
//     const isGenderMatch = selectedFilters.gender?.length > 0 ?
//         doc.gender && selectedFilters.gender.includes(doc.gender) : true;
  
//     // Check timing against available options
//     // const isTimingMatch = selectedFilters.timing?.length > 0 ?
//     //     selectedFilters.timing.includes(doc.time) : true;


//         const isTimingMatch = selectedFilters.timing?.length > 0 ?
//          selectedFilters.timing.some((time) => {
//           if (time === '24 / 7') {
//             return doc.timing === 24
//           }
//           return doc.timing <= 24
//         })
//       : true
  
//     // Ensure doc.languages is defined if filtering by language
//     const isLanguageMatch = selectedFilters.language ? 
//         doc.languages && doc.languages.includes(selectedFilters.language) : true;
  
//     return isCityMatch && isHospitalMatch && isRatingMatch && isGenderMatch && isTimingMatch && isLanguageMatch;
//   });



















//   return (
//       <div className="hohd" style={{ height: 'auto' }}>
//           <div style={{ padding: '10px 30px' }}>
//               <div style={{ display: 'flex', padding: '30px 0px' }}>
//                   <p>Hospital Overview</p>
//               </div>

//               <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '600px' }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '560px' }}>
//                       {/* Rendering selected filters as buttons */}
//                       {Object.keys(selectedFilters?.selectedOptions || {}).map((option, index) => (
//                           selectedFilters?.selectedOptions[option] && (
//                               <button
//                                   key={index}
//                                   style={{ borderRadius: '120px', width: '210px' }}
//                               >
//                                   {option.replace(/([A-Z])/g, ' $1').trim()}
//                               </button>
//                           )
//                       ))}

//                       {(city || hospital) && (
//                           <div style={{ display: 'flex', gap: '10px' }}>
//                               {city && (
//                                   <button style={{ borderRadius: '120px', width: '250px', backgroundColor: 'rgb(17,60,73)', color: 'white', padding: '10px' }}>
//                                       {city}
//                                   </button>
//                               )}

//                               {hospital && (
//                                   <button style={{ borderRadius: '120px', width: '250px', backgroundColor: 'rgb(17,60,73)', color: 'white', padding: '10px' }}>
//                                       {hospital}
//                                   </button>
//                               )}
//                           </div>
//                       )}
//                   </div>

//                   <div
//                       style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           textAlign: 'center',
//                           gap: '10px',
//                           cursor: 'pointer',
//                       }}
//                       onClick={handlefilterbutton}
//                   >
//                       <label>Filters</label>
//                       <img style={{ width: '33px', height: '33px' }} src={'Vector.png'} />
//                   </div>
//               </div>

//               <div className="a">
//                   {filteredDocs.length === 0 ? (
//                       <p>No doctors found matching your criteria</p>
//                   ) : (
//                       filteredDocs.map((item, index) => (
//                           <div className="cr" key={index}>
//                               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '30px' }}>
//                                   <img
//                                       src={item.img}
//                                       style={{
//                                           width: '100px',
//                                           height: '100px',
//                                           borderRadius: '50%',
//                                           objectFit: 'cover',
//                                       }}
//                                   />
//                                   <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
//                                       <p>{item.hospital}</p>
//                                       <p>{item.city}</p>
//                                       <p>
//                                           <span style={{ fontFamily: 'Open Sans', fontWeight: '800' }}>
//                                               Consultation Time:
//                                           </span>{' '}
//                                           {item.time}
//                                       </p>
//                                   </div>
//                                   <button
//                                       className="vpbtnn"
//                                       onClick={() => handleDetail(item)}
//                                       style={{
//                                           border: 'none',
//                                           cursor: 'pointer',
//                                           width: '190px',
//                                           height: '50px',
//                                           color: 'white',
//                                       }}
//                                   >
//                                       View Profile
//                                   </button>
//                               </div>
//                           </div>
//                       ))
//                   )}
//               </div>
//           </div>
//       </div>
//   );
// };

// export default HospitalOverview;
































