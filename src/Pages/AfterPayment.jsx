import React, { useEffect } from 'react'
import { useLocation , useNavigate} from 'react-router'
import axios from 'axios';

function AfterPayment() {
  const location = useLocation()
  const navigate = useNavigate()

useEffect(() => {
  const fetchData = async () => {
    const queryParams = new URLSearchParams(location.search)
    const paymentId = queryParams.get('payment_id')
    const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvaGl0IEt1bWFyIiwiZW1haWwiOiJyb2hpdC5rdW1hckBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzQ0MjI5NzU4LCJleHAiOjE3NDQzMTYxNTh9.Uh9nzzqsUbFEb_oB5uhGrYDWT3wty-_hkpnr6D-W7OU"
    try {
      if (paymentId) {
        const response = await axios.post('http://localhost:3000/payment/newpayment', 
          { paymentId ,auth}
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error processing payment:', error)
    } finally {
      navigate('/');
    }
  };
  fetchData();
}, [location.search, navigate])

  return (
    <div>
      Hello from after payment
    </div>
  )
}

export default AfterPayment