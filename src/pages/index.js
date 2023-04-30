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

<div id="Navbar">
<Nav />
</div>

<div id="Hero">
  <Landing />
</div>

<div id= "features">
  <Features /> 
</div>

<div id= "heading">
  <Heading /> </div>

  <div id="movie-cards" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  <Peek />
  <Peek />
  <Peek />
  <Peek />
  <Peek />
  <Peek />
</div>

<div id="steps">
<Steps /> 
    </div>

<div id="pricing">
<Pricing />
</div>

 <div id="stats">
 <Stats />
 </div>

 <div id="CTA">
 <CTA />
 </div>
 
 <div id="footer">
 <Footer />
 </div>
    

   


   

   
 





  
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
