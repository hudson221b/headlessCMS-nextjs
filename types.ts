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
