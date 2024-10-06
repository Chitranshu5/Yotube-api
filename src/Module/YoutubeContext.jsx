import React, { createContext, useState } from "react";

const YoutubeContext = createContext();

const YoutubeProvider = ({ children }) => {
  const [search, setSearch] = useState("Govinda Comedy Movie");

   

   



  return (
    <YoutubeContext.Provider value={{ search, setSearch }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export { YoutubeContext, YoutubeProvider };
