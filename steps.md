1. ember new typed-super-rentals --yarn  
2. cd typed-super-rentals
3. ember i ember-cli-typescript@latest
4. vi app/templates/application.hbs (to remove WelcomePage)
5. vi app/templates/index.hbs (to add boilerplate text)
6. Copy in app.css and teaching-tomster.png
7. Commit. 53ae858
8. ember g route about
9. vi app/templates/about.hbs (to add about text)
10. ember g route contact
11. vi app/router.js (to change path for contact)
12. vi app/templates/contact.hbs (to add contact text)
13. Add <LinkTo> buttons to the three routes.
14. Commit. ae7cf71
15. ember g acceptance-test super-rentals
16. vi tests/acceptance/super-rentals-test.ts
17. 
