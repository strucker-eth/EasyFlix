import Link from "next/link";

export const Footer = () => {
  return(
    
<footer class="relative mt-20 bg-gray-900 px-4 pt-20">
   <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <Link href="/" class="font-medium text-white">Home</Link>
    <Link href="/Movies" class="font-medium text-white">Movies</Link>
    <Link href="/Cart" class="font-medium text-white">Cart</Link>
    <Link href="/Checkout" class="font-medium text-white">Checkout</Link>
  </nav>
  <p class="py-10 text-center text-gray-300">© 2023 EFlix | All Rights Reserved</p>
</footer>


    )
  };