import { useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import Page from "./components/Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App