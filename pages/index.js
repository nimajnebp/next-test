import { useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import SomeOtherComp from "../components/SomeOtherComp/SomeOtherComp";

export default function Home() {
  const [theme, setTheme] = useState('light');
  const themeContextInitialState = {
    theme, setTheme
  }

  return (
    <ThemeContext.Provider value={themeContextInitialState} >
      <div>
        <SomeOtherComp/>
      </div>
    </ThemeContext.Provider>
  )
}
