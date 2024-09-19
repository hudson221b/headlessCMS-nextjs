import { HighlighterItem } from "./highlighter"
import Particles from "./particles"
import Image from "next/image"

export default function Cta() {
  const items = [
    {
      imageSrc: "/images/carousel-icon-01.svg",
      header: "Preview the curriculum",
      text: "Take a closer look at the IM K-12 Math curricula by previewing the demo curriculum",
    },
    {
      imageSrc: "/images/carousel-icon-02.svg",
      header: "Select and connect with an IM Certified partner",
      text: "Pick certified distribution partners who offers online platforms ans sell the print resources",
    },
    {
      imageSrc: "/images/carousel-icon-03.svg",
      header: "Choose IM Certified professional learning",
      text: "Reach out to your IM Certified partner to schedule professional learning opportunities",
    },
    {
      imageSrc: "/images/carousel-icon-04.svg",
      header: "Access the IM Certified curricula and start implementation",
      text: "Start implementing IM's high quality, problem-based core curriculum",
    },
  ]
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          {/* Radial gradient */}
          <div
            className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
          </div>
          {/* Blurred shape */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs5-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs5-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-full mx-auto text-center">
            <div>
              {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                The security first platform
              </div> */}
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-400 mb-8">Follow steps below</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
              {items.map(item => (
                <HighlighterItem className="min-h-full">
                  <div className="h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      // refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={item.imageSrc}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1 text-left">
                          {item.header}
                        </div>
                        <div className="text-slate-400 mb-3 text-left">
                          {item.text}
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
