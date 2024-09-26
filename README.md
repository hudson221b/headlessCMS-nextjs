
### Cons of Contentful
- does not support batch creation of content
- cannot upload assets to designated folder
- cannot pick fields of the referenced content model


### Backend development challenges
- write correct queries to fetch content when requests get complicated with a lot of modifiers (multiple where, order, etc...)
  - tips: use Apollo sandbox to test queries
- getting full pathname in server component
  - solution: obtain it in middleware and pass it through headers 
