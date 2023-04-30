export const Landing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">recent releases</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
            Welcome to  <span className="inline-block text-deep-purple-accent-400">EasyFlix, </span>
              <br className="hidden md:block" />
               the One Stop Shop{' '}
              <span className="inline-block text-deep-purple-accent-400">For Movie Lovers! </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Our online store offers a vast selection of DVDs, from classic films to the latest releases. Browse our catalog to discover your next favorite movie, and enjoy easy checkout and fast shipping. </p>
          </div>
          <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Movies
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            How Does it Work?
          </a>
        </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
          </div>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};