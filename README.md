## Home-Decor-Website </br>

## Overview

This is a front-end application (SPA) for an online store selling bedroom items (such as bedding), decorations for your house and dining room items (such as plates and cutlery). The website includes all CRUD operations.There will be an admin panel where only the user who is logged in with the admin account will be able to create, update and delete the items. All other users will have accounts so they can order items easier as their data will be prepopulated in the neccassary fields in the order screen. Not logged in users can use the application and make an order too. More information can be read below.

**Admin account** <br>
email: admin@admin.admin <br>
password: 123456 <br>

## Project Status

This project is currently in active development. Below features are **implemented and working**:

- ✅ Template/Layout setup
- ✅ React Router-based navigation
- ✅ User Authentication:
  - Login
  - Register
  - Logout
- ✅ User Authorization (user can visit different pages if he is a guest,logged in user or admin)
  - Guest - can visit Catalog pages (Bedroom, Decor and Dining Room), Details page for all products, Sign in, Sign up, Cart, Delivery and Payment
  - User (not admin) - can visit all pages which a Guest can, his Profile Details page where he can see his data and update it, he has the functionality to log out 
  - Admin - can visit all above-mentioned pages and also the Admin panel where he can see all items, delete them, create a new item and edit currently listed items
- ✅ User Profile:
  - View profile details and edit them.
- ✅ Form validations and error handling for:
  - Login
  - Register
  - Edit profile
- ✅ Bedroom, Decor, and Dining Room Pages:
  - Fetching and displaying items from the database for Bedroom, Decor, and Dining Room pages.
  - Implemented dynamic filter functionality on each page, allowing users to filter products based on specific categories, styles, and other attributes.
More features and improvements are planned as follows:

- ❌ Loading spinner </br>
- ❌ Lazy Loading the admin page </br>
- ❌ Memorization of the application (React.memo, useMemo, useCallback) to improve the application </br>
- ❌ Pagination for the admin List section </br>
- ❌ filter for the catalog pages of each cateogory </br>

- ❌ Fetching items from DB for Bedroom, Decor and Dining Room pages and also the filters in those pages. </br>
- ❌ Fetching item when going into the details of the items from the above-mentioned pages. </br>
- ❌ Order process - Cart functionality with all items visible (adding, removing items and increasing their quantity), Cart Overview with information for the order and also Delivery and Payment section. </br>
- ❌ Admin section where user can create new items to be listed, update existing items and also delete them </br>

# Public Part

The public part consists of the following: <br/>
<br/>
* Home page -> Background image with text and on the bottom three links leading to the Bedroom/Decor/Dining-Room catalog pages.
* Bedroom/Decor/Dining-room catalog pages -> On the top a background image with the name of the catalog page visible and below it all items currently created for this section with the information uploaded by the admin -> name, price and also a view button leading to the details page.
* Details page -> Each item from each category has a details page showing the uploaded image, name, price, characteristics, description and quantity counter. When the user choose the quantity and clicks on add to cart the item goes into his cart, the status of the cart ( a small number below the cart icon in the top right corner of the header) changes and also the item can be viewed when the user hovers over the cart icon in the top right corner of the header.
* Login/Register pages -> You can either login if you have an account or create a new one in order to use the functionalities in the private part.
* Logout -> Logout logs the user out of his account.
* Cart Overview -> When the user clicks on the cart icon he can see all items and their quantities that he has added to his cart and he can also remove them or change the quantity. On the right the user can see a Continue button and also the total amount he has decided to order.
* Delivery and Payment -> Here the user has a small form to fill with details for his delivery and also on the right he has a continue button and above it all items and the quantities he has ordered with total amount for each item and also a total amount for the order.

# Private Part

**Users**

* Profile page -> the user can view and change his profile details also he can erase all the ones he has listed (if for some reason he does not want them to be stored). If the user has details in the Delivery and Payment page he can see them prepopulated.

**Admin**

* Admin page -> The admin can choose either "List" or "Create".
* List -> The admin can chose one of the categories and a list with all currently listed ones will show with two buttons for deleting an item and also for editing one.
* Create -> The user goes to a form where he can fill information in order to create a new item. The mandatory input fields are the photo, category, name and also price of the product.
* Edit -> When the admin goes to the Edit page all the information of the chosen product will be prepopulated and he can change/ erase all of them except the price and name. If the user does not change the picture the same from the database stays. The category fields is disabled and the user cannot change it.
* Delete -> When the admin clicks on the delete button in the List section a pop up will show asking him if he is sure he wants to delete the item. If he accepts the item is removed from the database and the admin goes back to the List page to chose a cateogory to view.

## Technical Details

- React, HTML and CSS are user for the Frontend
- Backend can be found [HERE](https://github.com/icovv/REST-API)<br/>

## How to start the project?

1. Clone the repo
2. Open the folder of the project -> cd home-decor
3. Install dependencies ->  npm install
4. Start the project -> npm run dev
