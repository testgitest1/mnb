import React, { createContext, useState, useContext, useEffect } from 'react'

const HospitalContext = createContext()

const HospitalProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState()
  const [selectedFilters, setSelectedFilters] = useState({
    rating: [],
    gender: [],
    timing: [],
    language: '',
    selectedOptions:{}
  })

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem('selectedFilters'))
    if (savedFilters) {
      setSelectedFilters(savedFilters)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters))
  }, [selectedFilters])

  const Hospdata = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGg6oTZQmW0741gjb3Dx3VFEwwY2hYThUHQ&s',
      id: 1,
      city: 'Brighton',
      docname: 'James',
      health: 'Cardiology',
      hospital: "St. Mary's Hospital",
      time: 'Mon-Sun, 9.00 AM - 9.00 AM',
      clinicVisit: true,
      phoneCall: false,
      timing: 24,
      gender: 'Male',
      languages: ['English'],
      rating: 5,
    },
    {
      img: 'https://www.newcastle-hospitals.nhs.uk/wp-content/uploads/2020/08/Great-North-Trauma-and-Emergency-Centre-scaled.jpg',
      id: 2,
      city: 'Newcastle',
      docname: 'Julia',
      health: 'Rheumatology',
      hospital: 'Royal Victoria Infirmary',
      time: 'Mon-Sat, 1.00 AM - 1.00 PM',
      clinicVisit: true,
      homeVisit: true,
      phoneCall: true,
      timing: 23,
      gender: 'Female',
      languages: ['Spanish'],
      rating: 4,
    },
    {
      img: 'https://i.pinimg.com/736x/7e/44/e3/7e44e36232a57ffdeec08e8ef295038c.jpg',
      id: 3,
      city: 'Sheffield',
      docname: 'Tom',
      health: 'Dermatology',
      hospital: "Sheffield Children's Hospital",
      time: 'Mon-Wed, 12:10 AM - 1:00 PM',
      clinicVisit: true,
      homeVisit: false,
      phoneCall: true,
      timing: 21,
      gender: 'Male',
      languages: ['Arabic'],
      rating: 3,
    },
    {
      img: 'https://i2-prod.dailystar.co.uk/incoming/article29823473.ece/ALTERNATES/s615b/1_STR-HN-ARCHIE-BATTERSBY01JPG.jpg',
      id: 4,
      city: 'London',
      docname: 'Emily',
      health: 'Pediatrics',
      hospital: 'Royal London Hospital',
      time: 'Mon-Fri, 8.00 AM - 5.00 PM',
      clinicVisit: true,
      homeVisit: true,
      phoneCall: true,
      timing: 40,
      gender: 'Female',
      languages: ['German'],
      rating: 4,
    },
    {
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df6d73c0-1cac-4eb5-84b7-888fbe8c781d/dbhizso-7f2f0648-0b3c-4f9d-a59d-8a3e82ff619e.jpg/v1/fill/w_1032,h_774,q_70,strp/manchester_royal_infirmary_by_rlkitterman_dbhizso-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2RmNmQ3M2MwLTFjYWMtNGViNS04NGI3LTg4OGZiZThjNzgxZFwvZGJoaXpzby03ZjJmMDY0OC0wYjNjLTRmOWQtYTU5ZC04YTNlODJmZjYxOWUuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Fg1WUDIJtK-zxhtEfaqtZFSAFj-722SNNnZVAJUpQB0',
      id: 5,
      city: 'Manchester',
      docname: 'David',
      health: 'Orthopedics',
      hospital: 'Manchester Royal Infirmary',
      time: 'Mon-Sun, 9.00 AM - 6.00 PM',
      clinicVisit: true,
      homeVisit: false,
      phoneCall: false,
      timing: 30,
      gender: 'Male',
      languages: ['Russian'],
      rating: 3,
    },
    {
      img: 'https://th.bing.com/th/id/OIP.K9YcnywqDQ1ZMBO06f7u7gAAAA?rs=1&pid=ImgDetMain',
      id: 6,
      city: 'Birmingham',
      docname: 'Sarah',
      health: 'Endocrinology',
      hospital: 'Queen Elizabeth Hospital Birmingham',
      time: 'Tue-Thu, 10.00 AM - 4.00 PM',
      clinicVisit: true,
      homeVisit: true,
      phoneCall: true,
      timing: 19,
      gender: 'Female',
      languages: ['Chinese'],
      rating: 4,
    },
    {
      img: 'https://c8.alamy.com/comp/2GA82GK/glasgow-royal-infirmary-hospital-high-street-glasgow-scotland-designed-by-robert-and-john-adam-architects-and-opened-in-1794-2GA82GK.jpg',
      id: 7,
      city: 'Glasgow',
      docname: 'Michael',
      health: 'Gastroenterology',
      hospital: 'Glasgow Royal Infirmary',
      time: 'Mon-Fri, 9.00 AM - 5.00 PM',
      clinicVisit: true,
      homeVisit: false,
      phoneCall: true,
      timing: 32,
      gender: 'Male',
      languages: ['English'],
      rating: 5,
    },
    {
      img: 'https://www.webbaviation.co.uk/aerial/_data/i/galleries/West_Yorkshire/Leeds/Leeds_General_Infirmary_eb27171-me.jpg',
      id: 8,
      city: 'Leeds',
      docname: 'Rachel',
      health: 'Neurology',
      hospital: 'Leeds General Infirmary',
      time: 'Mon-Sat, 9.00 AM - 4.00 PM',
      clinicVisit: false,
      homeVisit: true,
      phoneCall: false,
      timing: 26,
      gender: 'Female',
      languages: ['Spanish'],
      rating: 4,
    },
    {
      img: 'https://i2-prod.liverpoolecho.co.uk/incoming/article10005467.ece/ALTERNATES/s810/JS71539953.jpg',
      id: 9,
      city: 'Liverpool',
      docname: 'James',
      health: 'Psychiatry',
      hospital: "Alder Hey Children's Hospital",
      time: 'Wed-Fri, 10.00 AM - 3.00 PM',
      clinicVisit: true,
      homeVisit: false,
      phoneCall: true,
      timing: 17,
      gender: 'Male',
      languages: ['Arabic'],
      rating: 2,
    },
    {
      img: 'https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/RTGA0M/bristol-royal-infirmary-building-bristol-uk-RTGA0M.jpg',
      id: 10,
      city: 'Bristol',
      docname: 'Anna',
      health: 'Oncology',
      hospital: 'Bristol Royal Infirmary',
      time: 'Tue-Sat, 9.00 AM - 6.00 PM',
      clinicVisit: true,
      homeVisit: true,
      phoneCall: true,
      timing: 22,
      gender: 'Female',
      languages: ['German'],
      rating: 4,
    },
];

  const Biograph = [
    {
      id: 1,
      docname: 'James',
      hospital: "St. Mary's Hospital",
      bio: 'Dr. James is a skilled cardiologist with over 15 years of experience, known for his expertise in diagnosing and treating heart conditions. He is dedicated to patient-centered care and cardiovascular health.',
      rating: 4,
      revCount: 22,
    },
    {
      id: 2,
      docname: 'Julia',
      hospital: 'Royal Victoria Infirmary',
      bio: 'Dr. Julia is a dedicated rheumatologist with 10 years of experience, specializing in autoimmune diseases and joint disorders. Known for her compassionate care, she actively engages with her patients to improve their quality of life.',
      rating: 5,
      revCount: 35,
    },
    {
      id: 3,
      docname: 'Tom',
      hospital: "Sheffield Children's Hospital",
      bio: 'Dr. Tom is a compassionate dermatologist with 8 years of experience, focusing on pediatric skin conditions. His commitment to patient care and cutting-edge treatments has earned him many grateful patients.',
      rating: 4,
      revCount: 30,
    },
    {
      id: 4,
      docname: 'Emily',
      hospital: 'Royal London Hospital',
      bio: 'Dr. Emily is a pediatrician with a decade of experience in child health and development. She is passionate about preventive care and continuously engages with families to ensure comprehensive health policies.',
      rating: 5,
      revCount: 50,
    },
    {
      id: 5,
      docname: 'David',
      hospital: 'Manchester Royal Infirmary',
      bio: 'Dr. David is an orthopedic specialist with over 12 years of experience, dedicated to helping patients regain mobility and improve their quality of life through innovative surgical and rehabilitation techniques.',
      rating: 3,
      revCount: 28,
    },
    {
      id: 6,
      docname: 'Sarah',
      hospital: 'Queen Elizabeth Hospital Birmingham',
      bio: 'Dr. Sarah is an endocrinologist with more than 15 years of experience in hormonal disorders. She combines the latest research with personalized care, providing patients with a holistic approach to their health.',
      rating: 4,
      revCount: 18,
    },
    {
      id: 7,
      docname: 'Michael',
      hospital: 'Glasgow Royal Infirmary',
      bio: 'Dr. Michael specializes in gastroenterology with substantial experience in managing complex digestive disorders. He is committed to providing thorough diagnostics and effective treatment plans.',
      rating: 3,
      revCount: 25,
    },
    {
      id: 8,
      docname: 'Rachel',
      hospital: 'Leeds General Infirmary',
      bio: 'Dr. Rachel is a neurologist known for her work in neurodegenerative diseases and stroke rehabilitation. With over 10 years of experience, she advocates for patient education and empathetic care.',
      rating: 5,
      revCount: 33,
    },
    {
      id: 9,
      docname: 'James',
      hospital: "Alder Hey Children's Hospital",
      bio: 'Dr. James is a psychiatrist focusing on children and adolescents. With his extensive experience, he offers therapeutic interventions tailored to young patients’ needs.',
      rating: 4,
      revCount: 20,
    },
    {
      id: 10,
      docname: 'Anna',
      hospital: 'Bristol Royal Infirmary',
      bio: 'Dr. Anna is an oncologist specializing in cancer care and research. With a commitment to advancing treatment options, she emphasizes palliative care and supportive therapy for her patients.',
      rating: 5,
      revCount: 40,
    },
  ]

  const [filters, setFilters] = useState({
    city: ' ',
    service: ' ',
    selectedOptions: {},
  })

  const [city, setCity] = useState('')
  const [Hospital, setHospital] = useState('')

  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    const savedDoctor = localStorage.getItem('selectedDoctor')
    return savedDoctor ? JSON.parse(savedDoctor) : null
  })

  const setSelectedDoctorWrapper = (doctor) => {
    setSelectedDoctor(doctor)
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor))
  }

  return (
    <HospitalContext.Provider
      value={{
        Hospdata,
        selectedDoctor,
        Biograph,
        setSelectedDoctor: setSelectedDoctorWrapper,
        city,
        setCity,
        Hospital,
        setHospital,
        selectedFilters,
        setSelectedFilters
      }}
    >
      {children}
    </HospitalContext.Provider>
  )
}

const useHospitalContext = () => {
  return useContext(HospitalContext)
}

export { HospitalProvider, useHospitalContext }
