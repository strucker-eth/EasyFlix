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

function Home() {
  return (
   
    <main  class="font-mono font-bold">

     <Nav />

     <Landing />

    <Features />    

    <Heading />
<div id="movies" class="grid grid-cols-3">
  <Peek> </Peek>
  <Peek> </Peek>
  <Peek> </Peek>
  <Peek> </Peek>
  <Peek> </Peek>
  <Peek> </Peek>
     
</div>
   

    <Steps /> 
    
    <Pricing />

    <Stats />

    <CTA />

    <Footer />
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
