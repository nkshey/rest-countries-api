import UpArrowIcon from "../icons/UpArrowIcon";

function ScrollToTopButton() {
  return (
    <button
      className="fixed bottom-5 right-5 z-[9999] grid h-12 w-12 place-items-center rounded-full bg-white text-very-dark-blue shadow-button transition-colors duration-100 hover:bg-blue hover:text-white dark:bg-blue dark:text-white dark:hover:bg-white dark:hover:text-very-dark-blue lg:bottom-8 lg:right-8 lg:h-16 lg:w-16"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <UpArrowIcon />
    </button>
  );
}

export default ScrollToTopButton;
