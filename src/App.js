import React from 'react';
// import logo from './logo.svg';
import SiteHeader from './components/SiteHeader';
import Container from './pages/Container';
import "./sass/main.sass";

import { useContext } from 'react';

const ThemeContext = React.createContext("pink");

export default function App() {
  // Declare a new state variable, which we'll call "count"
  // const [theme, setTheme] = useState(theme);
  const theme = useContext(ThemeContext);  
 
  return (
    <div className={theme}>
       <SiteHeader />
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <Container />
    </div>
  );
}
