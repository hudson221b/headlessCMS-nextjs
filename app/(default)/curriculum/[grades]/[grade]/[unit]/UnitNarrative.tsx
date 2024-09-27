import { getUnitNarrative } from "@/content/queries"
import { BLOCKS } from "@contentful/rich-text-types"
import { useState, useEffect } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
const util = require("util")

export default async function UnitNarrative({ unitId }: { unitId: string }) {
  const data = await getUnitNarrative(unitId)
  const contentJson = data.unitLessons.unitNarrarive.json
  const links = data.unitLessons.unitNarrarive.links
  const assetBlockMap = new Map()
  console.log(
    util.inspect(links, { showHidden: false, depth: null, colors: true })
  )
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset)
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id)
        // render the asset accordingly
        return (
          <img
            src={asset.url}
            alt="My image alt text"
            // width={asset.width}
            // height={asset.height}
          />
        )
      },
    },
  }
  return (
    <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
      unit narrative content {unitId}
      {documentToReactComponents(contentJson, options)}
    </div>
  )
}
