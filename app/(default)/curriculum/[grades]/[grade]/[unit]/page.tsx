import Link from "next/link"
import Image from "next/image"
import Illustration from "@/public/images/page-illustration.svg"
import Particles from "@/components/particles"
import Section from "./Section"
import { getUnitIds} from "@/content/queries"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import UnitNarrative from "./UnitNarrative"
export default async function UnitPage({
  params,
}: {
  params: { unit: string; grade: string }
}) {
  const { grade, unit } = params
  const gradeNumber = grade.split("-")[1]
  const unitNumber = unit.split("-")[1]
  const data = await getUnitIds(gradeNumber, parseInt(unitNumber))
  const unitId = data.unitLessonsCollection.items[0]._id
  const unitTitle = data.unitLessonsCollection.items[0].unitTitle
  const sectionInfo = data.unitLessonsCollection.items[0].sectionCollection.items

  return (
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
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

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
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          <div className="md:flex md:justify-between">
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-3xl">
                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
                  <div className="mb-4 text-purple-500 h3">
                    Unit {unitNumber}
                  </div>
                  <header>
                  <h2 className="h2 inline-flex pb-4">{unitTitle}</h2>
                  </header>
                  <h4 className="h4">Unit Narrative</h4>
                  <UnitNarrative unitId={unitId} />
                </article>
                {sectionInfo.map(info => (
                  <Section sectionInfo={info} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
