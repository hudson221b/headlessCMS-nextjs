import Image from "next/image"
import Particles from "@/components/particles"
import Section from "./Section"
import { getUnitIds, getUnitNarrative } from "@/content/queries"
import Narrative from "@/components/Narrative"
import renderRTF from "@/content/util"
import type { RtfLinks } from "@/types"


export default async function UnitPage({
  params,
}: {
  params: { unit: string; grade: string }
}) {
  const { grade, unit } = params
  const gradeNumber = grade.split("-")[1]
  const unitNumber = unit.split("-")[1]
  const data = await getUnitIds(gradeNumber, parseInt(unitNumber))
  // fetch and parse unit narrative
  const unitEntryId = data.unitLessonsCollection.items[0].sys.id
  const unitNarrarive = await getUnitNarrative(unitEntryId)
  const contentJson = unitNarrarive.unitLessons.unitNarrarive.json
  const links: RtfLinks = unitNarrarive.unitLessons.unitNarrarive.links
  const parsedRTF = renderRTF(contentJson, links)
  const unitTitle = data.unitLessonsCollection.items[0].unitTitle

  const sectionIds =
    data.unitLessonsCollection.items[0].sectionCollection.items.map(
      item => item.sys.id
    )

  return (
    <>
      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          <div className="md:flex md:justify-between">
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-4xl">
                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
                  <div className="mb-4 text-purple-500 h3">
                    Unit {unitNumber}
                  </div>
                  <header>
                    <h2 className="h2 inline-flex pb-4">{unitTitle}</h2>
                  </header>
                  <h4 className="h4">Unit Narrative</h4>
                  <Narrative content={parsedRTF} />
                </article>
                {sectionIds.map(id => (
                  <Section sectionId={id} key={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
