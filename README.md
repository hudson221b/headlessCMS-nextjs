This is a small-scale replica of an existing product Illustrative Mathematics to get a hang of CMS (Content Management System) and gain deeper understanding of server-side rendering. 

Original product [homepage](https://illustrativemathematics.org/)
Original product [curriculumn](https://accessim.org/6-8/grade-7/unit-1?a=teacher)

Imitated pages:
- Grade 6-8(middle school) [access](https://im-stella.vercel.app/curriculum/ms)
- Grade 7 units [overview](https://im-stella.vercel.app/curriculum/ms/grade-7)
- Unit 1 [content](https://im-stella.vercel.app/curriculum/ms/grade-7/unit-1)

### Cons of Contentful
- does not support batch creation of content
- cannot upload assets to designated folder
- cannot pick fields of the referenced content model


### Backend development challenges
- write correct queries to fetch content when requests get complicated with a lot of modifiers (multiple where, order, etc...)
  - tips: use Apollo sandbox to test queries
- getting full pathname in server component
  - solution: obtain it in middleware and pass it through headers 
- `headers()` in server component returns an empty {}
  - reasons:
    - Static Rendering: Server components are statically rendered by default unless they depend on dynamic data like headers or query parameters. If the component doesn't need dynamic rendering, it could be pre-rendered, so headers may not be available in those cases.
    - Not an HTTP Request Context: If you're testing or rendering without an active request (like using server-side components without an actual page request), the headers object might be empty since there's no real HTTP request. 
  - solution: Force Dynamic Rendering
- Rendering rich-text field from CMS
  - tools: `rich-text-react-renderer`
  - helper function `renderRTF`
  - resources: Contentful docs, `rich-text-react-renderer` examples
- Trimming long narrative based on word count
- Image sizing
  - article and doc https://refine.dev/blog/using-next-image/
  - maintaining aspect ratio but render images smaller than their original size
  - solution: manually setting rendered width based on intrinsic width

### Tech topic dive: caching
#### Use case
Let's say the content editor just corrected an error in a lesson, or added an important tip in CMS. We would like to see the change relfected **in production** immediately without rebuilding the app. 

#### Initial assessement 
We won't immediately see the change even if we reload the page. Because Next.js is going to cache it by default. We need a way to break that cache. 

#### Proposal
1. Setting up a revalidation interval for the content we would like to see updated most frequently. This is done on our fetch request because Nextjs hijacks the fetch call and has its own dealing with it.
```ts
fetch("test-url", {
  method: "POST",
  body: JSON.stringify({query, variables}),
  next:{tags, revalidate:30} // tags is an array of content identifier (string) that tells NextJS to rerun the fetch every xx seconds(not miliseconds) set by revalidate
})
```
2. Setting up an API route to handle the revalidation of certain tag. For example: "unit narrative"
3. Assigning that route to a webhook on Contentful. So when certain content get published on Contentful, this webhook will hit. 
  
