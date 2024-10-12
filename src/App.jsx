import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="w-full max-w-[82rem] bg-light-gray text-very-dark-blue dark:bg-dark-blue dark:text-white">
        <Outlet />
      </main>
    </>
  );
}

export default App;
