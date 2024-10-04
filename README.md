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

  
