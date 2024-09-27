export default function Section({ sectionId }: { sectionId: string }) {
  // make call to fetch all section content
  return (
    <>
      <h4 className="h4">Section {sectionId}</h4>
      <h3>Section Goals header</h3>
      <h3>Section Narrative header</h3>
      <div>lessons link</div>
    </>
  )
}
