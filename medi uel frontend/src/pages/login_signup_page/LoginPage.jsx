// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Lottie from 'react-lottie'
// import animationData from '../../lottie-animation/loginAnimation.json'

// function LoginPage() {
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     // console.log("cheeeeeee")
//     const { email, password } = formData
//     console.log('8484848', email, password)
//     try {
//       const response = await axios.post(
//         'http://localhost:5005/api/v1/user/login',
//         {
//           email,
//           password,
//         }
//       )
//       console.log(response)
//       if (response?.data?.data?.token) {
//         localStorage.setItem(
//           'userDetails',
//           JSON.stringify(response?.data?.data.user)
//         )
//         toast.success('Login successful')
//         navigate('/alldoctors')
//       } else {
//         toast.error('Login failed')
//       }
//     } catch (error) {
//       console.error('Error logging in:', error)
//       toast.error('Login failed')
//     }
//   }

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   }

//   return (
//     <div
//       className="flex h-screen"
//       style={{ backgroundColor: 'rgb(179, 218, 217)' }}
//     >
//       <div className="w-1/2 flex justify-center items-center">
//         <Lottie options={defaultOptions} height={400} width={400} />
//       </div>
//       <div className="w-1/2 flex flex-col justify-center items-center bg-white  shadow-lg p-8">
//         <div className="w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Welcome back</h1>
//           <h2 className="text-2xl text-center mb-6">Login your account</h2>
//           <form
//             className="flex flex-col"
//             id="login-form"
//             onSubmit={handleLogin}
//           >
//             <label htmlFor="email" className="mb-2">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData?.email}
//               onChange={handleInputChange}
//               id="email"
//               required
//               className="border border-gray-300 rounded-md mb-4 p-2"
//             />
//             <label htmlFor="password" className="mb-2">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData?.password}
//               onChange={handleInputChange}
//               id="password"
//               required
//               className="border border-gray-300 rounded-md mb-4 p-2"
//             />
//             <button
//               className="g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mb-4"
//               data-sitekey="your-site-key"
//               data-action="login"
//               type="submit"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           </form>
//           <div className="flex justify-between text-sm md:text-lg">
//             <Link
//               to="/signup"
//               className="text-purple-600 hover:underline"
//               style={{ color: 'rgb(27, 120, 120)' }}
//             >
//               Create Account
//             </Link>
//             <Link
//               to="/"
//               className="text-purple-600 hover:underline"
//               style={{ color: 'rgb(27, 120, 120)' }}
//             >
//               Forgot Password?
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginPage


// above is before login is implementation


import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'react-lottie';
import animationData from '../../lottie-animation/loginAnimation.json';
// import { AppContext } from '../../context/AppProvider';  // Import the context
import { AppContext } from '../../comp/AppContext';

function LoginPage() {
  const navigate = useNavigate();
  const { setUserDetails } = useContext(AppContext); // Get setUserDetails from context

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post('http://localhost:5005/api/v1/user/login', {
        email,
        password,
      });

      if (response?.data?.data?.token) {
        const user = response.data.data.user;
        localStorage.setItem('userDetails', JSON.stringify(user)); // Store in localStorage
        setUserDetails(user);  // Update the context with the user details
        toast.success('Login successful');
        navigate('/alldoctors');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Login failed');
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: 'rgb(179, 218, 217)' }}>
      <div className="w-1/2 flex justify-center items-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome back</h1>
          <h2 className="text-2xl text-center mb-6">Login your account</h2>
          <form className="flex flex-col" id="login-form" onSubmit={handleLogin}>
            <label htmlFor="email" className="mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData?.email}
              onChange={handleInputChange}
              id="email"
              required
              className="border border-gray-300 rounded-md mb-4 p-2"
            />
            <label htmlFor="password" className="mb-2">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData?.password}
              onChange={handleInputChange}
              id="password"
              required
              className="border border-gray-300 rounded-md mb-4 p-2"
            />
            <button className="g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mb-4" data-sitekey="your-site-key" data-action="login" type="submit">
              Login
            </button>
          </form>
          <div className="flex justify-between text-sm md:text-lg">
            <Link to="/signup" className="text-purple-600 hover:underline" style={{ color: 'rgb(27, 120, 120)' }}>Create Account</Link>
            <Link to="/" className="text-purple-600 hover:underline" style={{ color: 'rgb(27, 120, 120)' }}>Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
