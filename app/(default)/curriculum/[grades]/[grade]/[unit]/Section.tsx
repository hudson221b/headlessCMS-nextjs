import { getSectionContent } from "@/content/queries"

export default async function Section({ sectionId }: { sectionId: string }) {
  const data = await getSectionContent(sectionId)
  console.log("#####🚀🚀🚀 ~ Section ~ data👉👉", data)
  const {
    sectionLabel,
    title,
    sectionGoals,
    sectionNarrative,
    lessonInfoCollection,
  } = data.section

  return (
    <div className="mb-6">
      <div className="flex items-center max-w-2xl gap-3 mb-2">
        <p className="text-lg font-semibold btn-md text-white border-purple-500 border-2 py-1 px-4 rounded-3xl">
          Section {sectionLabel}
        </p>
        <h4 className="h4">{title}</h4>
      </div>
      {sectionGoals && (
        <>
          <div className="flex items-center max-w-2xl gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="nonzero">
                <path
                  className="fill-purple-600"
                  d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z"
                />
                <path
                  className="fill-purple-400"
                  d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                />
              </g>
            </svg>

            <h5 className="text-xl font-semibold">Section Goals</h5>
          </div>
          <ul className="list-disc list-outside pl-[38px] text-slate-400">
            {sectionGoals.map(goal => (
              <li>{goal}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Section Narrative header</h3>
      <div>lessons link</div>
    </div>
  )
}
