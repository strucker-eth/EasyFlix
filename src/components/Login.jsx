import Link from "next/link"
import Image from "next/image"


export const Login = () => {
    return(
        <div class="flex w-screen flex-wrap mb-20 text-slate-800">
  
  <div class="relative hidden h-screen select-none mt-5 w-1/2 rounded-xl bg-deep-purple-600 mx-auto bg-gradient-to-br md:block md:w-1/2">
    <div class="py-16 px-8 text-white xl:w-[40rem]">
      <span class="rounded-full bg-white px-3 py-1 font-medium text-deep-purple-600">Login</span>
      <p class="text-center text-3xl font-bold mt-3 md:leading-tight md:text-left md:text-5xl">
        Welcome back <br />
      <span class="">  to EasyFlix</span>
      </p>
      <p class="my-6 text-3xl font-semibold leading-10">Sign In to <span class="abg-white whitespace-nowrap py-2 text-white">Your account</span>.</p>
      
    </div>
  
  </div>
  <div class="flex w-full flex-col md:w-1/2">
   
    <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
      
      <p class="mt-6 text-cFnter font-medium md:text-left">Sign in to your account below.</p>

      <form class="flex flex-col items-stretch pt-3 md:pt-8">
        <div class="flex flex-col pt-4">
          <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-deep-purple-500">
            <input type="email" id="login-email" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div class="mb-4 flex flex-col pt-4">
          <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-deep-purple-500">
            <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
          </div>
        </div>
        <Link href="/Movies" class="mb-6 text-center text-sm font-medium text-gray-600 md:text-left">Forgot password?</Link>
        <Link href="/Movies" >     <button type="submit" class="rounded-lg bg-deep-purple-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
      </Link>   
      </form>
      <div class="py-12 text-center">
        <p class="text-gray-600">
          Don&apos;t have an account?
          </p>
        
        <Link href="/Register" class="whitespace-nowrap font-extrabold text-gray-900 ">Sign up for free.</Link>
    
      
      </div>
    </div>
  </div>
</div>

    )
}