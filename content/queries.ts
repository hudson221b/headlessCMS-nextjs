/* 
Funtions to fetch content

*/

import { HeroQuery, PartnerLogoQuery } from "@/types"
import { contentGglFetcher } from "./fetch"

export const getHeroContent = async () => {
  // deliberately not choosing heroID to query because it could be changed or deleted by content editor
  const query = `
  query HeroCollection {
    heroCollection {
      items {
      preTitle
      title
      subtitle
      callToActionsCollection {
        items {
          label
          link
        }
      }
    }
  }
}
  `

  const data = await contentGglFetcher<HeroQuery>({ query })

  if (!data){
    throw Error("Something went wrong at getting Hero content")
  }

  return data
}

export const getPartnerLogoContent = async () => {
  const query = `
  query Query($where: AssetFilter) {
  assetCollection(where: $where) {
    items {
      title
      url
      width
      height
    }
  }
}`

  const whereClause = {
    where: {
      title_contains: "partner_logo",
    },
  }
  const data = await contentGglFetcher<PartnerLogoQuery>({
    query,
    variables: whereClause,
  })

  if (!data) {
    throw Error("Something went wrong at getting partner logo content")
  }

  return data
}
