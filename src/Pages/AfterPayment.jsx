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
    const auth= localStorage.getItem('Authinfo')
    try {
      if (paymentId) {
        const response = await axios.post('https://checkmarksbackend.onrender.com/payment/newpayment', 
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