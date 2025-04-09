import React from 'react'

const Usergame = () => {
  return (
    <div className="h-screen mt-10 ">
    <usergame id="footer" className=" border-t border-gray-200">
      <div className="  max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid  md:grid-cols-[1fr_2fr] grip-cols-1 gap-30">
          {/* Company Info */}
          <div href="#contact0" className="space-y-4">
            <h3 className="text-lg font-bold text-gray-700"></h3>
            <h6 className= "text-s text-gray-600">
            Estimate your JEE score by simply uploading your response sheet or either by html file.and Check avg score of your peers in Checkcompetition section
            </h6>
          </div>


          {/* Contact Info */}
          <div className="space-y-4 ">
            <h3 className="text-lg font-bold text-gray-700">FORM</h3>
            <ul className="text-s space-y-2">
              <li className="text-gray-600">1</li>
              
              <li className="text-gray-600">2</li>
            </ul>
          </div>
          
        </div>
        
      </div>
    </usergame>
    </div>
  )
}

export default Usergame
