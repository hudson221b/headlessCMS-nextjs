export type GradeUnitsCardProps = {
  unitItem: {
    grade: string
    unit: number
    unitTitle: string
    sectionTitles: string[]
    gradientColors: [string, string]
  }
}
export default function GradeUnitsCard({ unitItem }: GradeUnitsCardProps) {
  const { grade, unit, unitTitle, sectionTitles, gradientColors } = unitItem
  return (
    <div
      key={unit}
      className="w-full max-w-md rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
    >
      {/* unit header */}
      <div className="ml-2 py-3 pl-5 text-white text-xl font-bold">
        {`Unit ${unit}`}
      </div>
      {/* white bg block */}
      <div
        className="ml-2 py-3 px-5 bg-white w-100 rounded-br-3xl border-r-[2px] border-b-[2px] text-slate-900"
        style={{
          borderRightColor: gradientColors[1],
          borderBottomColor: gradientColors[0],
        }}
      >
        {/* unit title  */}
        <p className="font-bold text-lg">{unitTitle}</p>
        {/* divider */}
        <div
          className="h-[2px] my-2"
          style={{
            background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
          }}
        ></div>

        {/* section titles */}
        <ul className="list-disc list-inside">
          {sectionTitles.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
