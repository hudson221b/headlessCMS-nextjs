
### Cons of Contentful
- does not support batch creation of content
- cannot upload assets to designated folder
- cannot pick fields of the referenced content model


### Backend development challenges
- write correct queries to fetch content when requests get complicated with a lot of modifiers (multiple where, order, etc...)
  - tips: use Apollo sandbox to test queries
- getting full pathname in server component
  - solution: obtain it in middleware and pass it through headers 
- headers() in server component returns an empty {}
  - reasons sound complicated from gpt: In Next.js server components, the headers() function retrieves the HTTP request headers, but they are only available during the initial request (server-side). However, in server components, the output of headers() could appear to be an empty object due to the way Next.js renders components and how headers are sent during server-side rendering. Possible Reasons for headersList Being Empty:
    - Static Rendering: Server components are statically rendered by default unless they depend on dynamic data like headers or query parameters. If the component doesn't need dynamic rendering, it could be pre-rendered, so headers may not be available in those cases.
    - Not an HTTP Request Context: If you're testing or rendering without an active request (like using server-side components without an actual page request), the headers object might be empty since there's no real HTTP request. 
  - solution: Force Dynamic Rendering:
  
