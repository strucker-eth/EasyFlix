import Image from 'next/image';
import Link from 'next/link';
export const Nav = () => {
      
    return (
      <header class=" min-w-full mb-2">
      <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <Link href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
        
        <Image src="/img/logo.png" width={50}
              height={50} alt=""></Image>
          <span class="text-black">EFlix</span>
        </Link>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
          <span class="sr-only">Toggle Navigation</span>
          
        </label>
        <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
     
<ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
  <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link href="/Movies">Movies</Link></li>
  <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link href="/Cart">Cart</Link></li>
  <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link href="/Checkout">Checkout</Link></li>
  <li className="text-gray-600 md:mr-12 hover:text-blue-600">
    <button className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"><Link href="/Login">Login</Link></button>
  
  </li>
  <li className="text-gray-600 md:mr-12 hover:text-blue-600">
    <button className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"><Link href="/Register">Sign up</Link></button>
  </li>
</ul>

        </nav>
      </div>
    </header>
    )
  };