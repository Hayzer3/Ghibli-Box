'use client';

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "./carousel.css"
import {ChevronLeft, ChevronRight} from 'lucide-react'

interface CarouselProps {
  children: React.ReactNode;
}

export function EmblaCarousel({children}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef} >
        <div className="embla__container">
            {React.Children.map(children, (child) => (
                <div className='embla__slide'>
                    {child}
                </div>
            ))}
        </div>
      </div>

      {/* <div className="flex gap-5 mt-5">
          <button className="p-2 rounded-full bg-white shadow" onClick={scrollPrev}>
            <ChevronLeft size={20}/>
          </button>
          <button className="p-2 rounded-full bg-white shadow" onClick={scrollNext}>
            <ChevronRight size={20}/>
        </button>
      </div> */}
    </div>
  )
}