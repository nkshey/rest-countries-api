import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-dvh w-full max-w-[87.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4">
      <Link
        to="/"
        className="absolute left-10 top-10 font-semi-bold text-[#1A0DAB] underline-offset-2 hover:underline dark:text-white md:left-14 md:top-14 md:text-xl"
      >
        &larr; Home
      </Link>

      <div className="flex w-full max-w-[31.25rem] flex-col items-center justify-center gap-5">
        <img src="/images/404error.svg" alt="404 error illustration" />

        <a
          href="https://storyset.com/web"
          target="_blank"
          className="self-end text-xs text-very-dark-blue transition-all duration-100 hover:text-very-dark-blue hover:underline dark:text-white"
        >
          Web illustrations by Storyset
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
