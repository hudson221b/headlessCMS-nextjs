export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string
      title: string
      subtitle: string
      callToActionsCollection: {
        items: {
          label: string
          link: string
        }[]
      }
    }[]
  }
}

export type PartnerLogoQuery = {
  assetCollection: {
    items: {
      title: string
      url: string
      width: number
      height: number
    }[]
  }
}

export type GradeUnitsQuery = {
  unitLessonsCollection: {
    items: {
      unitTitle: string
      unit: number
      sectionCollection: {
        items: {
          unit: number
          title: string
        }[]
      }
    }[]
  }
}


export type UnitIdsQuery = {
  unitLessonsCollection: {
    items: {
      sys: {
        id: string
      }
      unitTitle: string
      sectionCollection: {
        items: {
          sys: {
            id: string
          }
        }[]
      }
    }[]
  }
}

export type RtfLinks = {
  assets: {
    block: {
      width: number
      height: number
      url: string
      contentType: string
      sys: {
        id: string
      }
    }[]
  }
}

export type TUnitNarrative = {
  unitLessons: {
    unitNarrarive: {
      json: JSON
      links: RtfLinks
    }
  }
}

export type SectionQuery = {
  section: {
    grade: string
    unit: number
    sectionLabel: string
    title: string
    sectionGoals: string[]
    sectionNarrative: {
      json: JSON
      links: RtfLinks
    }
    lessonInfoCollection: {
      items: {
        grade: string
        unit: number
        lesson: number
        title: string
        subtitle: string
        sys: {
          id: string
        }
      }[]
    }
  }
}