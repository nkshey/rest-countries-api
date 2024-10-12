import { useNavigate } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";

function GoHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex h-[2.125rem] w-[2.125rem] items-center justify-center gap-2 rounded-sm bg-white shadow-button-light ring-2 ring-inset ring-white hover:bg-light-gray focus:outline-none focus:outline-gray dark:bg-blue dark:ring-blue dark:hover:bg-dark-blue lg:rounded-md"
    >
      <HomeIcon />
    </button>
  );
}

export default GoHomeButton;
