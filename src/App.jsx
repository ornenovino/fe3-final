import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import ThemeContext, { themes } from "./Contexts/themeContext";
import DataContext from "./Contexts/dataContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

function App() {

  const [theme, setThemes] = useState(themes.light);

  function handleChangeTheme() {
    theme === themes.light ? setThemes(themes.dark) : setThemes(themes.light)
  }

  function reducer(state, action){
    switch(action.type){
      case "set_data":
        let data;
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>  {data = {data: json}})
        console.log({data})
        return data;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {theme: themes.light, data: []})

  useEffect(() => {
    dispatch({type: "set_data"})
  }, [])

  return (
    <div className="App">
      <DataContext.Provider value={{ data: state?.data }} >
        <ThemeContext.Provider value={{ theme: state?.theme, handleChangeTheme }} >
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
      </DataContext.Provider>
    </div>
  );
}

export default App;
