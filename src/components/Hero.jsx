import Image from "next/image";
import Link from "next/link";

export const Landing = () => {
  return (
    <div className="px-4 py-16 mx-auto ml-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-accent-400">
          <Image src="/img/logo.png" width={30}
              height={50} alt=""></Image>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Buy Your  <span className="inline-block text-deep-purple-accent-400">
              Favorite Movies
              </span> 
              <br />
              On EFlix
             
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Welcome to our online store for movie DVD enthusiasts! We offer an extensive collection of new releases and classics in a variety of genres. Whether you're a fan of action, romance, horror, or comedy, we've got you covered.
            </p>
          </div>
          <div>
            <Link
              href="/Movies"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Browse Collection
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center ml-4 mr-4 justify-center h-auto -mx-14 lg:pl-8">
        <div className="px-3">
            <Image
              className="object-cover w-60 h-60 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/img/Warriors.jpg"
              alt="" width={300}
              height={300}
            ></Image>
          </div>
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/img/WestWorld.jpg"
              alt="" width={300}
              height={300}
            ></Image>
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/img/Strange.jpg"
              alt=""  width={300}
              height={300}
            ></Image>
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/img/Wakanda.jpg"
              alt="" width={300}
              height={300}
            ></Image>
          </div>

        </div>
      </div>
    </div>
)
};