import React from 'react';
import tamilNadu from '../assets/tamil-nadu.png';
import kerala from '../assets/kerala.png';
import andhra from '../assets/andhra.png';
import karnataka from '../assets/karnataka.png';

export default function OurService() {
  const states = [
    {
      name: "TAMIL NADU",
      icon: tamilNadu,
      places: [
        "Chennai", "Tiruvannamalai", "Salem", "Trichy srirangam", "Chidambaram",
        "Thanjavur", "Kumbakonam", "Nagapattinam", "Pondicherry", "Velankanni",
        "Madurai", "Dindigul", "Rameshwaram", "Kanyakumari", "Nagercoil",
        "Tirunelveli", "Tiruchendur", "Tenkasi kutralam", "Thoothukudi", "Ooty",
        "Kodaikanal", "Theni", "Tirupur", "Palani", "Pollachi", "Coimbatore"
      ]
    },
    {
      name: "KERALA",
      icon: kerala,
      places: [
        "Thekkady", "Munnar", "Alappuzha", "Thiruvananthapuram", "Ernakulam Kochi",
        "AchchanKovil", "Varkala beach", "Kovalam beach", "Guruvayur", "Idukki",
        "Kozhikode", "Thrissur", "Kollam", "Vagamon", "Jatayu Rock", "Nanda Lake",
        "Alleppey", "Wayanad", "Kovalam", "Athirappilly", "Kumarakom",
        "Pathiramanal", "Palookotta Falls", "Kanthanpara Falls", "Rosemala View Point",
        "Palaruvi Falls"
      ]
    },
    {
      name: "ANDHRA PRADESH",
      icon: andhra,
      places: [
        "Araku Valley", "Lambasingi", "Horsley Hills", "Tirupati", "Lepakshi",
        "Gandikota", "Visakhapatnam", "Machilipatnam", "Kakinada", "Srisailam",
        "Mantralayam", "Maredumilli", "Rollapadu", "Coringa"
      ]
    },
    {
      name: "KARNATAKA",
      icon: karnataka,
      places: [
        "Bangalore", "Mysore", "Murudeshwar", "Coorg", "Nandi Hills", "Gokarna",
        "Belur", "Halebid", "Hampi", "Kappatagudda", "Chikmagalur", "Kabini",
        "Nagarhole", "Bandipur"
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8" id="tourist-places">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
        <div className="relative">
          <div className="absolute border-2 border-white w-40 md:w-80 h-10 md:h-12 left-36 top-1/2 -translate-y-1/2 z-0"></div>
          <h2 className="relative md:text-2xl text-[#FBFF00] font-semibold mb-4 z-10  pr-2">
          OUR SERVICE TOURIST PLACES
          </h2>
        </div>
        </div>

        {/* States Grid */}
        <div className="md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {states.map((state, index) => (
            <div key={index} className="bg-teal-500 rounded-lg overflow-hidden shadow-md">
              {/* State Header */}
              <div className="bg-white p-4 flex items-center">
                <img 
                  src={state.icon} 
                  alt={state.name} 
                  className="w-8 h-8 mr-3 object-contain" 
                />
                <h2 className="text-teal-700 font-bold text-lg md:text-xl">
                  {state.name}
                </h2>
              </div>

              {/* Places List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {state.places.map((place, placeIndex) => (
                    <li 
                      key={placeIndex} 
                      className="flex items-center text-white"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-base md:text-lg font-medium">
                        {place}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
