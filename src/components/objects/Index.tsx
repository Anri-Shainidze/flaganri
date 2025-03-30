import "./Flag.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Flag } from "./Flag";

const Index: React.FC<{ props: Flag }> = ({ props }) => {
  const navigate = useNavigate();
  // Using useNavigate to programmatically navigate to another route
  const handleFlagClick = () => {
    navigate('/flag-info', { state: props });
  };

  return (
    // This component displays a flag card with its details.
    <div className="card-flag">
      <div className="flag" onClick={handleFlagClick}>
        {/* The flag image is displayed here */}
        <img
          src={props.img}
          alt={`Flag of ${props.name}`}
        />
        <div 
          onClick={handleFlagClick}
          className="text-flags"
          style={{cursor:"pointer"}}
        // This div contains the text details of the flag
        >
          {/* Display the flag name and other details */}
          <h1>{props.name}</h1>
          <span>Population: {props.population}</span>
          <span>Region: {props.region}</span>
          <span>Capital: {props.capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Index;