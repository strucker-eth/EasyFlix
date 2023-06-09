import { Nav } from "@/components/header"
import { Landing } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Collection } from "@/components/Collection"
import { Pricing } from "@/components/pricing"
import { Stats } from "@/components/Stats"
import { Steps } from "@/components/Steps"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import { Cart } from "@/components/Cart"
import { Heading } from "@/components/Feature-heading"
import dynamic from "next/dynamic";
import React from "react";
import { CollectionHeader } from "@/components/Collection-header"

function Home() {
  return (
   
    <main  class="font-mono font-bold">

<div id="Navbar">
<Nav />
</div>






<div id= "heading" class="py-10">
  <CollectionHeader /> 
  </div>

  <div id="movie-cards" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  <Collection />
  <Collection />
  <Collection />
  <Collection />
  <Collection />
  <Collection />
  
</div>

<div id="steps">
<Steps /> 
    </div>



 

 <div id="CTA">
 <CTA />
 </div>
 
 
 <Footer />

    

   


   

   
 





  
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
