import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="flex h-[2.125rem] items-center gap-2 rounded-sm bg-white px-6 shadow-button-light ring-2 ring-inset ring-white hover:bg-light-gray focus:outline-none focus:outline-gray dark:bg-blue dark:ring-blue dark:hover:bg-dark-blue lg:gap-[0.625rem] lg:rounded-md lg:pl-8 lg:pr-10"
      onClick={() => navigate(-1)}
    >
      <ArrowLeftIcon />
      <span className="text-[0.875rem] lg:text-base">Back</span>
    </button>
  );
}

export default GoBackButton;
