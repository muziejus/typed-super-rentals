# typed-super-rentals

## Part I
 
### Orientation

2. `ember new typed-super-rentals --yarn  `
3. cd typed-super-rentals
4. `ember i ember-cli-typescript@latest`
5. vi app/templates/application.hbs (to remove WelcomePage)
6. vi app/templates/index.hbs (to add boilerplate text)
7. Copy in app.css and teaching-tomster.png
8. Commit. 53ae858

### Building Pages

9. `ember g route about`
10. vi app/templates/about.hbs (to add about text)
11. `ember g route contact`
12. vi app/router.js (to change path for contact)
13. vi app/templates/contact.hbs (to add contact text)
14. Add <LinkTo> buttons to the three routes.
15. Commit. ae7cf71

### Automated Testing

16. `ember g acceptance-test super-rentals`
17. vi tests/acceptance/super-rentals-test.ts
18. Commit. 2ff050a

### Component Basics

19. `ember g component jumbo`
  * The blueprint creates a component class
  * The blueprint also places the template in app/templates/components/jumbo.hbs
20. Fix up ember-cli-typescript-blueprints and `yarn link` to my local copy.
21. `ember g component jumbo`
22. Edit jumbo test
23. `ember g component nav-bar`
24. Edit acceptance test
25. Move NavBar to application template
26. Commit. ab3f23c

### More About Components

27. `ember g component rental`
28. Edit Rental test
29. `ember g component rental/image`
30. add Rental::Image to Rental
31. Edit Rental::Image and Rental tests
32. Move this text to README.
34. Commit. bi809e8

### Interactive Components

35. `ember generate component-class rental/image`
36. Add isLarge tracked property and toggleSize action to rental/image
37. Reduce duplication in rental/image template
38. Edit rental/image test
34. Commit. 515bb60

### Reusable Components

35. `ember i ember-cli-dotenv`
36. Create .env and edit config/dotenv.js to expect Mapbox API token
37. Add API token to config/environment.js
38. Add member `MAPBOX_ACCESS_TOKEN` to app/config/environment.d.ts
39. `ember generate component map --with-component-class`
40. Define MapComponentArgs in app/components/map.ts
41. Fill out map component and accompanying test.
42. Run into TS errors regarding `src` as a member of `Element | null`
43. Ignore the TS errors with @ts-ignore
44. Commit. 9c4c687

### Working With Data

45. `ember g route index`
46. Skip overwriting index.hbs
47. Add model hook to route and replace template and rental with model properties
  * Need to add interface for `IndexRouteModel`
48. Download data files and put them in public/
49. Change Index route to fetch data.
50. Add `{{#each}}` to Index template.
51. Commit 95661ef

## Part II

### Route Params

52. `ember g route rental`
53. Adjust path of Rental route.
54. Add <LinkTo> to Rental component
55. Add `id` property to Index route model hook 
56. Add model hook to Rental route.
  * Need to add interface for `RentalRouteParams`
56. Adjust Rental component test.
57. `ember g component rental/detailed`
58. Add rental/detailed to Rental route
59. Add Rental route checks to acceptance test.


### Service Injection


