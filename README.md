# typed-super-rentals
 
2. ember new typed-super-rentals --yarn  
3. cd typed-super-rentals
4. ember i ember-cli-typescript@latest
5. vi app/templates/application.hbs (to remove WelcomePage)
6. vi app/templates/index.hbs (to add boilerplate text)
7. Copy in app.css and teaching-tomster.png
8. Commit. 53ae858
9. ember g route about
10. vi app/templates/about.hbs (to add about text)
11. ember g route contact
12. vi app/router.js (to change path for contact)
13. vi app/templates/contact.hbs (to add contact text)
14. Add <LinkTo> buttons to the three routes.
15. Commit. ae7cf71
16. ember g acceptance-test super-rentals
17. vi tests/acceptance/super-rentals-test.ts
18. Commit. 2ff050a
19. ember g component jumbo
  * The blueprint creates a component class
  * The blueprint also places the template in app/templates/components/jumbo.hbs
20. Fix up ember-cli-typescript-blueprints and `yarn link` to my local copy.
21. ember g component jumbo
22. Edit jumbo test
23. ember g component nav-bar
24. Edit acceptance test
25. Move NavBar to application template
26. Commit. ab3f23c
27. ember g component rental
28. Edit Rental test
29. ember g component rental/image
30. add Rental::Image to Rental
31. Edit Rental::Image and Rental tests
32. Move this text to README.
33. 
