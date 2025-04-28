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

More features and improvements are planned as follows:

- ❌ Fetching items from DB for Bedroom, Decor and Dining Room pages and also the filters in those pages. </br>
- ❌ Fetching item when going into the details of the items from the above-mentioned pages. </br>
- ❌ Order process - Cart functionality with all items visible (adding, removing items and increasing their quantity), Cart Overview with information for the order and also Delivery and Payment section. </br>
- ❌ Admin section where user can create new items to be listed, update existing items and also delete them </br>

## Technical Details

- React, HTML and CSS are user for the Frontend
- Backend can be found [HERE](https://github.com/icovv/REST-API)<br/>

## How to start the project?

1. Clone the repo
2. Open the folder of the project -> cd home-decor
3. Install dependencies ->  npm install
4. Start the project -> npm run dev
