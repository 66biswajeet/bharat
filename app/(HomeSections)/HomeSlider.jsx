"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CldImage } from "next-cloudinary"

const HomeSlider = () => {
  const desktopSlides = [
    {
      id: 1,
      src: "slider/desktop/k445tegksaylb7zvwrqe",
      alt: "Helping for birthday celebration",
    },
    {
      id: 2,
      src: "slider/desktop/zbkqakjqxhb8jr9pycrg",
      alt: "Helping for abondand cows",
    },
    {
      id: 3,
      src: "slider/desktop/o4z9s0yb8zfdg8caxy6p",
      alt: "Childerens getting shelter",
    },
  ]

  const mobileSlides = [
    {
      id: 1,
      src: "slider/mobile/pre6a7pi8os9moqiuqtu",
      alt: "Helping for birthday celebration",
    },
    {
      id: 2,
      src: "slider/mobile/qsntvracsakopg2askv1",
      alt: "Helping for abondand cows",
    },
    {
      id: 3,
      src: "slider/mobile/njhneo5ilbb2buzxtjbn",
      alt: "Childerens getting shelter",
    },
  ]
  return (
    <section>
      <Carousel
        className='hidden lg:block h-[80vh]'
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent className='h-[80vh]'>
          {desktopSlides.map((slides) => (
            <CarouselItem key={slides.id}>
              <CldImage
                src={slides.src}
                alt={slides.alt}
                className='w-full h-full'
                width={1000}
                height={10}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        className='block lg:hidden h-[80vh]'
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent className='h-[80vh] '>
          {mobileSlides.map((slides) => (
            <CarouselItem key={slides.id} className='w-full h-full m-0'>
              <CldImage
                src={slides.src}
                alt={slides.alt}
                className='w-full h-full'
                width={1000}
                height={10}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default HomeSlider
