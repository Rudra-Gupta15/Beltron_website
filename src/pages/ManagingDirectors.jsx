import React, { useState } from 'react'

const managingDirectorsData = [
  { sr: 41, name: 'Kaushal Kishore, I.A.S', from: '18-May-2026', to: 'current' },
  { sr: 40, name: 'Shri Abhay Kumar Singh, I.A.S', from: '5-October-2023', to: '18-May-2026' },
  { sr: 39, name: 'Shri Santosh Kumar Mall, I.A.S', from: '20-August-2020', to: '4-October-2023' },
  { sr: 38, name: 'Sri Rahul Singh, I.A.S', from: '28-August-2015', to: '20-August-2020' },
  { sr: 37, name: 'Sri Vinay Kumar, I.A.S', from: '10-August-2015', to: '28-August-2015' },
  { sr: 36, name: 'Sri Rahul Singh, I.A.S', from: '10-November-2014', to: '7-August-2015' },
  { sr: 35, name: 'Sri Kanchan Kapoor (Incharge)', from: '26-September-2014', to: '20-August-2014' },
  { sr: 34, name: 'Sri Sridhar Chiruvolu, I.A.S', from: '15-September-2014', to: '10-November-2014' },
  { sr: 33, name: 'Sri Vinay Kumar, I.A.S', from: '1-September-2014', to: '11-September-2014' },
  { sr: 32, name: 'Sri Kanchan Kapoor (Incharge)', from: '18-August-2014', to: '31-August-2014' },
  { sr: 31, name: 'Sri Atul Sinha, I.T.S', from: '22-October-2011', to: '1-September-2014' },
  { sr: 30, name: 'Smt. Palka Sahni, I.A.S', from: '6-June-2011', to: '16-August-2011' },
  { sr: 29, name: 'Sri Arbind Kumar Chaudhary, I.A.S', from: '16-December-2010', to: '6-June-2011' },
  { sr: 28, name: 'Sri Vinay Kumar, I.A.S', from: '26-October-2010', to: '16-December-2010' },
  { sr: 27, name: 'Sri K. K. Pathak, I.A.S', from: '6-September-2010', to: '6-October-2010' },
  { sr: 26, name: 'Sri Vinay Kumar, I.A.S', from: '21-January-2010', to: '2-September-2010' },
  { sr: 25, name: 'Sri R. K. Khandelwal I.A.S', from: '6-October-2009', to: '21-January-2010' },
  { sr: 24, name: 'Sri C. K. Mishra I.A.S', from: '29-December-2008', to: '6-October-2009' },
  { sr: 23, name: 'Sri Alok Vardhan Chaturvedi, I.A.S', from: '27-April-2005', to: '22-December-2008' },
  { sr: 22, name: 'Sri Mahesh Prasad', from: '9-August-2004', to: '27-March-2004' },
  { sr: 21, name: 'Sri Baidynath Mishra, I.A.S', from: '29-March-2004', to: '18-June-2004' },
  { sr: 20, name: 'Sri Ravi Mittal, I.A.S', from: '30-May-2003', to: '21-April-2004' },
  { sr: 19, name: 'Sri J.R.K. Rao, I.A.S', from: '24-July-2001', to: '30-May-2003' },
  { sr: 18, name: 'Sri Anup Mukerjee I.A.S', from: '22-November-1999', to: '24-July-2001' },
  { sr: 17, name: 'Sri G.S. Kang I.A.S', from: '10-February-1998', to: '16-November-1999' },
  { sr: 16, name: 'Sri S.K. Choudhary, I.A.S', from: '28-August-1995', to: '10-February-1998' },
  { sr: 15, name: 'Sri C.K. Mishra, I.A.S', from: '4-August-1995', to: '28-August-1995' },
  { sr: 14, name: 'Sri P.R. Roy', from: '23-May-1995', to: '4-August-1995' },
  { sr: 13, name: 'Sri S.K. Choudhary, I.A.S', from: '8-December-1994', to: '23-May-1995' },
  { sr: 12, name: 'Sri R.C.A. Jain, I.A.S', from: '27-September-1994', to: '8-December-1994' },
  { sr: 11, name: 'Sri Mantreshwar Jha, I.A.S', from: '16-April-1992', to: '17-September-1994' },
  { sr: 10, name: 'Sri U.N. Panjiar I.A.S', from: '23-March-1992', to: '15-April-1992' },
  { sr: 9, name: 'Sri Mantreshwar Jha, I.A.S', from: '20-December-1990', to: '--' },
  { sr: 8, name: 'Sri A.K. Chatterjee, I.A.S', from: '6-November-1990', to: '29-December-1990' },
  { sr: 7, name: 'Sri Mantreshwar Jha, I.A.S', from: '20-August-1990', to: '19-October-1990' },
  { sr: 6, name: 'Sri Arvind Prasad, I.A.S', from: '1-July-1989', to: '19-August-1990' },
  { sr: 5, name: 'MD. Shakeel Ahmad, I.A.S', from: '14-June-1989', to: '30-June-1989' },
  { sr: 4, name: 'Sri S.N. Dubey, I.A.S', from: '10-June-1987', to: '13-June-1989' },
  { sr: 3, name: 'Sri P.R. Roy', from: '14-October-1985', to: '9-June-1987' },
  { sr: 2, name: 'Sri R.P. Singh', from: '12-October-1984', to: '12-October-1985' },
  { sr: 1, name: 'Sri R.N. Singh', from: '21-February-1978', to: '11-October-1984' },
]

const ManagingDirectors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const totalItems = managingDirectorsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = managingDirectorsData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0A2E73] text-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">List Of Managing Directors</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A historical timeline of our leadership and Managing Directors who have guided BSEDC towards digital excellence.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10">
        <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-200 rounded-xl overflow-hidden">
          
          {/* Top Controls: Search */}
          <div className="p-4 bg-white border-b border-gray-200">
            <div className="relative w-full max-w-sm">
              <input 
                type="text" 
                placeholder="Search for Managing Directors.." 
                className="w-[300px] px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">Sr. No.</th>
                  <th className="border border-gray-200 px-4 py-4 text-sm font-bold text-gray-900">Managing Director Name</th>
                  <th className="border border-gray-200 px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">From</th>
                  <th className="border border-gray-200 px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">To</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((md) => {
                  const isCurrent = md.to === 'current';
                  return (
                    <tr 
                      key={md.sr} 
                      className={isCurrent ? 'bg-[#9ba82a]' : 'bg-white hover:bg-gray-50 transition-colors'}
                    >
                      <td className={`border border-gray-200 px-4 py-4 text-[13px] ${isCurrent ? 'font-bold text-black' : 'text-gray-700'}`}>{md.sr}</td>
                      <td className={`border border-gray-200 px-4 py-4 text-[13px] ${isCurrent ? 'font-bold text-black' : 'text-gray-800'}`}>
                        {md.name}
                      </td>
                      <td className={`border border-gray-200 px-4 py-4 text-[13px] ${isCurrent ? 'font-bold text-black' : 'text-gray-700'}`}>{md.from}</td>
                      <td className={`border border-gray-200 px-4 py-4 text-[13px] ${isCurrent ? 'font-bold text-black' : 'text-gray-700'}`}>
                        {isCurrent ? 'current' : md.to}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          {/* Bottom Controls: Pagination */}
          <div className="p-5 flex items-center justify-between bg-gray-50 border-t border-gray-200">
            <span className="text-[15px] font-medium text-[#1C2F57]">Showing {currentItems.length} of {totalItems}</span>
            <div className="flex shadow-sm rounded-md overflow-hidden border border-gray-300">
              <button 
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-5 py-2 text-[15px] font-bold transition-colors bg-white ${currentPage === 1 ? 'text-gray-400 opacity-50 cursor-not-allowed' : 'text-[#1C2F57] hover:bg-gray-100'}`}
              >
                Previous
              </button>
              <div className="w-px bg-gray-300"></div>
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 text-[15px] font-bold transition-colors bg-white ${currentPage === totalPages ? 'text-gray-400 opacity-50 cursor-not-allowed' : 'text-[#1C2F57] hover:bg-gray-100'}`}
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ManagingDirectors
