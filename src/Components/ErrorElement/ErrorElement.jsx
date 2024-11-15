

const ErrorElement = () => {
    return (
        <main className="flex items-center justify-center w-full min-h-screen py-8 text-gray-900 page md:py-16">
      <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
        {/* 404 Text */}
        <h1 className="text-9xl md:text-[300px] w-full select-none text-center font-black text-gray-400">
          404
        </h1>
        {/* Title */}
        <p className="text-3xl font-bold capitalize">
          You have discovered a secret place
        </p>
        {/* Description */}
        <p className="text-2xl font-medium break-words text-dull">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        {/* Buttons */}
        <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:gap-32 xl:px-16">
          {/* Go Back Button */}
          <a
            href="/"
            className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl"
          >
            <span className="rotate-180 material-symbols-outlined"></span>
            Go back to Previous Page
          </a>
          {/* Go Home Button */}
          <a
            href="/"
            className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-green-500 rounded shadow-lg md:w-fit hover:bg-green-500 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl"
          >
            <span className="material-symbols-outlined">home</span>
            Go back to Home Page
          </a>
        </div>
      </div>
    </main>
    );
};

export default ErrorElement;