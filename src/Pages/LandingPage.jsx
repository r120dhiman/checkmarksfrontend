import React from 'react'
import Hero from '../components/Label'
import Upload from '../components/Upload'
import Usergame from '../components/Uploadbtn'
import { Link } from 'react-router'
import Footer from '../components/Footer'
import Mentorship from '../components/mentorship'

import FutureProduct from '../components/Futureproduct'

function LandingPage() {
  return (
    <div>
      <Hero/>
      <div className="flex flex-col md:flex-row md:space-x-0 w-full px-1">
        <div className="w-full md:w-2/5 m-0 p-0">
          <Mentorship />
          {/* <Mentorshipnew/> */}
       
        </div>
        <div className="w-full md:w-3/5 m-0 p-0">
          <Upload />
        </div>
      </div>
      <FutureProduct/>

    </div>
  )
}

export default LandingPage
