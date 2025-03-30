import { useNavigate, useLocation } from "react-router-dom";
import { Flag } from "../objects/Flag";
import { FaLongArrowAltLeft } from "react-icons/fa";

const FlagInfo = (
  // This component displays detailed information about a specific flag.
  // It uses React Router to navigate between pages and to pass data between them.
  // The component receives a flag object through the location state and displays its details.
  // FlagInfoProps: React.FC = (props) =>{}
) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Using useLocation to get the state passed from the previous page
  const props = location.state as Flag;

  const handleBackClick = () => {
    // Function to handle the back button click
    navigate("/");
  };

  return (
    <div className="only-pages">
      <button onClick={handleBackClick} className="">
        {/* Button to go back to the previous page */}
        <FaLongArrowAltLeft /> Back
      </button>

      <div className="flags-information">
        <img src={props.img} alt={`Flag of ${props.name}`} />
        {/* Display the flag image */}
        <div className="everything">
          <div className="firsttextss">
            <h1>{props.name}</h1>
            {/* Display the flag name */}
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Sub Region: {props.subRegion}</p>
            <p>Domain: {props.domain}</p>
            {/* Display other flag details */}
            <p>Currency: {props.currencie}</p>
            <p>Languages: {props.languages}</p>
          </div>
          <div className="borderss">
            {/* Display border countries if any */}
            <h1>Border Countries</h1>
            <div className="inside-border">
              <div className="idk">
                <span>Germany</span>
              </div>
              <div className="idk">
                <span>Netherlands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagInfo;
