import React from 'react'
import { Button } from '../components/ui/button'
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import { Link } from "react-router-dom"
import componies from '../Data/componies.json'
import faqs from '../Data/faq.json'
import Autoplay from "embla-carousel-autoplay"
import { Card,CardContent,CardTitle,CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const LandingPage = () => {
  return (
      <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 '>  
        <section className='text-center'>
          <h1 className='flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 via-gray-200 to-white gradient text-transparent bg-clip-text text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tight py-4'>
            Find Your Dream Job <span><img src="/logo.png" alt="Compony Logo" className='h-14 sm:h-24 lg:h-32' /></span></h1>
          <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
            - Explore Thousand of Job Listing or Find The Perfect Candidate -
          </p>
        </section>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Link to="/job" className="w-full sm:w-[220px]">
            <Button variant="blue" size="xl" className='w-full cursor-pointer'>Find Jobs</Button>
          </Link>
          <Link to="/post-job" className="w-full sm:w-[220px]">
            <Button variant="destructive" size="xl" className='w-full cursor-pointer'>Post a Jobs</Button>
          </Link>
        </div>
        
         <Carousel plugins={[  Autoplay({ delay: 2000})]}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
       {componies.map(({name,id,path})=>{
        return <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">  
          <img src={path} alt={name} className='h-9 sm:h-14 object-contain' />
        </CarouselItem>
       })}
      </CarouselContent>
    </Carousel>
        {/* {banner} */}
        <img src="./componies/banner.png" className='w-full' />
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'> 
          <Card>
  <CardHeader>
    <CardTitle>Job Hirring</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Search and apply for jobs</p>
  </CardContent>
</Card>
      <Card>
  <CardHeader>
    <CardTitle>For Employers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Post Jobs</p>
  </CardContent>
</Card>
        </section>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index)=>{
return(
  <AccordionItem key={index} value={`item-${index + 1}`}>
    <AccordionTrigger>{faq.Qus}</AccordionTrigger>
    <AccordionContent>{faq.Ans}</AccordionContent>
  </AccordionItem>
)
          })}
</Accordion>
      </main>
      )
}

export default LandingPage
