import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
const util = require("util")

/**
 * Parse rich-text content json and render embedded images
 */
export default function RenderRTF({
  json,
  links,
}: {
  json: JSON
  links: any
}) {

  const assetBlockMap = new Map()
  // console.log(
  //   util.inspect(links, { showHidden: false, depth: null, colors: true })
  // )
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
  return documentToReactComponents(json, options) 
  
}
