import { getUnitNarrative } from "@/content/queries"
import RenderRTF from "@/components/RenderRTF"

export default async function UnitNarrative({ unitId }: { unitId: string }) {
  const data = await getUnitNarrative(unitId)
  const contentJson = data.unitLessons.unitNarrarive.json
  const links = data.unitLessons.unitNarrarive.links

  return (
    <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
      <RenderRTF json={contentJson} links={links} />
    </div>
  )
}
