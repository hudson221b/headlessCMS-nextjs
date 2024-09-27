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
      _id: string
      unitTitle: string
      sectionCollection: {
        items: {
          _id: string
          grade: string
          unit: number
          sectionLabel: string
          sectionGoals: string[]
          title: string
        }[]
      }
    }[]
  }
}