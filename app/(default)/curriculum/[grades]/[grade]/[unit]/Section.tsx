export default function Section({ sectionId }: { sectionId: string }) {
  // make call to fetch all section content
  return (
    <div className="mb-6">
      <div className="flex items-center max-w-2xl gap-3">
        <p className="text-lg font-semibold btn-md text-white border-purple-500 border-2 py-2 px-4 rounded-3xl">
          Section A{" "}
        </p>
        <h4 className="h4">{sectionId}</h4>
      </div>
      <h3>Section Goals header</h3>
      <h3>Section Narrative header</h3>
      <div>lessons link</div>
    </div>
  )
}
