# Inventory Management System
## Requirements
- Basic CRUD Functionality. You should be able to:

  - Create inventory items
  - Edit Them
  - Delete Them
  - View a list of them

- ONLY ONE OF THE FOLLOWING (We will only evaluate the first feature chosen, so please only choose one)
  - When deleting, allow deletion comments and undeletion
  - Ability to create warehouses/locations and assign inventory to specific locations
  - Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately

## Running the Application
This code requires the following prerequisites to build:
- Node.js
- MongoDB

To run the code, follow the below steps:
1. `git clone git@github.com:yilinding1017/shopify-challenge.git`
2. `cd shopify-challenge`
3. Start front end: 
  ```
  cd client
  npm i
  npm start
  ```
4. Start server:
  ```
  cd ../server
  npm i
  npm start
  ```
This will begin an instance of the server on http://localhost:3000/ by default and you can see the fronend on http://localhost:7000/. You can test the endpoint using Postman.
