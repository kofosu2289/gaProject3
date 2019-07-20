## Project Description
- An app geared towards high net worth individuals offering one of a kind luxury products, we will create an ecommerce platform that will allow a certain tier of the population to acquire the goods they need to showcase their superiority to the general population. Users will be able to search for and buy any product their minds can conceive of, from gold-leaf toilet paper (highly impractical) to a miniature giraffe (the definition of opulence, if I do say so myself), as well as view previously unheard - of ultra - lux items (read: saved from the pit of decadence that is the dark web), because we all know poor people's rules don't apply here...
  
##### Expected Challenges
- As a group, we all agree that the authorization and authentication portion of this application will present the most challenges. We decide to use this project as a learning experience. The entire group will complete this portion of functionality together, allowing those with a better grasp to practice explaining the technique to other and those still having difficulties to be caught up to speed.
  
- Another anticipated problem will be getting accustomed to the workflow that comes with collaborative coding. However, we have already taken steps to familiarize all members of the team with this process and we are already improving on this skill.
  
- We also anticipate that as the project grows, we will have to resist the urge to add features that may bring the app closer to our post - MVP goals, but are not necessary to bring this project to completion. To combat this, we have already made a clear distinction between features we absolutely must have and features we wish we could implement.
  
##### MVP 
- User can create an account.
- User is able to login and logout.
- User is able to save specific items in their shopping cart.
- User is able to see the total of all the products in cart, with total collected prices.
- User is able to search for an item through the name and or category.
- User is able to view specific product with image and description.
- User is able to increase the amount of a specific item before adding to cart.
  
  
##### POST MVP
Functional Checkout


## Component Hierarchy
- Header
   - Search bar
       - single product
   - Shopping cart
       - items
       - total
   - Account
       - login
       - register
- Main
   - Categories
       - food
           - show all
               - single product
       - transportation
           - show all
               - single product
       - appliances
           - show all
               - single product
       - pets
           - show all
               - single product
- Footer

## Features List

Ecommerce application that allows the user to search an item by category and item name.


Top of the navbar will be the name of the actual app.

In the middle of the nav bar in the APP is a search bar that can either search by and item category and/or item name.

User opens up the APP and is able to either login if they already have a user name or register a username and password.

To the left of the search bar is two input boxes where the user puts username and password to login.

To the right of the search bar is the cart.

There is also a register button next to login.

When register is clicked the user is promped with a form that asks for first name, last name, username, password and email. Followed by confirm.

Once the user has a username and password they can login.

When logged in the user can search for an item.

The item that is searched is pulled up and rendered unto the page with a brief description aswell as a price and image for said product. Along with a quantity number that can be changed and a add to cart button.

In the product page
At the bottom of the page there will be similar/ related items to the one thats searched aswell as their name and price.

Initially you can search for an item without needing a username and password. 

Add to cart icon on the right side of the header brings you to Cart page.

The cart page shows a list of all the items that have been added to the cart aswell as their quantity, image, brief description and total price of all the items.

## Required Dependencies
- [Express](https://www.npmjs.com/package/express), for easy server initialization.
- [Cors](https://www.npmjs.com/package/cors), to expose middleware that can be used to enable CORS with various options.
- [Body-Parser](https://www.npmjs.com/package/body-parser), to expose middleware that can be used to parse incoming request bodies before your server route handlers.
- [Axios](https://www.npmjs.com/package/axios), to enable promise - based HTTP requests to our Express server.
- [Morgan](https://www.npmjs.com/package/morgan), to expose middleware that can be used to log HTTP requests to our Express server.
- [Nodemon](https://www.npmjs.com/package/nodemon), to allow for automatic restarting of our Express server during development.
- [PG](https://www.npmjs.com/package/pg), a PostgreSQL client for Node.js.
- [Sequelize](https://www.npmjs.com/package/sequelize), a promise based Node.js ORM tool for PostgreSQL.
- [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)