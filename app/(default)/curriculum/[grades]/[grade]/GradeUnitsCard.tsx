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
  const { unit, unitTitle, sectionTitles, gradientColors } = unitItem
  return (
    <div
      key={unit}
      className="w-full max-w-md rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
    >
      {/* unit header */}
      <div className="w-full ml-[8px] py-2 px-5 text-white text-xl font-bold">
        {`Unit ${unit}`}
      </div>
      {/* white bg block */}
      <div
        className="w-full h-full border-l-[8px] border-r-[2px] border-b-[2px] py-3 px-5 bg-white rounded-br-3xl text-slate-900"
        style={{
          borderLeftColor: gradientColors[0],
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
        <ul className="list-disc list-outside px-5">
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
