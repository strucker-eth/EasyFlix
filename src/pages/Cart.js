import { Nav } from "@/components/header"
import { Landing } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Peek } from "@/components/Peek"
import { Pricing } from "@/components/pricing"
import { Stats } from "@/components/Stats"
import { Steps } from "@/components/Steps"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import { Cart } from "@/components/Cart"
import { Heading } from "@/components/Headings"
import dynamic from "next/dynamic";
import React from "react";


function Home() {
  return (
   
    <main  class="font-mono font-bold">

<div id="Navbar" class="w-full">
<Nav />
</div>

<div id="cart" class="justify-center items-center w-full py-20 my-15 ">
<Cart />

</div>

 
<div id="footer" class="w-full">
 <Footer />
 </div>
    

   


   

   
 





  
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
