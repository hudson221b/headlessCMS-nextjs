type Props = {
  sectionInfo: {
    _id: string
    grade: string
    unit: number
    sectionLabel: string
    sectionGoals: string[]
    title: string
  }
}

export default function Section({ sectionInfo }: Props) {
  const { _id, grade, unit, sectionLabel, sectionGoals, title } = sectionInfo
  return (
    <>
      <h4 className="h4">
        Section {sectionLabel} {title}
      </h4>
      <h3>Section Goals header</h3>
      <h3>Section Narrative header</h3>
      <div>lessons link</div>
    </>
  )
}
