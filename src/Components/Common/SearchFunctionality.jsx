// import React from 'react';
// import Component from '../Component/Component';

// const SearchFunctionality = () => {
//   const handelSearch = (e) => {
//     e.preventDefault()
//     const PropertyName = e.target.search.value;
//     console.log(PropertyName)
//     fetch(`http://localhost:5000/search?search=${PropertyName}`)
//       .then(res => res.json())
//       .then(data => {
//       console.log(data);

//     })

//   }
//     return (
//       <div>
//         <Component>
//           <div
//             style={{
//               backgroundImage:
//                 "url('https://i.ibb.co.com/V0Q6wNJG/image-21.png')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//             className="h-72 text-center"
//           >
//             <div className="">
//               <form onSubmit={handelSearch} className="">
//                 <label className="input rounded-full mt-16">
//                   <svg
//                     className="h-[1em] opacity-50"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                   >
//                     <g
//                       strokeLinejoin="round"
//                       strokeLinecap="round"
//                       strokeWidth="2.5"
//                       fill="none"
//                       stroke="currentColor"
//                     >
//                       <circle cx="11" cy="11" r="8"></circle>
//                       <path d="m21 21-4.3-4.3"></path>
//                     </g>
//                   </svg>
//                   <input
//                     type="search"
//                     name="search"
//                     required
//                     placeholder="Search"
//                     className="w-96"
//                   />
//                 </label>
//                 <button className="btn rounded btn-primary mt-16">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </Component>
//       </div>
//     )
// };

// export default SearchFunctionality;


// // https://i.ibb.co.com/V0Q6wNJG/image-21.png //banner
// // https://i.ibb.co.com/8g223jj4/Rectangle-4.png