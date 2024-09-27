import { getUnitNarrative } from "@/content/queries"
import { useState, useEffect } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default async function UnitNarrative({ unitId }: { unitId: string }) {
  return (
    
    <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
      unit narrative content {unitId}
    </div>
  )
}
