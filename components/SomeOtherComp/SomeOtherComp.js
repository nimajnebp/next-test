import { useTheme } from "../../hooks/theme";

function SomeOtherComp() {
  const { setTheme, theme } = useTheme();
  const handleThemeToggle = () => setTheme(prev => prev === "light" ? "dark" : "light");

  return <div>
    <div>Some other comp</div>
    <div><pre>{JSON.stringify(theme, null, 2)}</pre></div>
    <div>
      <button type='button' onClick={handleThemeToggle}>Toggle theme</button>
    </div>
  </div>
}

export default SomeOtherComp;
