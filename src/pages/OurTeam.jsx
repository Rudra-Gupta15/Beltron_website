import React from 'react'

const teamMembers = [
  { name: 'Kaushal Kishore', role: 'MD', details: 'Managing Director, BSEDC Ltd., Beltron Bhawan, Shastri Nagar, Patna', image: 'https://bsedc.bihar.gov.in/media/homepage/esteemed-authorities/01BH109D03-a6a2ed31532b.jpg' },
  { name: 'Rakesh Ranjan I.A.S', role: 'GENERAL MANAGER', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/0beb04e5-fd0d-4d47-b8eb-ef4276f01b9d.jpeg' },
  { name: 'Vishal Anand', role: 'GENERAL MANAGER(PROJECT)', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/IMG_3074_wPQge1c.png' },
  { name: 'Shyam Bihari Singh', role: 'TECHNICAL ADVISOR', image: null },
  { name: 'Ramesh Kumar Mishra', role: 'DEPUTY GENERAL MANAGER(FINANCE)', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/RAMESH.jpeg' },
  { name: 'Jitendra Tripathi', role: 'PMU', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/Jitendra_Tripathi.jpg' },
  { name: 'Sanjivani', role: 'PMU', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/sanjivni.jpg' },
  { name: 'Mahendra Kumar', role: 'PMU', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/Mahendra.jpeg' },
  { name: 'Alok Pratap Suman', role: 'PMU', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/AlokPratap.jpeg' },
  { name: 'Sudhir Kumar', role: 'COMPANY SECRETARY', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/sudhirkmr.jpg' },
  { name: 'Zahid Lateef', role: 'PROJECT LEAD', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/ZahidLateef.jpg' },
  { name: 'Vivek Nirala', role: 'PROJECT LEAD', image: null },
  { name: 'Kamlesh Kumar', role: 'ACCOUNT OFFICER', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/CCI02012015_0004-0_5.jpg' },
  { name: 'Vijay Kumar Sinha', role: 'ASST MGR LEGAL', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/no_pic_QYrn3Tr.jpg' },
  { name: 'Rohit Kumar', role: 'ASST MGR ESTABLISHMENT', image: 'https://bsedc.bihar.gov.in/media/beltronemployees/rohitkumar_HuxObCP.jpeg' },
]

const OurTeam = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0A2E73] text-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Team</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Meet the dedicated professionals and leaders driving innovation and excellence at BELTRON.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              
              {/* Avatar */}
              <div className="w-[160px] h-[160px] rounded-full overflow-hidden mb-5 border border-gray-200 bg-gray-50 flex items-center justify-center shrink-0 shadow-sm">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[12px] font-semibold text-[#1C2F57] uppercase tracking-wide">{member.role}</p>

              {/* Details if any */}
              {member.details && (
                <p className="text-[12px] text-gray-500 leading-relaxed mt-4 pt-4 border-t border-gray-100 w-full">
                  {member.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
