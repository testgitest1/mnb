// import React, { useState, useEffect } from "react";
// import { DoctorsCard } from "../../import-export/ImportExport";
// import axios from "axios";

// function AllDoctorsPage() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/user/alldoctors"
//         );
//         console.log(response.data.data);
//         setDoctors(response.data.data);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   return (
//     <div className="w-full">
//       <section className="my-20 h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center justify-between px-3 md:px-6 lg:px-6 py-2">
//         {/* Search doctors component */}
//         {/* code here */}

//         {/* Doctors components */}
//         {doctors.map((doctor) => (
//           <DoctorsCard key={doctor._id} doctor={doctor} />
//         ))}
//       </section>
//     </div>
//   );
// }

// export default AllDoctorsPage;
import React from "react";
// import "../sty/home.css";
import '../all_doctors_page/home.css'
import { useNavigate } from "react-router-dom";

const AllDoctorsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ConsultNow");
  };
  const handleHospitalClick=()=>{
    navigate("/SearchHospital")
  }
  return (
    <div className="chead" style={{backgroundColor:'rgb(179, 218, 217)', paddingTop:'50px'}}>
      <div className="c">
        <div className="cont">
          <p style={{ cursor: "pointer" }} onClick={handleClick}>
            Talk to Doctor
          </p>
        </div>
        <div className="cont">
        <p style={{ cursor: "pointer" }} onClick={handleHospitalClick}>
        Search Near by Hospital</p>
        </div>
        {/* <div className="cont">
          <p>Buy Medicines and Essentials</p>
        </div> */}
      </div>
      <div className="cb" style={{width:'100%'}}>
        <p>Always caring about your health</p>
        {/* <p
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div className="con"></div>
          <div className="con" style={{marginBottom:'50px'}}></div>
        </p> */}
      </div>
    </div>
  );
};

export default AllDoctorsPage;
