"use client"
import { getPreviewContent } from "@/content/util"
import React, { useState, useEffect, type ReactNode } from "react"

export default function UnitNarrative({
  content,
  wordLimit = 90,
}: {
  content: ReactNode
  wordLimit?: number
}) {
  const [previewContent, setPreviewContent] = useState<null | ReactNode>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const preview = getPreviewContent(content as ReactNode[], wordLimit)
    setPreviewContent(preview)
  }, [content])

  return (
    <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
      {expanded ? content : previewContent}
      <div
        className="inline-flex font-medium text-purple-500 group"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <span>Read Less {"\u21D1"}</span>
        ) : (
          <span>Read Full Narrative {"\u21D3"}</span>
        )}
      </div>
    </div>
  )
}
