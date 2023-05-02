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

import dynamic from "next/dynamic";
import React from "react";
import { Checkout } from "@/components/Checkout"

function Home() {
  return (
   
    <main  class="font-mono font-bold">

<div id="Navbar">
<Nav />
</div>

<div id="checkout" class="mb-40">
    <Checkout />
</div>
 
 <div id="footer">
 <Footer />
 </div>
    

   


   

   
 





  
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
