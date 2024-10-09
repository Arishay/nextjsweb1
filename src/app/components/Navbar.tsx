import React from "react";
export default function Navbar() {
  return (
//     <div>
//       <div className="grid xl:grid-cols-1 grid-cols-1">
//         <div className="p-5">
//           <div className="py-3 px-3 rounded-xl border w-full">
//             <div className="flex justify-between items-center">
//               <div className="flex justify-items-center items-center gap-8"></div>
// {/*logo burger */}              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
<div className="flex justify-items-center items-center justify-around p-6 bg-orange-200">
  <h3 className="w-6 h-6 text-2xl font-extrabold text-orange-400">Pizzeria</h3>
  <ul className="flex justify-items-center items-center gap-6  ">
    <li className="hover:bg-orange-300 px-5 py-2 hover:text-white "><b>About</b></li>
    <li className="hover:bg-orange-300 px-5 py-2 hover:text-white"><b>Contact</b></li>
    <li className="hover:bg-orange-300 px-5 py-2 hover:text-white"><b>Offer</b></li>
    <li className="bg-orange-400 px-4 py-2 text-white font-semibold hover:bg-orange-200 hover:text-black "><button>Buy Now</button></li>
  </ul>
</div>
  );
}
