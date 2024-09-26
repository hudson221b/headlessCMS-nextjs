import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import CustomerImg02 from "@/public/images/customer-02.svg"
import CustomerBg02 from "@/public/images/customer-bg-02.png"
import CustomerImg03 from "@/public/images/customer-03.svg"
import CustomerBg03 from "@/public/images/customer-bg-03.png"
import CustomerImg06 from "@/public/images/customer-06.svg"
import CustomerBg06 from "@/public/images/customer-bg-06.png"
import Particles from "@/components/particles"
import Highlighter, { HighlighterItem02 } from "@/components/highlighter"

type Props = {
  items: {
    name: string
    img?: string
    bg: StaticImageData
    link: string
  }[]
}
export default function GradeCards({ items }: Props) {
  return (
    <aside>
      <div className="mx-auto sm:max-w-[728px] lg:max-w-none">
        <Highlighter className="grid gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-3 group">
          {items.map((grade, index) => (
            <div key={index}>
              <Link href={grade.link}>
                <HighlighterItem02>
                  <Link
                    className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                    href={grade.link}
                  >
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10"
                      quantity={3}
                    />
                    <div className="flex items-center justify-center h-32 lg:h-36">
                      <Image
                        className="w-full h-full aspect-video object-cover"
                        src={grade.bg}
                        width={352}
                        height={198}
                        alt="Customer Background"
                        aria-hidden="true"
                      />
                      {/* <Image
                        className="absolute"
                        src={grade.img || CustomerImg02}
                        alt={grade.name}
                      /> */}
                      <h3 className="absolute h3">{grade.name} </h3>
                    </div>
                  </Link>
                </HighlighterItem02>
              </Link>
            </div>
          ))}
        </Highlighter>
      </div>
    </aside>
  )
}
