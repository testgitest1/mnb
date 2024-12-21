import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    const savedUser = localStorage.getItem('userDetails')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem('filters')
    return savedFilters
      ? JSON.parse(savedFilters)
      : { city: '', service: '', selectedOptions: {} }
  })

  const [selectedFilters, setSelectedFilters] = useState(() => {
    const savedSelectedFilters = localStorage.getItem('selectedFilters')
    return savedSelectedFilters
      ? JSON.parse(savedSelectedFilters)
      : {
          rating: [],
          gender: [],
          timing: [],
          language: '',
        }
  })

  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    const savedDoctor = localStorage.getItem('selectedDoctor')
    return savedDoctor ? JSON.parse(savedDoctor) : null
  })

  const Docdata = [
    {
      imag:'https://c8.alamy.com/comp/2R2D0W2/a-nhs-gp-doctor-pictured-in-his-general-surgery-north-devon-england-uk-2R2D0W2.jpg',
      id: 1,
      city: 'Brighton',
      docname: 'James',
      health: 'Cardiology',
      hospital: "St. Mary's Hospital",
      time: 'Mon-Sat, 9.00 AM - 10.00 PM',
      clinicVisit: 'true',
      phoneCall: 'false',
      fee: '350',
      gender: 'Male',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 210,
      timing: 21,
    },
    {
      imag:'https://www.nationalhealthexecutive.com/sites/nhe/files/styles/banner/public/2021-01/iStock-1220205899.jpg?itok=PL1bEt0Z',
      id: 2,
      city: 'Newcastle',
      docname: 'Julia',
      health: 'Rheumatology',
      hospital: 'Royal Victoria Infirmary',
      time: 'Mon-Sat, 1.00 AM - 1.00 PM',
      clinicVisit: 'true',
      homeVisit: 'true',
      phoneCall: 'true',
      fee: '400',
      gender: 'Female',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 120,
      timing: 23,
    },
    {
      imag:'https://storage.googleapis.com/kaggle-datasets-images/3417941/5959671/8c1a0030a21d5ed2584fc42e613bdf2c/dataset-card.jpg?t=2023-06-18-04-24-26',
      id: 3,
      city: 'Sheffield',
      docname: 'Tom',
      health: 'Dermatology',
      hospital: "Sheffield Children's Hospital",
      time: 'Mon-Wed, 12.10 AM - 1.00 PM',
      clinicVisit: 'true',
      homeVisit: 'false',
      fee: '300',
      gender: 'Male',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 150,
      timing: 22,
    },
    {
      imag:'https://www.stgeorges.nhs.uk/wp-content/uploads/2017/01/Image-Elizabeth-Boot-junior-doctor-1.jpg',
      id: 4,
      city: 'London',
      docname: 'Emily',
      health: 'Pediatrics',
      hospital: 'Royal London Hospital',
      time: 'Mon-Fri, 8.00 AM - 5.00 PM',
      clinicVisit: 'true',
      homeVisit: 'true',
      phoneCall: 'true',
      fee: '450',
      gender: 'Female',
      rating: 5, // Rounded rating
      language: 'English',
      revCount: 180,
      timing: 23,
    },
    {
      imag:'https://s33929.pcdn.co/wp-content/uploads/sites/626/2022/01/Doc_c_1868484697.jpg',
      id: 5,
      city: 'Manchester',
      docname: 'David',
      health: 'Orthopedics',
      hospital: 'Manchester Royal Infirmary',
      time: 'Mon-Sun, 9.00 AM - 6.00 PM',
      clinicVisit: 'true',
      homeVisit: 'false',
      phoneCall: 'false',
      fee: '500',
      gender: 'Male',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 210,
      timing: 22,
    },
    {
      imag:'https://th.bing.com/th/id/OIP.kfgKJa6-0ayPXjCBKDSv2AHaFj?w=1024&h=768&rs=1&pid=ImgDetMain',
      id: 6,
      city: 'Birmingham',
      docname: 'Sarah',
      health: 'Endocrinology',
      hospital: 'Queen Elizabeth Hospital Birmingham',
      time: 'Tue-Thu, 10.00 AM - 4.00 PM',
      clinicVisit: 'true',
      homeVisit: 'true',
      phoneCall: 'true',
      fee: '420',
      gender: 'Female',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 230,
      timing: 21,
    },
    {
      imag:'https://broadbentdentistry.com/wp-content/uploads/2019/11/dr-rev.jpg',
      id: 7,
      city: 'Glasgow',
      docname: 'Michael',
      health: 'Gastroenterology',
      hospital: 'Glasgow Royal Infirmary',
      time: 'Mon-Fri, 9.00 AM - 5.00 PM',
      clinicVisit: 'true',
      homeVisit: 'false',
      phoneCall: 'true',
      fee: '460',
      gender: 'Male',
      rating: 4, // Rounded rating
      language: 'English, Scottish Gaelic',
      revCount: 200,
      timing: 23,
    },
    {
      imag:'https://thumbs.dreamstime.com/z/senior-doctor-female-sit-behind-office-desk-21855371.jpg',
      id: 8,
      city: 'Leeds',
      docname: 'Rachel',
      health: 'Neurology',
      hospital: 'Leeds General Infirmary',
      time: 'Mon-Sat, 9.00 AM - 4.00 PM',
      clinicVisit: 'false',
      homeVisit: 'true',
      phoneCall: 'false',
      fee: '480',
      gender: 'Female',
      rating: 3, // Rounded rating
      language: 'English',
      revCount: 150,
      timing: 22,
    },
    {
      imag:'https://meditationforthesoul.com/bloodsugarv4/docnew.jpg',
      id: 9,
      city: 'Liverpool',
      docname: 'James',
      health: 'Psychiatry',
      hospital: "Alder Hey Children's Hospital",
      time: 'Wed-Fri, 10.00 AM - 3.00 PM',
      clinicVisit: 'true',
      homeVisit: 'false',
      phoneCall: 'true',
      fee: '370',
      gender: 'Male',
      rating: 4, // Rounded rating
      language: 'English',
      revCount: 110,
      timing: 20,
    },
    {
      imag:'https://physicians.wustl.edu/wp-content/uploads/2020/06/Anna-Miller.jpeg',
      id: 10,
      city: 'Bristol',
      docname: 'Anna',
      health: 'Oncology',
      hospital: 'Bristol Royal Infirmary',
      time: 'Tue-Sat, 9.00 AM - 6.00 PM',
      clinicVisit: 'true',
      homeVisit: 'true',
      phoneCall: 'true',
      fee: '550',
      gender: 'Female',
      rating: 5, // Rounded rating
      language: 'English',
      revCount: 200,
      timing: 23,
    },
  ]

  const About = [
    {
      id: 1,
      aboutus:
        'Dr. James is a skilled Cardiologist with over 15 years of experience, known for his expertise in diagnosing and treating heart conditions. He is dedicated to patient-centered care and cardiovascular health.',
      docname: 'James',
      hospital: "St. Mary's Hospital",
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 210,
      listofDoc: 'Cardiology - Heart and cardiovascular system care',
      Opentime: 'Mon-Sat, 9.00 AM - 10.00 PM',
    },
    {
      id: 2,
      aboutus:
        'Dr. Julia is a skilled Rheumatologist with over 15 years of experience, known for her expertise in diagnosing and treating autoimmune diseases and musculoskeletal disorders. She is dedicated to patient-centered care and rheumatology health.',
      docname: 'Julia',
      hospital: 'Royal Victoria Infirmary',
      hospRating: 5, // Match rating range from 1 to 5
      revCount: 120,
      listofDoc:
        'Rheumatology - Autoimmune diseases and musculoskeletal disorders',
      Opentime: 'Mon-Sat, 1.00 AM - 1.00 PM',
    },
    {
      id: 3,
      aboutus:
        'Dr. Tom is a skilled Dermatologist with over 15 years of experience, known for his expertise in diagnosing and treating skin conditions, including eczema, acne, and psoriasis. He is dedicated to providing high-quality dermatologic care.',
      docname: 'Tom',
      hospital: "Sheffield Children's Hospital",
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 150,
      listofDoc: 'Dermatology - Skin conditions, acne, eczema, psoriasis',
      Opentime: 'Mon-Wed, 12.10 AM - 1.00 PM',
    },
    {
      id: 4,
      aboutus:
        'Dr. Emily is a skilled Pediatrician with over 15 years of experience, known for her expertise in diagnosing and treating childhood illnesses. She is dedicated to providing compassionate care for children and their families.',
      docname: 'Emily',
      hospital: 'Royal London Hospital',
      hospRating: 5, // Match rating range from 1 to 5
      revCount: 180,
      listofDoc:
        'Pediatrics - Childhood illnesses, developmental concerns, vaccinations',
      Opentime: 'Mon-Fri, 8.00 AM - 5.00 PM',
    },
    {
      id: 5,
      aboutus:
        'Dr. David is a skilled Orthopedic specialist with over 15 years of experience, known for his expertise in diagnosing and treating musculoskeletal conditions, including joint replacements and sports injuries.',
      docname: 'David',
      hospital: 'Manchester Royal Infirmary',
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 210,
      listofDoc:
        'Orthopedics - Musculoskeletal system, joint replacements, sports injuries',
      Opentime: 'Mon-Sun, 9.00 AM - 6.00 PM',
    },
    {
      id: 6,
      aboutus:
        'Dr. Sarah is a skilled Endocrinologist with over 15 years of experience, known for her expertise in diagnosing and treating hormonal imbalances, diabetes, and thyroid disorders. She is dedicated to managing chronic endocrine conditions.',
      docname: 'Sarah',
      hospital: 'Queen Elizabeth Hospital Birmingham',
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 230,
      listofDoc:
        'Endocrinology - Hormonal imbalances, diabetes, thyroid disorders',
      Opentime: 'Tue-Thu, 10.00 AM - 4.00 PM',
    },
    {
      id: 7,
      aboutus:
        "Dr. Michael is a skilled Gastroenterologist with over 15 years of experience, specializing in the diagnosis and treatment of digestive system disorders such as IBS, GERD, and Crohn's disease.",
      docname: 'Michael',
      hospital: 'Glasgow Royal Infirmary',
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 200,
      listofDoc:
        "Gastroenterology - Digestive system disorders, IBS, GERD, Crohn's disease",
      Opentime: 'Mon-Fri, 9.00 AM - 5.00 PM',
    },
    {
      id: 8,
      aboutus:
        "Dr. Rachel is a skilled Neurologist with over 15 years of experience, specializing in the diagnosis and treatment of neurological conditions such as epilepsy, stroke, and Alzheimer's disease.",
      docname: 'Rachel',
      hospital: 'Leeds General Infirmary',
      hospRating: 3, // Match rating range from 1 to 5
      revCount: 150,
      listofDoc:
        "Neurology - Epilepsy, stroke, Alzheimer's disease, and other neurological disorders",
      Opentime: 'Mon-Sat, 9.00 AM - 4.00 PM',
    },
    {
      id: 9,
      aboutus:
        "Dr. James is a skilled Psychiatrist with over 15 years of experience, specializing in mental health disorders including depression, anxiety, and bipolar disorder. He is dedicated to improving patients' mental health and quality of life.",
      docname: 'James',
      hospital: "Alder Hey Children's Hospital",
      hospRating: 4, // Match rating range from 1 to 5
      revCount: 110,
      listofDoc:
        'Psychiatry - Depression, anxiety, bipolar disorder, mental health care',
      Opentime: 'Wed-Fri, 10.00 AM - 3.00 PM',
    },
    {
      id: 10,
      aboutus:
        'Dr. Anna is a skilled Oncologist with over 15 years of experience, specializing in the treatment of cancer, including chemotherapy and radiation therapy. She is dedicated to providing compassionate care for cancer patients.',
      docname: 'Anna',
      hospital: 'Bristol Royal Infirmary',
      hospRating: 5, // Match rating range from 1 to 5
      revCount: 200,
      listofDoc: 'Oncology - Cancer treatment, chemotherapy, radiation therapy',
      Opentime: 'Tue-Sat, 9.00 AM - 6.00 PM',
    },
  ]

  const Biograph = [
    {
      id: 1,
      docname: 'James',
      hospital: "St. Mary's Hospital",
      bio: 'Dr. James is a skilled cardiologist with over 15 years of experience, known for his expertise in diagnosing and treating heart conditions. He is dedicated to patient-centered care and cardiovascular health.',
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 210,
      availabletiming: 21, // Adjusted based on available timing in Docdata
    },
    {
      id: 2,
      docname: 'Julia',
      hospital: 'Royal Victoria Infirmary',
      bio: 'Dr. Julia is a skilled rheumatologist with over 15 years of experience, known for her expertise in diagnosing and treating autoimmune diseases and musculoskeletal disorders. She is dedicated to patient-centered care and rheumatology health.',
      rating: 5, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 120,
      availabletiming: 23, // Adjusted based on available timing in Docdata
    },
    {
      id: 3,
      docname: 'Tom',
      hospital: "Sheffield Children's Hospital",
      bio: 'Dr. Tom is a skilled dermatologist with over 15 years of experience, known for his expertise in diagnosing and treating skin conditions, including eczema, acne, and psoriasis. He is dedicated to providing high-quality dermatologic care.',
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 150,
      availabletiming: 22, // Adjusted based on available timing in Docdata
    },
    {
      id: 4,
      docname: 'Emily',
      hospital: 'Royal London Hospital',
      bio: 'Dr. Emily is a skilled pediatrician with over 15 years of experience, known for her expertise in diagnosing and treating childhood illnesses. She is dedicated to providing compassionate care for children and their families.',
      rating: 5, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 180,
      availabletiming: 23, // Adjusted based on available timing in Docdata
    },
    {
      id: 5,
      docname: 'David',
      hospital: 'Manchester Royal Infirmary',
      bio: 'Dr. David is a skilled orthopedic specialist with over 15 years of experience, known for his expertise in diagnosing and treating musculoskeletal conditions, including joint replacements and sports injuries.',
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 210,
      availabletiming: 22, // Adjusted based on available timing in Docdata
    },
    {
      id: 6,
      docname: 'Sarah',
      hospital: 'Queen Elizabeth Hospital Birmingham',
      bio: 'Dr. Sarah is a skilled endocrinologist with over 15 years of experience, known for her expertise in diagnosing and treating hormonal imbalances, diabetes, and thyroid disorders. She is dedicated to managing chronic endocrine conditions.',
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 230,
      availabletiming: 21, // Adjusted based on available timing in Docdata
    },
    {
      id: 7,
      docname: 'Michael',
      hospital: 'Glasgow Royal Infirmary',
      bio: "Dr. Michael is a skilled gastroenterologist with over 15 years of experience, specializing in the diagnosis and treatment of digestive system disorders such as IBS, GERD, and Crohn's disease.",
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English, Scottish Gaelic',
      revCount: 200,
      availabletiming: 23, // Adjusted based on available timing in Docdata
    },
    {
      id: 8,
      docname: 'Rachel',
      hospital: 'Leeds General Infirmary',
      bio: "Dr. Rachel is a skilled neurologist with over 15 years of experience, specializing in the diagnosis and treatment of neurological conditions such as epilepsy, stroke, and Alzheimer's disease.",
      rating: 3, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 150,
      availabletiming: 22, // Adjusted based on available timing in Docdata
    },
    {
      id: 9,
      docname: 'James',
      hospital: "Alder Hey Children's Hospital",
      bio: "Dr. James is a skilled psychiatrist with over 15 years of experience, specializing in mental health disorders including depression, anxiety, and bipolar disorder. He is dedicated to improving patients' mental health and quality of life.",
      rating: 4, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 110,
      availabletiming: 20, // Adjusted based on available timing in Docdata
    },
    {
      id: 10,
      docname: 'Anna',
      hospital: 'Bristol Royal Infirmary',
      bio: 'Dr. Anna is a skilled oncologist with over 15 years of experience, specializing in the treatment of cancer, including chemotherapy and radiation therapy. She is dedicated to providing compassionate care for cancer patients.',
      rating: 5, // Adjusted based on rating in Docdata
      language: 'English',
      revCount: 200,
      availabletiming: 23, // Adjusted based on available timing in Docdata
    },
  ]

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem('selectedFilters'))
    if (savedFilters) {
      setSelectedFilters(savedFilters)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters))
  }, [selectedFilters])

  const setFilter = (newFilters) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilters }
      localStorage.setItem('filters', JSON.stringify(updatedFilters))
      return updatedFilters
    })
  }

  const setUserDetailsWrapper = (user) => {
    setUserDetails(user)
    localStorage.setItem('userDetails', JSON.stringify(user))
  }

  const setSelectedDoctorWrapper = (doctor) => {
    setSelectedDoctor(doctor)
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor))
  }

  return (
    <AppContext.Provider
      value={{
        filters,
        setFilter,
        userDetails,
        setUserDetails: setUserDetailsWrapper,
        selectedFilters,
        setSelectedFilters,
        selectedDoctor,
        setSelectedDoctor: setSelectedDoctorWrapper,
        Docdata,
        Biograph,
        About,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
