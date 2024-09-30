import LessonInfoCard from "@/components/LessonInfoCard"
import Narrative from "@/components/Narrative"
import { getSectionContent } from "@/content/queries"
import renderRTF from "@/content/util"

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

  const narrativeContent = renderRTF(
    sectionNarrative.json,
    sectionNarrative.links
  )

  return (
    <div className="mb-8">
      {/* section header */}
      <div className="flex items-center max-w-2xl gap-3 mb-4">
        <p className="text-lg font-semibold btn-md text-white border-purple-500 border-2 py-1 px-4 rounded-3xl">
          Section {sectionLabel}
        </p>
        <h4 className="h4">{title}</h4>
      </div>
      {/* section goals header and list */}
      {sectionGoals && (
        <div className="mb-4">
          <div className="flex items-center max-w-2xl gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="nonzero">
                <path
                  className="fill-purple-400"
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
        </div>
      )}
      {/* narrative header and content */}
      <div className="mb-4">
        <div className="flex items-center max-w-2xl gap-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <g fill="none" fillRule="nonzero" opacity=".8">
              <path
                className="fill-purple-400"
                d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z"
              />
              <path
                className="fill-purple-400"
                d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z"
              />
            </g>
          </svg>

          <h5 className="text-xl font-semibold">Section Narrative</h5>
        </div>
        <Narrative content={narrativeContent} wordLimit={60} />
      </div>
      {/* lessons card */}
      {
        lessonInfoCollection.items.map(item => {
          const info = {
            lesson:item.lesson,
            title: item.title,
            subtitle: item.subtitle
          }
          return  <LessonInfoCard lessonInfo={info} key={item.lesson}/>
        })
      }
    </div>
  )
}
