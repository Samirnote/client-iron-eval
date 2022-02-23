import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import "./../styles/search-bar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  

  const handleSearch = () => {
    console.log("search", input);
    navigate(`/search/?query=${input}`)
  };

  return (
    <div className="search-bar">
      <input className="input" type="text" onChange={(e) => setInput(e.target.value)} />
      <Button handler={handleSearch}>&nbsp;&nbsp;find&nbsp;&nbsp;</Button>
    </div>
  );
};

export default SearchBar;
