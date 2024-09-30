export const metadata = {
  title: "Changelog - Stellar",
  description: "Page description",
}

import Image from "next/image"
import Illustration from "@/public/images/page-illustration.svg"
import CustomerImg02 from "@/public/images/customer-02.svg"
import CustomerBg02 from "@/public/images/customer-bg-02.png"
import CustomerImg03 from "@/public/images/customer-03.svg"
import CustomerBg03 from "@/public/images/customer-bg-03.png"
import CustomerImg06 from "@/public/images/customer-06.svg"
import CustomerBg06 from "@/public/images/customer-bg-06.png"
import GradeCards from "./GradeCards"

export default function GradesAccessPage({
  params,
}: {
  params: { grades: string }
}) {
  const grades = params.grades
  let items
  switch (grades) {
    case "k5":
      break
    case "ms":
      items = [
        {
          name: "Grade 6",
          img: CustomerImg02,
          bg: CustomerBg02,
          link: "/curriculum/ms/grade-6",
        },
        {
          name: "Grade 7",
          img: CustomerImg03,
          bg: CustomerBg03,
          link: "/curriculum/ms/grade-7",
        },
        {
          name: "Grade 8",
          img: CustomerImg06,
          bg: CustomerBg06,
          link: "/curriculum/ms/grade-8",
        },
      ]
      break

    case "hs":

    default:
      break
  }


  return (
    <>
      {/* Content */}
      <section className="relative">
        {/* Radial gradient */}
        <div
          className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
        </div>

        {/* Particles animation */}
        <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
          <canvas data-particle-animation data-particle-quantity="15"></canvas>
        </div>

        {/* Illustration */}
        <div
          className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <Image
            src={Illustration}
            className="max-w-none"
            width={1440}
            height={427}
            alt="Page Illustration"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="text-center pb-12 md:pb-20">
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                {items ? "Launch IM 6-8 Math" : "In Development"}
              </h1>
            </div>

            {/* Content */}
            {items && (
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div
                    className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.65)_25%,_theme(colors.purple.200)_50%,_theme(colors.purple.500/.65)_75%,_transparent)] after:animate-shine"
                    aria-hidden="true"
                  ></div>
                  <GradeCards items={items} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
