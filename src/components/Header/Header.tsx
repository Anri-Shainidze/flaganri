import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./Header.css";


const darkTheme = {
  // Define dark theme colors
  // You can customize these colors as needed
  // These are the colors used in the dark mode
  // You can customize these colors as needed
  // Define dark theme colors
  // You can customize these colors as needed
  // These are the colors use in the dark mode

  background: "#2b3844",
  // Background color for dark mode
  text: "#ffffff",
};

const lightTheme = {

  background: "#ffffff",
  // Define light theme colors
  text: "#2b3844",
};


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    /* Apply the theme colors to the body */
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
    /* Smooth transition for theme changes */
  }

  /* Adjust styles for inputs or other global elements */
  input, button, select, textarea {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    /* Apply the theme colors to inputs and buttons */
    border: 1px solid ${(props) => props.theme.text};
    /* Use the theme text color for borders */
    padding: 10px;
    border-radius: 5px;
    
  }
`;

interface HeaderProps {
  toggleTheme: () => void;
  // Define the type of the toggleTheme function prop
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to manage dark mode


  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the dark mode state
    toggleTheme(); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* ThemeProvider wraps the entire app to provide theme context */}
      {/* The theme is determined by the current state of isDarkMode */}
      <GlobalStyle />
      {/* Global styles are applied here based on the current theme */}
      <header>
        <nav>
          <h2 style={{fontSize:"15px"}}>Where in the World</h2>
          
          <div className="button" onClick={handleToggleTheme}>
            {/* This div acts as a button to toggle the theme */}
            <FaMoon
              style={{
                color: isDarkMode ? "#ffffff" : "#2b3844",cursor:"pointer"
                // Change the icon color based on the theme
              }}
            />
            <span>dark Mode</span>
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
};

export default Header;
