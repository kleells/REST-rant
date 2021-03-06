# Project REST-rant

REST-rant is an app where users can review restaurants.

TECHNOLOGIES USED:
    CSS Framework: Bootstrap
    Stack: MongoDB, Express, Node.js
    Server-Side Rendering: JSX

STEPS:
- [x] Part 1: Project setup, stub three routes, and creating a README file.
- [x] Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view.
- [x] Part 3: Making more views, creating a layout page, and expanding your README.
- [x] Part 4: Adding some style with CSS.
    - [ ] Part 4 Bonus code
- [x] Part 5: Forms, validation, and navigation.
    -  [ ] Part 5 Bonus code
- [x] Part 6: Implementing delete functionality and adding a DELETE route.
    -  ] Part 6 Bonus code
- [X] Part 7: Implementing edit form and functionality, adding a PUT route.
- [x] Part 8: Implementing the Mongoose ODM.
- [x] Part 9: Seed data, validations, and helper methods.
- [ ] Part 10: Adding commentary: rants and raves.
- [ ] Part 11: Populating data for star ratings.
- [ ] Part 12: Deploying your project# project-REST-rant.

Method  /  Path  /  Purpose

- [x] GET
    - /
    - Home page
- [x] GET
    - /places
    - Places index page
- [x] POST
    - /places
    - Create new place
- [x] GET
    - /places/new
    - Form page for creating a new place
- [x] GET
    - /places/:id
    - Details about a particular place
- [x] PUT
    - /places/:id
    - Update a particular place
- [x] GET
    - /places/:id/edit
    - Form page for editing an existing place
- [x] DELETE
    - /places/:id
    - Delete a particular place
- [x] POST
    - /places/:id/rant
    - Create a rant (comment) about a particular place
- [x] DELETE
    - /places/:id/rant/:rantId
    - Delete a rant (comment) about a particular place
- [x] GET
    - * (asterisk symbol)
    - 404 page (matches any route not defined above)