// src/components/TitleBar.js
// import React, { useState } from 'react';

// const TitleBar = () => {

//     const[selectTab, setSelectTab]= useState("")
//   const titleBarItems = ["All", "Movies", "TV Shows", "Documentaries", "Favorites"];

//   return (
//     <div className="p-4 shadow-md sticky top-0 z-50 bg-white">
//       <div className="flex space-x-4 overflow-x-auto">
//         {titleBarItems.map((item, index) => (
//           <button
//             key={index}
//             onClick={()=>{setSelectTab(item); console.log(item)}}

//             className="px-4 py-2 text-zinc-900 bg-slate-200  hover:bg-slate-400 rounded focus:outline-none"

//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TitleBar;

// src/components/TitleBar.js
import React, { useState } from "react";

const TitleBar = () => {
  const [selectTab, setSelectTab] = useState("All");
  const titleBarItems = [
    "All",
    "Movies",
    "TV Shows",
    "Documentaries",
    "Favorites",
  ];
  console.log(selectTab)

  return (
    <div className="p-4 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex space-x-4 overflow-x-auto">
        {titleBarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectTab(item)}
            className={`px-4 py-2 rounded focus:outline-none ${
              selectTab === item
                ? "bg-black text-white" // Background black, text white for selected tab
                : "bg-slate-200 text-zinc-900 hover:bg-slate-400" // Default styles
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
