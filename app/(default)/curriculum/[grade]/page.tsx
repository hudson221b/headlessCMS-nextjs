import GradeUnitsCard, { type GradeUnitsCardProps } from "./GradeUnitsCard"

export default function GradePage({ params }: { params: { grade: string } }) {
  const grade = params.grade.split("-")[1]

  const unitItems: GradeUnitsCardProps["unitItem"][] = [
    {
      grade: "7",
      unit: 1,
      unitTitle: "Scale Drawings",
      sectionTitles: ["foo", "bar", "foo", "bar"],
      gradientColors: ["#5127fc", "#8233c9"],
    },
  ]
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
                  <GradeUnitsCard unitItem={unit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
