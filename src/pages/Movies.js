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
import { Movie } from "@/components/Movies"

function Home() {
  return (
   
    <main  class="font-mono font-bold">

<div id="Navbar">
<Nav />
</div>

<Movie /> 

 <Footer />

    

   


   

   
 





  
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
