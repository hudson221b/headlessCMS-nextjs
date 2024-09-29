import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { ReactNode } from "react"
import React from "react"
import cloneDeep from 'lodash.clonedeep';
import type { TRtfLinks } from "@/types"

/**
 * Parse rich-text content json and render embedded images
 */
export default function renderRTF(json: JSON, links: TRtfLinks) {
  const assetBlockMap = new Map()

  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset)
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id)
        // resize image 
        const ogWidth: number = asset.width
        let imageStyle = { width: "auto", height: "auto", background:"#cbd5e1" }
        if (150 < ogWidth && ogWidth <= 400) {
          imageStyle.width = "150px"
        } else if (ogWidth > 450 && ogWidth <= 800) {
          imageStyle.width = "50%"
        } else if (ogWidth > 800) {
          imageStyle.width = "400px"
        }
        return (
          <img
            src={asset.url}
            alt="My image alt text"
            width={asset.width}
            height={asset.height}
            style={imageStyle}
            
          />
        )
      },
    },
  }

  return documentToReactComponents(json, options)
}

/**
 * Counts word for one element in parsed rich-text content
 */
export const countWordsRecursively = (element: ReactNode): number => {
  if (typeof element === "string") {
    return element.trim().split(/\s+/).length
  }

  if (React.isValidElement(element)) {
    if (typeof element.props.children === "string") {
      return element.props.children.trim().split(/\s+/).length
    }

    if (Array.isArray(element.props.children)) {
      return element.props.children.reduce(
        (total: number, child: ReactNode) =>
          total + countWordsRecursively(child),
        0
      )
    }

    if (element.props.children) {
      return countWordsRecursively(element.props.children)
    }
  }

  return 0
}

/**
 * For the whole parsed rich-text content, calculates word count of each element in order and returns trimmed content that meets the word limit.
 */
export const getPreviewContent = (content: ReactNode[], wordLimit: number) => {
  let wordCount = 0
  let previewContent: ReactNode[] = []

  for (const element of content) {
    if (React.isValidElement(element)) {
      const elementWordCount = countWordsRecursively(element)
      if (wordCount + elementWordCount <= wordLimit) {
        wordCount += elementWordCount
        previewContent.push(element)
      } else {
        const wordCountToTake = wordLimit - wordCount
        const trimmedText =
          element.props.children[0]
            .split(" ")
            .slice(0, wordCountToTake)
            .join(" ") + "..."
        const elementCopy = cloneDeep(element)
        elementCopy.props.children[0] = trimmedText
        previewContent.push(elementCopy)
        break
      }
    }
  }

  return previewContent
}