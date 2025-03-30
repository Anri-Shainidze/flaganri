import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./components/objects/Index";
import FlagInfo from "./components/flag-info/FlagInfo";
import Header from "./components/Header/Header";
import bra from "../src/assests/brazil.png";
import ger from "../src/assests/germany.png";
import ice from "../src/assests/iceland.png";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const darkTheme = {
  // Define dark theme colors
  background: "#2b3844",
  text: "#ffffff",
};


const lightTheme = {
  // Define light theme colors
  // You can customize these colors as needed
  background: "#ffffff",
  text: "#2b3844",
};

const GlobalStyle = createGlobalStyle`
/* Adjust styles for inputs or other global elements */


input, button, select, textarea, .flag ,.france,header,h1,{
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 6px;
  }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
  .countries-container h1 {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
    }
    span{
    color:${(props) => props.theme.text}
    }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    false
    // Check for user preference or system 
  ); // Default to light mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the theme state
    // This will trigger a re-render and apply the new theme
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* ThemeProvider wraps the entire app to provide theme context */}
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <div className="forms">
        <input type="text" placeholder="search for a country" />
      </div>
      <div className="countr-firsconts">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Index
                  props={{
                    name: "Iceland",
                    population: "91,770,900",
                    region: "Europe",
                    subRegion: "Western Europe",
                    capital: "Berlin",
                    domain: ".de",
                    currencie: "Euro",
                    languages: "German",
                    img: ice,
                  }}
                />
                  <Index
                    props={{
                      name: "Germany",
                      population: "91,770,900",
                      region: "Europe",
                      subRegion: "Western Europe",
                      capital: "Berlin",
                      domain: ".de",
                      currencie: "Euro",
                      languages: "German",
                      img: ger,
                    }}
                  />

                <Index
                  props={{
                    name: "Brazil",
                    population: "206.135.893",
                    region: "America",
                    subRegion: "North America",
                    capital: "Brasilia",
                    domain: ".us",
                    currencie: "US Dollar",
                    languages: "English",
                    img: bra,
                  }}
                />
              </>
            }
          />
          <Route
            path="/germany"
            element={
              <Index
                props={{
                  name: "Germany",
                  population: "81,770,900",
                  region: "Europe",
                  subRegion: "Western Europe",
                  capital: "Berlin",
                  domain: ".de",
                  currencie: "Euro",
                  languages: "German",
                  img: ger,
                }}
              />
            }
          />
          <Route
            path="/iceland"
            element={
              <Index
                props={{
                  name: "Iceland",
                  population: "81,770,900",
                  region: "Europe",
                  subRegion: "Western Europe",
                  capital: "Berlin",
                  domain: ".de",
                  currencie: "Euro",
                  languages: "German",
                  img: ice,
                }}
              />
            }
          />

          <Route path="/flag-info" element={<FlagInfo />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
