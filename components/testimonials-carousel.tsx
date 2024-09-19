
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import CarouselImg05 from '@/public/images/carousel-icon-05.svg'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function TestimonialsCarousel() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Integrating curriculum, professional learning, and community
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              The IM Certified® Experience
            </h2>
            <p className="text-lg text-slate-400">
              Illustrative Mathematics is a nonprofit organization founded on
              the belief that all students are capable of learning grade-level
              mathematics. Our innovative problem-based K–12 curriculum is
              designed to energize math classrooms and equip students with
              critical skills, understandings, and practices that can benefit
              them for a lifetime. The IM Certified® Experience leads students
              to this enduring math proficiency by giving educators exclusive
              access to engaging content, comprehensive professional learning,
              and an inclusive community of scholars working together to build a
              world where all learners know, use, and enjoy mathematics.
            </p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}

          {/* Arrows */}
        </div>
      </div>
    </section>
  )
}