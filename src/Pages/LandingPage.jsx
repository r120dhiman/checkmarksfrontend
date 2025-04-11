import React from 'react'
import Hero from '../components/Label'
import Upload from '../components/Upload'
import Mentorship from '../components/mentorship'
import { useAuth } from '../context/AuthContext'
import FutureProduct from '../components/Futureproduct'
import AnswerKeyNotice from '../components/Answerkey'


function LandingPage() {
  const { userData } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50">
      <AnswerKeyNotice/>
      <Hero/>
      <div className="container mx-auto px-4 py-8">
        {userData && userData.isEnrolled && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p className="font-semibold text-center">
              Congratulations! You are enrolled in the mentorship program.
            </p>
          </div>
        )}
        <div className="flex flex-col md:flex-row md:space-x-6 gap-6">
          <div className="w-full md:w-2/5 bg-white rounded-lg shadow-md">
            <Mentorship />
          </div>
          <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">
            <Upload />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <FutureProduct/>
      </div>
    </div>
  )
}

export default LandingPage
