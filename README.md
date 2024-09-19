## Scope
- created a Contentful account
- removed the outdated contentlayer package and created our own data fetching middleware `fetch.ts` using Contentful's GraphQL API
- added Hero content model and its content on Contentful
- fetched content and displayed that in Hero server component

## Demo
![Screenshot 2024-09-18 at 6 47 20 PM](https://github.com/user-attachments/assets/583c7dba-5bd4-4f40-8912-d4ec7ffa140a)

## Takeaways
### 1. contentful does not support next.js app directory on the server side.

### 2. Content model in Contentful

When it comes to design data models on a CMS, there's many approaches before we get into this. You can create a schema for a whole page. So we go through that whole page and we'll make fields and sub fields for everything on that page. And there's nothing wrong with that.I've done that before in the past. But for this approach, I'm not going to do it that way. And the reason is because I want to take advantage of server components. What server components with next.js 13+ is that each component can make its own call to get whatever content that it needs specifically. That way you can put those components anywhere and they'll still work exactly the same. Whereas if we render out an entire page, let's say the sections or the subsections on that page will be dependent on its parent passing in the content that it needs.So therefore it's not as flexible anymore, it's not as reusable.
