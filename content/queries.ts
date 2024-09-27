/* 
Funtions to fetch content

*/
import "server-only"
import {
  HeroQuery,
  PartnerLogoQuery,
  type GradeUnitsQuery,
  type UnitIdsQuery,
  type UnitNarrative,
} from "@/types"
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

  if (!data) {
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

/**
 * Get all units for a grade and all section titles for each unit.
 * @returns units in ascending order
 */
export const getUnitsForGrade = async (grade: string) => {
  const query = `query UnitLessonsCollection($where: UnitLessonsFilter, $order: [UnitLessonsOrder]) {
  unitLessonsCollection(where: $where, order: $order) {
    items {
      unitTitle
      unit
      sectionCollection {
        items {
          unit
          title
        }
      }
    }
  }
}`

  const variables = {
    where: {
      grade: "7",
    },
    order: "unit_ASC",
  }

  const data = await contentGglFetcher<GradeUnitsQuery>({ query, variables })

  if (!data) {
    throw Error("Error getting units for a grade")
  }

  return data
}

/**
 * @returns entry Id for the unit, and entry IDs for all sections in that unit. Sections are sorted A to Z
 */
export const getUnitIds = async (grade: string, unit: number) => {
  const query = `query UnitLessonsCollection($where: UnitLessonsFilter, $order: [UnitLessonsSectionCollectionOrder]) {
  unitLessonsCollection(where: $where) {
    items {
      sys {
        id
      }
      unitTitle
      sectionCollection(order: $order) {
        items {
          sys {
            id
          }
        }
      }
    }
  }
}
  `

  const variables = {
    where: {
      grade: grade,
      unit: unit
    },
    order: "sectionLabel_ASC"
  }

  const data = await contentGglFetcher<UnitIdsQuery>({ query, variables })

  if (!data) {
    throw Error("Error getting unit overview")
  }

  return data
}

/**
 * A separate call to fetch unit narrative both json and links fields to obtain all info needed to render rich text content
 */
export const getUnitNarrative = async (unitEntryId: string) => {
  const query = `query UnitNarrarive($unitLessonsId: String!) {
  unitLessons(id: $unitLessonsId) {
    unitNarrarive {
      json
      links {
        assets {
          block {
            width
            url
            height
            contentType
            sys {
              id
            }
          }
        }
      }
      
    }
  }
}
  `

  const variables = {
    unitLessonsId: unitEntryId,
  }

  const data = await contentGglFetcher<UnitNarrative>({ query, variables })

  if (!data) {
    throw Error("Error getting unit overview")
  }

  return data
}