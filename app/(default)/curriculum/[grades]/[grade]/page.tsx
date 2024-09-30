import { headers } from "next/headers"
import { getUnitsForGrade } from "@/content/queries"
import GradeUnitsCard, { type GradeUnitsCardProps } from "./GradeUnitsCard"
import { CARDCOLORS } from "@/public/card-colors"

export const dynamic = "force-dynamic"

/**
 * Page to display all units for certain grade
 */
export default async function GradePage({
  params,
}: {
  params: { grade: string; grades: string }
}) {
  // headers is an empty object unless force dynamic is enabled
  const headersList = headers()
  const currentPathname = headersList.get("x-current-path")
  const grade = params.grade.split("-")[1]
  const data = await getUnitsForGrade(grade)
  const unitItems: GradeUnitsCardProps["unitItem"][] =
    data.unitLessonsCollection.items.map(item => {
      const sectionTitles = item.sectionCollection.items.map(
        section => section.title
      )
      const colorIndex = (item.unit - 1) % 9

      return {
        grade,
        unit: item.unit,
        unitTitle: item.unitTitle,
        sectionTitles,
        gradientColors: CARDCOLORS[colorIndex],
      }
    })

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32">
        <div className="pb-12 md:pb-20">
          <div>
            <div className="mt-12 md:mt-16">
              <h1 className="scroll-mt-8 text-4xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                {`Grade ${grade} units`}
              </h1>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {unitItems.map(unit => (
                  <GradeUnitsCard
                    unitItem={unit}
                    href={`${currentPathname}/unit-${unit.unit}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
