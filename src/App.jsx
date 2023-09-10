import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import ThemeContext, { themes } from "./Contexts/themeContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";


function App() {

  const [theme, setThemes] = useState(themes.light);

  function handleChangeTheme() {
    theme === themes.light ? setThemes(themes.dark) : setThemes(themes.light)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, handleChangeTheme }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dentist/:id" element={<Detail />} />
              <Route path="favs" element={<Favs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
