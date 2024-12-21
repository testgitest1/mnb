import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from './AppContext'

const PaymentDone = () => {
  const { userDetails, selectedDoctor } = useContext(AppContext)
  const [email, setEmail] = useState(userDetails?.email)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
        <style>
            .LoyaltyModal {
                background-color: rgb(179, 218, 217);
                border-radius: 25px;
                width: 230px;
                height: 230px;
                z-index: 1010;
                display: flex;
                margin:auto;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .LoyaltyModal a {
                text-align: center;
                margin:auto;
                font-family: 'Segoe UI', sans-serif;
                font-size: 12px;
                font-weight: 700;
                color: black;
                padding:20px;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="LoyaltyModal">
            <a href="http://localhost:5173/CardPayment" target="_blank">Click here to proceed with payment to continue booking <br><br/> <p>Consultation Fee: $${
              selectedDoctor?.fee || 'N/A'
            }</p></a>
        </div>
    </body>
    </html>
  `

  const decryptFunc = () => {
    try {
      const retrievedToken = localStorage.getItem('token')
      const userInfo = localStorage.getItem('userDetails')
      const parsedUserInfo = JSON.parse(userInfo)
      if (!parsedUserInfo.email) {
        toast.error('Kindly login to proceed further!')
      }
      setEmail(parsedUserInfo?.email)
    } catch (error) {
      console.error('Invalid token', error)
    }
  }

  useEffect(() => {
    decryptFunc()
  }, [])

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:5005/api/v1/message/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, message }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setTimeout(() => {
        setIsLoading(false)
        navigate('/')
      }, 4000)
    } catch (error) {
      alert('There was an error sending the email. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: '450px',
        padding: '150px 550px',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p
          style={{ textAlign: 'center', width: '400px', paddingBottom: '40px' }}
        >
          After reviewing your appointment, confirmation will be sent to your
          Mail Id with Payment redirect.
        </p>

        {isLoading ? (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '65px',
              }}
            >
              <div
                className="spinner"
                style={{
                  width: '30px',
                  height: '30px',
                  border: '5px solid lightgray',
                  borderTop: '5px solid blue',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              ></div>
            </div>
            <p
              style={{
                width: '1200px',
                textAlign: 'center',
                paddingBottom: '40px',
              }}
            >
              You are redirecting to home, link has been shared to your mailID.
            </p>
          </>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'rgb(17,63,70)',
              color: 'white',
              width: '195px',
              padding: '10px',
              height: '65px',
            }}
          >
            Please, Check Your Mail ID
          </button>
        )}
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default PaymentDone
